import requests
import json


def get_recent_tracks():

  headers = {
      'Authorization': 'Bearer BQDbZrv0nQMhwUANUEXd2-WTNWkoGuLE2HBMM6Z-RE0O7fZHSOojz3-f9iAL2BIf1AGU9qDfC6u1ld6tfm7F68AFJFdIwn38ZQYp8Ap3KfmPvJT9KFDBnuwT-g3CvlQFJ5nS6tteOojyrs7gfw',
  }

  params = (
      ('limit', '10'),
  )

  response = requests.get('https://api.spotify.com/v1/me/player/recently-played', headers=headers, params=params)

  return json.dumps(extract_data(response.json()))


def extract_data(tracks):

  songs = []
  for i in tracks['items']:
    song = i['track']['name']
    artists = []
    for j in i['track']['artists']:
      artists.append(j['name'])

    songs.append({"Song": song,
                  "Artists": artists})

  return songs
