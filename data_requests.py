import requests
import spotipy


class Spotify():

  TOKEN = 'BQDiKhUVTfaenxZ5Mz1XCF00gTRk-NWVwGvOY5-QIY4-vQPha52DHMA0KCzK8z6EAtbSpnK3ks8IAxjz4O9DjB5rMZDx_FkmPwQzVLqC4zB7i3D8SLk7YK6UYeSyIH0qHvECEgqkjCVZGUaNayLh62DHfKOR-JelLADXEmDUp8moeMGWw5tT7SW4eZN0E-FyKaCORmcnygbIyFs1sGH-i6dnOZinU-dDNTiFX7k9bs8WmLHoOG9DXonXbsHwH_HgBgSCrdoqTyA'

  API_URL = 'https://api.spotify.com/v1/me/'

  def __init__(self):
    self.token = self.TOKEN

    self.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer {}".format(self.token)
    }

  def recently(self, limit=50):

    if limit > 50 or limit <= 0:
      raise Exception('Limit must be between 0 and 50.')

    response = requests.get(
        self.API_URL + 'player/recently-played',
        headers=self.headers,
        params={'limit': limit}
    )

    if response.status_code == 200:
      return response.json()
    return None

  def top_songs(self, limit=10):

    if limit > 50 or limit <= 0:
      raise Exception('Limit must be between 0 and 50.')

    response = requests.get(
        self.API_URL + 'top/songs',
        headers=self.headers,
        params={'limit': limit}
    )

    if response.status_code == 200:
      return response.json()
    return None

    return response

  def top_artists(self, limit=10):

    if limit > 50 or limit <= 0:
      raise Exception('Limit must be between 0 and 50.')

    response = requests.get(
        self.API_URL + 'top/artists',
        headers=self.headers,
        params={'limit': limit}
    )

    if response.status_code == 200:
      return response.json()
    return None
