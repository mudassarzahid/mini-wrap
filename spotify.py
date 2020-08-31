import json
import requests
import plotly.express as px
import dateutil.parser
import plotly as py
import plotly.graph_objs as go
import ipywidgets as widgets
from scipy import special
import pandas as pd
from datetime import datetime
from datetime import timedelta
from collections import defaultdict
import chart_studio as cs

# plotly.tools.set_credentials_file(username='Mudi99', api_key='ttM0yUXO9HVbNqjKTqEn')


def make_recently_played_request():
  token = 'BQDeysP6KIAQ6OIVtDNShOaql6CQOtH9M23VsIzruBVL9oljtJxKReinTb1G8hB9eoV0TZqtwGG_500ur7uJlxvxRsALgjVU1dLonUm-bXvHKNjezAeqIcNvv4HbrI4oXvv2AjDQRFqcs4p8_jPcv9k'

  headers = {'Authorization': "Bearer {}".format(token)}

  params = (('limit', '50'),)

  response = requests.get('https://api.spotify.com/v1/me/player/recently-played', headers=headers, params=params)

  return response


def get_all_data():
  response = make_recently_played_request()
  return response.json()


def get_recent_tracks():
  response = make_recently_played_request()
  return json.dumps(extract_songs_artists_images(response.json()))


def get_dates():
  response = make_recently_played_request()
  return extract_date(response.json())


def extract_songs_artists_images(tracks):
  sorted_list = []
  for i in tracks['items']:
    song = i['track']['name']
    image = i['track']['album']['images'][1]['url']

    artists = []
    for j in i['track']['artists']:
      artists.append(j['name'])

    sorted_list.append({"song": song,
                        "artists": artists,
                        "image": image})

  return sorted_list


def extract_date(data):
  sorted_list = []
  for i in data['items']:
    date = i['played_at']
    ms_played = i['track']['duration_ms']
    time_plus_ms = dateutil.parser.isoparse(date) + timedelta(milliseconds=ms_played)

    sorted_list.append({'date': str(dateutil.parser.isoparse(date)),
                        'ms_played': ms_played,
                        'time_plus_ms': str(time_plus_ms)})

  return sorted_list


def show_graph():
  # py.offline.init_notebook_mode(connected=True)
  # cs.tools.set_credentials_file(username='Mudi99', api_key='ttM0yUXO9HVbNqjKTqEn')

  sorted_list = get_dates()  # date, ms played, time plus ms

  count = defaultdict(int)   # anzahl songs

  # hours = []               # 00-23
  # for i in range(24):
  #   hour = "{0:0=2d}".format(i)
  #   hours.append({'hour': hour})

  hours_liste = []
  for i in sorted_list:
    hours_liste.append(i['date'][0:13])
  for i in hours_liste:
    count[i] += 1

  keys = []
  for key, value in count.items():
    keys.append(key)

  values = []
  for key, value in count.items():
    values.append(value)

  # für line graph, ist aber hässlich
  # smoothTrace = {'type': 'scatter', 'mode': 'lines', 'x': keys, 'y': values, 'line': {'shape': 'spline'}}
  # py.offline.iplot([smoothTrace])

  fig = go.Figure(data=[go.Bar(x=keys, y=values, marker_color=['lightslategray', ] * 24)])
  fig.update_layout(
      title="Songs Listened to per Hour",
      xaxis_title="Time",
      yaxis_title="# of Songs",
      font=dict(
          family="Lucida Sans, monospace",
          size=18,
          color="#663399")
  )
  fig.show()


def top_artists_request():

  token = 'BQBAColf6WNDL1FoyLjAVkORT1MuKsVTT8SO7a37a8cJODIzIYNNUMUJYDJwesw4KnnA_pKLM9-kLwZgBb0_j88sF7yACdmq42eHVKtWp7Wo6zpnvuCOQwEPj1V04DTilw__VWN_4M9dHd3f7L1h660'

  headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer {}".format(token)
  }

  params = (('limit', '50'),)

  response = requests.get('https://api.spotify.com/v1/me/top/artists', headers=headers, params=params)

  return response


def top_songs_request():

  token = 'BQAKgQTH4kx10oi3jrDvvaYDJ-i6nuwM7N1qEhKCreA6Mf_jL0oZWNInaP7eA70SzZ6ubh1nuCnFYsTyTUsdOuIaj_8XU7-6D0QgQPgd5owi76P-R0uzwLHoq4efo2dSTBn9MhkpScrYlyDLym41Kps'

  headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': "Bearer {}".format(token)
  }

  params = (
      ('limit', '50'),
  )

  response = requests.get('https://api.spotify.com/v1/me/top/songs', headers=headers, params=params)

  return response


def get_all_top_artists_data():
  response = top_artists_request()
  return response.json()


def get_all_top_songs_data():
  response = top_songs_request()
  return response.json()


show_graph()
