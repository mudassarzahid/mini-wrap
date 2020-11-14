from flask import Flask, request
from flask_cors import CORS
from spotify import Spotify
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/api/top/')
def get_top():
  cookie = request.args.get('spotify_token')
  term = request.args.get('term')

  if not cookie:
    raise Exception('No cookie')

  spotify = Spotify(cookie)
  user_data = spotify.user_data()
  tracks_data = spotify.top_tracks(50, term, 0)
  artists_data = spotify.top_artists(50, term, 0)
  tracks_popularity = spotify.tracks_popularity(50, term, 0)
  artists_popularity = spotify.artists_popularity(50, term, 0)
  audio_features = spotify.audio_features(50, term, 0)
  tracks_collage = spotify.top_tracks_collage(50, term, 0)
  artists_collage = spotify.top_artists_collage(50, term, 0)

  return jsonify({'user_data': user_data,
                  'tracks_data': tracks_data,
                  'artists_data': artists_data,
                  'tracks_popularity': tracks_popularity,
                  'artists_popularity': artists_popularity,
                  'audio_features': audio_features,
                  'tracks_collage': tracks_collage,
                  'artists_collage': artists_collage})


@app.errorhandler(Exception)
def handle_exception(e):

  return json.dumps({
      "description": str(e),
  }), 400


def jsonify(data):
  return app.response_class(
      response=json.dumps(data, indent=2),
      status=200,
      mimetype='application/json'
  )


if __name__ == '__main__':
  app.run(debug=True, host='localhost', port=3000)
