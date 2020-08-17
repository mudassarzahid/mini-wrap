from flask import Flask
from spotify import get_recent_tracks

app = Flask(__name__)


@app.route('/recently_played')
def recently_played():

  return get_recent_tracks()


if __name__ == '__main__':
  app.run(debug=True)
