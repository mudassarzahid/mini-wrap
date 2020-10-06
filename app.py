from flask import Flask, redirect, request
from process_data import get_recently, show_graph, get_dates
from urllib.parse import quote
import requests
import json
from spotify import Spotify
from werkzeug.exceptions import HTTPException

app = Flask(__name__)

#  Client Keys
CLIENT_ID = "0ab0f042b3e44b3086e978dacb7cee47"
CLIENT_SECRET = "ec29fc804051470297355cb8dc37ebfc"

# Spotify URLS
SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize"
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_API_BASE_URL = "https://api.spotify.com"
API_VERSION = "v1"
SPOTIFY_API_URL = "{}/{}".format(SPOTIFY_API_BASE_URL, API_VERSION)

# Server-side Parameters
CLIENT_SIDE_URL = "http://localhost"
PORT = 3000
REDIRECT_URI = "{}:{}/callback".format(CLIENT_SIDE_URL, PORT)
SCOPE = "user-read-recently-played"
STATE = ""
SHOW_DIALOG_bool = True
SHOW_DIALOG_str = str(SHOW_DIALOG_bool).lower()


@app.route('/')
def home():
  return 'hello world'


@app.route('/login')
def login():
  auth_query_parameters = {
      "response_type": "code",
      "redirect_uri": REDIRECT_URI,
      "scope": SCOPE,
      # "state": STATE,
      # "show_dialog": SHOW_DIALOG_str,
      "client_id": CLIENT_ID
  }
  url_args = "&".join(["{}={}".format(key, quote(val)) for key, val in auth_query_parameters.items()])
  auth_url = "{}/?{}".format(SPOTIFY_AUTH_URL, url_args)
  return redirect(auth_url)


@app.route('/callback')
def callback():
  # Auth Step 4: Requests refresh and access tokens
  auth_token = request.args['code']
  code_payload = {
      "grant_type": "authorization_code",
      "code": str(auth_token),
      "redirect_uri": REDIRECT_URI,
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
  }
  post_request = requests.post(SPOTIFY_TOKEN_URL, data=code_payload)

  # Auth Step 5: Tokens are Returned to Application
  response_data = json.loads(post_request.text)
  access_token = response_data["access_token"]
  refresh_token = response_data["refresh_token"]
  token_type = response_data["token_type"]
  expires_in = response_data["expires_in"]

  # Auth Step 6: Use the access token to access Spotify API
  authorization_header = {"Authorization": "Bearer {}".format(access_token)}

  spotify = Spotify(access_token)

  recently = spotify.recently(60)
  return json.dumps(recently, indent=2)


@app.route('/recently_played')
def recently_played():

  return spotify.recently()


@app.route('/graph')
def graph():

  return show_graph()


@app.route('/top/artist')
def get_top_artists():
  pass


@app.route('/top/song')
def get_top_songs():
  pass


@app.route('/exception')
def ex():
  raise Exception("YOOO")


@app.errorhandler(Exception)
def handle_exception(e):

  return json.dumps({
      "description": str(e),
  }), 400


if __name__ == '__main__':
  app.run(debug=True, host='localhost', port=3000)
