import requests
from tokens import get_recently_token
from tokens import get_top_token


def make_recently_request():
  token = get_recently_token()

  headers = {'Authorization': "Bearer {}".format(token)}

  params = (('limit', '50'),)

  response = requests.get('https://api.spotify.com/v1/me/player/recently-played', headers=headers, params=params)

  return response


def make_top_artists_request():
  top()

  response = requests.get('https://api.spotify.com/v1/me/top/artists', headers=headers, params=params)

  return response


def make_top_songs_request():
  top()

  response = requests.get('https://api.spotify.com/v1/me/top/songs', headers=headers, params=params)

  return response


def top():
  token = get_top_token()

  headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer {}".format(token)
  }

  params = (
      ('limit', '50'),
  )
