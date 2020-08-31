import requests
from tokens import get_token


class Spotify():

  TOKEN = 'BQDKsbbwBnLd2_Qz3yHMtIVNnP8bx-ZUPMF2ivLxbt1K44HVKpolfQmq86CX63LJ2TAFg5C5VHQFhD4vP24nABvL9JGt5_NNsN19XZ7u64NMSiB28vVTKUVQeVIocK1o6jifNv4zffJFpQDAdTvoK3FrL-eVlBmP5mY_vF-23cbX1K6f7G1ItfXBWMHRcPVabL24F6u9SpsCLzA0HKTBbedtS_yz6DAgVX8LxJpbUWXQRCa2B7mjLrmWWRrlJWYyL5-_WPIsRJk'

  API_URL = 'https://api.spotify.com/v1/me/'

  def __init__(self):
    self.token = get_token()

    self.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer {}".format(self.token)
    }

    self.params = {'limit': '50'}

  def make_recently_request():

    response = requests.get(
        self.API_URL + 'player/recently-played',
        headers=self.headers,
        params=self.params
    )

    if response.status_code == 200:
      return response.json()
    return None

  def top_songs(self):
    response = requests.get(
        self.API_URL + 'top/songs',
        headers=self.headers,
        params=self.params
    )

    if response.status_code == 200:
      return response.json()
    return None

    return response

  def top_artists(self):
    response = requests.get(
        self.API_URL + 'top/artists',
        headers=self.headers,
        params=self.params
    )

    if response.status_code == 200:
      return response.json()
    return None
