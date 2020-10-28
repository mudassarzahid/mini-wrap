import requests
from exceptions import check_limit, check_status


class Spotify():

  API_URL = 'https://api.spotify.com/v1/me/'

  def __init__(self, token):
    self.token = token

    self.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer {}".format(self.token)
    }

  def recently(self, limit=50):

    check_limit(limit)

    response = requests.get(
        self.API_URL + 'player/recently-played',
        headers=self.headers,
        params={'limit': limit}
    )

    check_status(response)

    return response.json()

  def top_tracks(self, limit=50, time_range='medium_term', offset=0):

    check_limit(limit)

    response = requests.get(
        self.API_URL + 'top/tracks',
        headers=self.headers,
        params=(
            ('time_range', time_range),
            ('limit', limit),
            ('offset', offset),
        ))

    check_status(response)

    return self.filter_top_tracks(response.json())

  def top_artists(self, limit=50, time_range='medium_term', offset=0):

    check_limit(limit)

    response = requests.get(
        self.API_URL + 'top/artists',
        headers=self.headers,
        params=(
            ('time_range', time_range),
            ('limit', limit),
            ('offset', offset),
        ))

    check_status(response)

    return self.filter_top_artists(response.json())

  def filter_top_tracks(self, top_tracks):

    all_track_data = []

    for i, track_data in enumerate(top_tracks['items']):
      track_rank = str(i + 1) + ". "

      if len(track_data['album']['images']) > 0:
        track_background = track_data['album']['images'][0]['url']
      else:
        track_background = ''

      track_name = track_data['name']

      track_artists = []
      for artist in track_data['artists']:
        track_artists.append(artist['name'])

      all_track_data.append({'track_rank': track_rank,
                             'track_background': track_background,
                             'track_name': track_name,
                             'track_artists': ', '.join(track_artists)})

    return all_track_data

  def filter_top_artists(self, top_artists):

    all_artist_data = []

    for i, artist_data in enumerate(top_artists['items']):
      artist_rank = str(i + 1) + ". "

      if len(artist_data['images']) > 0:
        artist_background = artist_data['images'][0]['url']
      else:
        artist_background = ''

      artist_name = artist_data['name']

      artist_followers = '{:,}'.format(artist_data['followers']['total']) + ' followers'

      all_artist_data.append({'artist_rank': artist_rank,
                              'artist_background': artist_background,
                              'artist_name': artist_name,
                              'artist_followers': artist_followers})

    return all_artist_data
