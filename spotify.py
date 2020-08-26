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

#plotly.tools.set_credentials_file(username='Mudi99', api_key='ttM0yUXO9HVbNqjKTqEn')


def make_recently_played_request():
  token = 'BQAwCWrsKhQCUrhXUHydd25XiQTNgfPQ4Gub1RjnHgtMX_qhsx2_lRvjD3BgAR-kyzwzfRuupT_svougsTllfBKEfqKvm4C0i3XfZ8W-TnM3QCA2JXffCvpc3TNTPxS3xelcTWIChJgNyN_v26jNPks'

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
  sorted_list = get_dates()

  fig = px.line(sorted_list, x='date', y=[3, 5, 6, 5, 6, 7, 8, 8, 8, 88, 8, 8, 8, 8, 4, 3, 3, 1, 3, 4, 5, 6, 7, 4])
  fig.show()


def dddddd():

  data = get_all_data()
  date = []
  ms_played = []
  for i in data['items']:
    date.append(i['played_at'])
    ms_played.append((i['track']['duration_ms']) / 60000)

  smoothTrace = {'type': 'scatter', 'mode': 'lines',
                 'x': date, 'y': ms_played, 'line': {'shape': 'spline'}}

  py.offline.iplot([smoothTrace])


dddddd()
