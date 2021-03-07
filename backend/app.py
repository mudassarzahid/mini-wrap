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
    requested_tracks_data = spotify.top_tracks(50, term, 0)
    requested_artists_data = spotify.top_artists(50, term, 0)
    requested_audio_features_data = spotify.audio_features(requested_tracks_data)

    tracks_data = spotify.filter_top_tracks(requested_tracks_data)
    tracks_popularity = spotify.filter_tracks_popularity(requested_tracks_data)
    tracks_collage = spotify.filter_top_tracks_collage(requested_tracks_data)

    artists_data = spotify.filter_top_artists(requested_artists_data)
    artists_popularity = spotify.filter_artists_popularity(requested_artists_data)
    artists_collage = spotify.filter_top_artists_collage(requested_artists_data)

    user_data = spotify.user_data()
    audio_features = spotify.filter_audio_features(requested_audio_features_data)

    return jsonify({
        'user_data': user_data,
        'audio_features': audio_features,
        'tracks_data': tracks_data,
        'tracks_popularity': tracks_popularity,
        'tracks_collage': tracks_collage,
        'artists_data': artists_data,
        'artists_popularity': artists_popularity,
        'artists_collage': artists_collage
    })


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
