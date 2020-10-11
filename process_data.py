import dateutil.parser
import plotly.graph_objs as go
from collections import defaultdict
from datetime import timedelta
from spotify import Spotify


def get_recently(spotify):

  tracks = spotify.recently()

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


def get_dates(spotify):

  data = spotify.recently()

  sorted_list = []

  for i in data['items']:
    date = i['played_at']
    ms_played = i['track']['duration_ms']
    time_plus_ms = dateutil.parser.isoparse(date) + timedelta(milliseconds=ms_played)

    sorted_list.append({'date': str(dateutil.parser.isoparse(date)),
                        'ms_played': ms_played,
                        'time_plus_ms': str(time_plus_ms)})

  return sorted_list


def show_graph(spotify):
  sorted_list = get_dates(spotify)
  count = defaultdict(int)

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

  fig = go.Figure(data=[go.Bar(x=keys, y=values, marker_color=['lightslategray'] * 24)])
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
