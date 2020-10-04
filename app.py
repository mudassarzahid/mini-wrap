from flask import Flask
from process_data import get_recently
from process_data import show_graph
from process_data import get_dates
from data_requests import Spotify
from token_refresh import index

app = Flask(__name__)
spotify = Spotify()


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


if __name__ == '__main__':
  app.run(debug=True)
