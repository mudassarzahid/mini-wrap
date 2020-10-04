from bottle import route, run, request
import spotipy
from spotipy import oauth2

SPOTIPY_CLIENT_ID = '0ab0f042b3e44b3086e978dacb7cee47'
SPOTIPY_CLIENT_SECRET = 'ec29fc804051470297355cb8dc37ebfc'
SPOTIPY_REDIRECT_URI = 'http://127.0.0.1:5000/graph'  # oder http://localhost:8080
SCOPE = 'user-library-read'
CACHE = '.spotipyoauthcache'

sp_oauth = oauth2.SpotifyOAuth(SPOTIPY_CLIENT_ID, SPOTIPY_CLIENT_SECRET, SPOTIPY_REDIRECT_URI, scope=SCOPE, cache_path=CACHE)


def index():
  access_token = ""

  token_info = sp_oauth.get_cached_token()

  if token_info:
    print("Found cached token!")
    access_token = token_info['access_token']
  else:
    url = request.url
    code = sp_oauth.parse_response_code(url)
    if code:
      print("Found Spotify auth code in Request URL! Trying to get valid access token...")
      token_info = sp_oauth.get_access_token(code)
      access_token = token_info['access_token']

  if access_token:
    print("Access token available! Trying to get user information...")
    sp = spotipy.Spotify(access_token)
    results = sp.current_user()
    return results

  else:
    return htmlForLoginButton()


def htmlForLoginButton():
  auth_url = getSPOauthURI()
  htmlLoginButton = "<a href='" + auth_url + "'>Login to Spotify</a>"
  return htmlLoginButton


def getSPOauthURI():
  auth_url = sp_oauth.get_authorize_url()
  return auth_url
