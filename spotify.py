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

  def top_songs(self, limit=10):

    check_limit(limit)

    response = requests.get(
        self.API_URL + 'top/songs',
        headers=self.headers,
        params={'limit': limit}
    )

    check_status(response)

    return response.json()

  def top_artists(self, limit=10):

    check_limit(limit)

    response = requests.get(
        self.API_URL + 'top/artists',
        headers=self.headers,
        params={'limit': limit}
    )

    check_status(response)

    return response.json()
