from flask import Flask
from spotify import get_recent_tracks
from spotify import show_graph
from spotify import get_dates

app = Flask(__name__)


@app.route('/recently_played')
def recently_played():

  return get_recent_tracks()


@app.route('/graph')
def graph():

  return show_graph()


if __name__ == '__main__':
  app.run(debug=True)
