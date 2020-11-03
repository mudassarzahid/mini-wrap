import requests
from exceptions import check_limit, check_status


class Spotify():

  API_URL = 'https://api.spotify.com/v1'

  def __init__(self, token):

    self.token = token

    self.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer {}".format(self.token)
    }

  def user_data(self):

    response = requests.get(
        self.API_URL + '/me',
        headers=self.headers)

    check_status(response)

    return response.json()['display_name']

  def audio_features(self):

    id_list = []
    for i, track_data in enumerate(self.top_tracks()):
      id_list.append(track_data['track_id'])
    ids = ','.join(id_list)

    response = requests.get(
        self.API_URL + '/audio-features',
        headers=self.headers,
        params=(
            ('ids', ids),
        ))

    check_status(response)

    return self.filter_audio_features(response.json())

  def filter_audio_features(self, audio_data):

    number_tracks = 0
    danceability = 0
    energy = 0
    key = 0
    loudness = 0
    mode = 0
    speechiness = 0
    acousticness = 0
    instrumentalness = 0
    liveness = 0
    valence = 0
    duration_min = 0
    time_signature = 0

    for i, audio_data in enumerate(audio_data['audio_features']):
      danceability += audio_data['danceability']
      energy += audio_data['energy']
      key += audio_data['key']
      loudness += audio_data['loudness']
      mode += audio_data['mode']
      speechiness += audio_data['speechiness']
      acousticness += audio_data['acousticness']
      instrumentalness += audio_data['instrumentalness']
      liveness += audio_data['liveness']
      valence += audio_data['valence']
      duration_min += audio_data['duration_ms']
      time_signature += audio_data['time_signature']
      number_tracks += 1

    audio_features_list = {'danceability': round(danceability / number_tracks, 1) * 100,
                           'energy': round(energy / number_tracks, 1) * 100,
                           'loudness': round(loudness / number_tracks, 1),
                           'mode': round(mode / number_tracks, 1) * 100,
                           'speechiness': round(speechiness / number_tracks, 1) * 100,
                           'acousticness': round(acousticness / number_tracks, 1) * 100,
                           'instrumentalness': round(instrumentalness / number_tracks, 2) * 100,
                           'liveness': round(liveness / number_tracks, 1) * 100,
                           'valence': round(valence / number_tracks, 1) * 100,
                           'duration_min': round((duration_min / number_tracks) / 60000, 2),
                           'time_signature': round(time_signature / number_tracks, 1)}

    return(audio_features_list)

  def top_tracks(self, limit=50, time_range='medium_term', offset=0):

    check_limit(limit)

    response = requests.get(
        self.API_URL + '/me/top/tracks',
        headers=self.headers,
        params=(
            ('time_range', time_range),
            ('limit', limit),
            ('offset', offset),
        ))

    check_status(response)

    return self.filter_top_tracks(response.json())

  def tracks_popularity(self, limit=50, time_range='medium_term', offset=0):

    check_limit(limit)

    response = requests.get(
        self.API_URL + '/me/top/tracks',
        headers=self.headers,
        params=(
            ('time_range', time_range),
            ('limit', limit),
            ('offset', offset),
        ))

    check_status(response)

    return self.filter_tracks_popularity(response.json())

  def top_artists(self, limit=50, time_range='medium_term', offset=0):

    check_limit(limit)

    response = requests.get(
        self.API_URL + '/me/top/artists',
        headers=self.headers,
        params=(
            ('time_range', time_range),
            ('limit', limit),
            ('offset', offset),
        ))

    check_status(response)

    return self.filter_top_artists(response.json())

  def artists_popularity(self, limit=50, time_range='medium_term', offset=0):

    check_limit(limit)

    response = requests.get(
        self.API_URL + '/me/top/artists',
        headers=self.headers,
        params=(
            ('time_range', time_range),
            ('limit', limit),
            ('offset', offset),
        ))

    check_status(response)

    return self.filter_artists_popularity(response.json())

  def filter_top_tracks(self, top_tracks):

    all_track_data = []

    for i, track_data in enumerate(top_tracks['items']):
      track_rank = str(i + 1) + ". "

      track_id = track_data['id']

      if len(track_data['album']['images']) > 0:
        track_background = track_data['album']['images'][0]['url']
      else:
        track_background = ''

      track_name = track_data['name']

      track_artists = []
      for artist in track_data['artists']:
        track_artists.append(artist['name'])

      track_popularity = track_data['popularity']

      all_track_data.append({'track_id': track_id,
                             'track_rank': track_rank,
                             'track_background': track_background,
                             'track_name': track_name,
                             'track_artists': ', '.join(track_artists),
                             'track_popularity': track_popularity})

    return all_track_data

  def filter_top_artists(self, top_artists):

    all_artist_data = []

    for i, artist_data in enumerate(top_artists['items']):
      artist_rank = str(i + 1) + ". "

      artist_id = artist_data['id']

      if len(artist_data['images']) > 0:
        artist_background = artist_data['images'][0]['url']
      else:
        artist_background = ''

      artist_name = artist_data['name']

      artist_followers = '{:,}'.format(artist_data['followers']['total']) + ' followers'

      artist_popularity = artist_data['popularity']

      all_artist_data.append({'artist_id': artist_id,
                              'artist_rank': artist_rank,
                              'artist_background': artist_background,
                              'artist_name': artist_name,
                              'artist_followers': artist_followers,
                              'artist_popularity': artist_popularity})

    return all_artist_data

  def filter_artists_popularity(self, top_artists):

    average_popularity = 0
    number_artists = top_artists['total']
    least_mainstream_artist_score = 100

    if number_artists == 0:
      tracks_popularity_data = {'number_artists': 0,
                                'average_popularity': 0,
                                'least_mainstream_artist_name': '',
                                'least_mainstream_artist_score': 0}

      return tracks_popularity_data

    for i, artist_data in enumerate(top_artists['items']):
      average_popularity += artist_data['popularity']

      if artist_data['popularity'] < least_mainstream_artist_score and artist_data['popularity'] > 0:
        least_mainstream_artist_name = artist_data['name']
        least_mainstream_artist_score = artist_data['popularity']

    artists_popularity_data = {'number_artists': number_artists,
                               'average_popularity': round(average_popularity / number_artists),
                               'least_mainstream_artist_name': least_mainstream_artist_name,
                               'least_mainstream_artist_score': least_mainstream_artist_score}

    return artists_popularity_data

  def filter_tracks_popularity(self, top_tracks):

    average_popularity = 0
    number_tracks = top_tracks['total']
    least_mainstream_track_score = 100

    if number_tracks == 0:
      tracks_popularity_data = {'number_tracks': 0,
                                'average_popularity': 0,
                                'least_mainstream_track_name': '',
                                'least_mainstream_track_artists': '',
                                'least_mainstream_track_score': 0}

      return tracks_popularity_data

    for i, track_data in enumerate(top_tracks['items']):
      average_popularity += track_data['popularity']

      if track_data['popularity'] < least_mainstream_track_score and track_data['popularity'] > 0:
        least_mainstream_track_artists = []
        for artist in track_data['artists']:
          least_mainstream_track_artists.append(artist['name'])
        least_mainstream_track_score = track_data['popularity']
        least_mainstream_track_name = track_data['name']

    tracks_popularity_data = {'number_tracks': number_tracks,
                              'average_popularity': round(average_popularity / number_tracks),
                              'least_mainstream_track_name': least_mainstream_track_name,
                              'least_mainstream_track_artists': ', '.join(least_mainstream_track_artists),
                              'least_mainstream_track_score': least_mainstream_track_score}

    return tracks_popularity_data

  def function():
    pass

  def recently(self, limit=50):

    check_limit(limit)

    response = requests.get(
        self.API_URL + '/me/player/recently-played',
        headers=self.headers,
        params={'limit': limit}
    )

    check_status(response)

    return response.json()
