from itertools import islice

import requests

from exceptions import check_limit, check_status

LIMIT = 50


class Spotify:
    API_URL = "https://api.spotify.com/v1"

    def __init__(self, token):
        self.token = token

        self.headers = {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer {}".format(self.token),
        }

    def user_data(self):
        response = requests.get(
            self.API_URL + "/me",
            headers=self.headers,
        )

        check_status(response)

        return response.json()["display_name"]

    def audio_features(self, tracks_data):
        id_list = []
        for i, track_data in enumerate(self.filter_top_tracks(tracks_data)):
            id_list.append(track_data["track_id"])
        ids = ",".join(id_list)

        response = requests.get(
            self.API_URL + "/audio-features",
            headers=self.headers,
            params=(("ids", ids),),
        )

        check_status(response)

        return response.json()

    def top_tracks(self, limit=LIMIT, time_range="medium_term", offset=0):
        check_limit(limit)

        response = requests.get(
            self.API_URL + "/me/top/tracks",
            headers=self.headers,
            params=(
                ("time_range", time_range),
                ("limit", limit),
                ("offset", offset),
            ),
        )

        check_status(response)

        print(response.json())
        return response.json()

    def top_artists(self, limit=LIMIT, time_range="medium_term", offset=0):
        check_limit(limit)

        response = requests.get(
            self.API_URL + "/me/top/artists",
            headers=self.headers,
            params=(
                ("time_range", time_range),
                ("limit", limit),
                ("offset", offset),
            ),
        )

        check_status(response)

        return response.json()

    @staticmethod
    def filter_audio_features(audio_data):
        danceability = 0
        duration_min = 0
        energy = 0
        tempo = 0
        happiness = 0
        number_tracks = 0

        if audio_data["audio_features"] == [None]:
            audio_features_list = {
                "danceability": danceability,
                "duration_min": duration_min,
                "energy": energy,
                "tempo": tempo,
                "happiness": happiness,
            }

        else:
            for i, audio_data in enumerate(audio_data["audio_features"]):
                danceability += audio_data["danceability"]
                duration_min += audio_data["duration_ms"]
                energy += audio_data["energy"]
                tempo += audio_data["tempo"]
                happiness += audio_data["valence"]
                number_tracks += 1

            audio_features_list = {
                "danceability": "{:.1f}".format(
                    round((danceability / number_tracks) * 10, 1)
                ),
                "duration_min": "{:.1f}".format(
                    round((duration_min / number_tracks) / 60000, 1)
                ),
                "energy": "{:.1f}".format(round((energy / number_tracks) * 10, 1)),
                "tempo": "{:.1f}".format(round(tempo / number_tracks, 1)),
                "happiness": "{:.1f}".format(
                    round((happiness / number_tracks) * 10, 1)
                ),
            }

        return audio_features_list

    @staticmethod
    def filter_top_tracks(top_tracks):
        all_track_data = []

        for i, track_data in enumerate(top_tracks["items"]):
            track_rank = str(i + 1) + ". "

            track_id = track_data["id"]

            if len(track_data["album"]["images"]) > 0:
                track_background = track_data["album"]["images"][0]["url"]
            else:
                track_background = ""

            track_name = track_data["name"]
            track_url = track_data["external_urls"]["spotify"]

            track_artists = []
            for artist in track_data["artists"]:
                track_artists.append(artist["name"])

            track_popularity = track_data["popularity"]

            all_track_data.append(
                {
                    "track_id": track_id,
                    "track_rank": track_rank,
                    "track_background": track_background,
                    "track_name": track_name,
                    "track_url": track_url,
                    "track_artists": ", ".join(track_artists),
                    "track_popularity": track_popularity,
                }
            )

        return all_track_data

    @staticmethod
    def filter_top_tracks_collage(top_tracks):
        track_images = []

        for i, track_data in enumerate(islice(top_tracks["items"], 9)):

            if len(track_data["album"]["images"]) > 0:
                track_large_image = track_data["album"]["images"][0]["url"]
                track_medium_image = track_data["album"]["images"][1]["url"]
            else:
                track_large_image = ""
                track_medium_image = ""

            track_name = track_data["name"]
            track_url = track_data["external_urls"]["spotify"]

            track_artists = []
            for artist in track_data["artists"]:
                track_artists.append(artist["name"])

            track_images.append(
                {
                    "url": track_url,
                    "src": track_large_image,
                    "thumbnail": track_medium_image,
                    "thumbnailWidth": 180,
                    "thumbnailHeight": 180,
                    "tags": [
                        {"value": track_name, "title": "track_name"},
                        {"value": ", ".join(track_artists), "title": "track_artists"},
                    ],
                }
            )

        return track_images

    @staticmethod
    def filter_tracks_popularity(top_tracks):
        average_popularity = 0
        number_tracks = LIMIT  # TODO: top_tracks["total"] ?
        least_mainstream_track_score = 100
        least_mainstream_track_name = ""
        least_mainstream_track_url = ""

        if number_tracks == 0:
            tracks_popularity_data = {
                "number_tracks": 0,
                "average_popularity": 0,
                "least_mainstream_track_name": "",
                "least_mainstream_track_score": 0,
            }

            return tracks_popularity_data

        for i, track_data in enumerate(top_tracks["items"]):
            average_popularity += track_data["popularity"]

            if least_mainstream_track_score > track_data["popularity"] >= 5:
                least_mainstream_track_score = track_data["popularity"]
                least_mainstream_track_name = track_data["name"]
                least_mainstream_track_url = track_data["external_urls"]["spotify"]

        tracks_popularity_data = {
            "number_tracks": number_tracks,
            "average_popularity": "{:.1f}".format(
                round((average_popularity / number_tracks) / 10, 1)
            ),
            "least_mainstream_track_name": least_mainstream_track_name,
            "least_mainstream_track_score": "{:.1f}".format(
                round(least_mainstream_track_score / 10, 1)
            ),
            "least_mainstream_track_url": least_mainstream_track_url,
        }

        return tracks_popularity_data

    @staticmethod
    def filter_top_artists(top_artists):
        all_artist_data = []

        for i, artist_data in enumerate(top_artists["items"]):
            artist_rank = str(i + 1) + ". "
            artist_id = artist_data["id"]

            if len(artist_data["images"]) > 0:
                artist_background = artist_data["images"][0]["url"]
            else:
                artist_background = ""

            artist_name = artist_data["name"]
            artist_url = artist_data["external_urls"]["spotify"]
            artist_followers = (
                "{:,}".format(artist_data["followers"]["total"]) + " followers"
            )
            artist_popularity = artist_data["popularity"]

            all_artist_data.append(
                {
                    "artist_id": artist_id,
                    "artist_rank": artist_rank,
                    "artist_background": artist_background,
                    "artist_name": artist_name,
                    "artist_url": artist_url,
                    "artist_followers": artist_followers,
                    "artist_popularity": artist_popularity,
                }
            )

        return all_artist_data

    @staticmethod
    def filter_top_artists_collage(top_artists):
        artist_images = []

        for i, artist_data in enumerate(islice(top_artists["items"], 9)):

            if len(artist_data["images"]) > 0:
                artist_large_image = artist_data["images"][0]["url"]
                artist_medium_image = artist_data["images"][1]["url"]
            else:
                artist_large_image = ""
                artist_medium_image = ""

            artist_name = artist_data["name"]
            artist_url = artist_data["external_urls"]["spotify"]

            artist_images.append(
                {
                    "url": artist_url,
                    "src": artist_large_image,
                    "thumbnail": artist_medium_image,
                    "thumbnailWidth": 180,
                    "thumbnailHeight": 180,
                    "tags": [{"value": artist_name, "title": "artist_name"}],
                }
            )

        return artist_images

    @staticmethod
    def filter_artists_popularity(top_artists):
        average_popularity = 0
        number_artists = LIMIT  # TODO: top_artists["total"] ?
        least_mainstream_artist_score = 100
        least_mainstream_artist_name = ""
        least_mainstream_artist_url = ""

        if number_artists == 0:
            tracks_popularity_data = {
                "number_artists": 0,
                "average_popularity": 0,
                "least_mainstream_artist_name": "",
                "least_mainstream_artist_score": 0,
            }

            return tracks_popularity_data

        for i, artist_data in enumerate(top_artists["items"]):
            average_popularity += artist_data["popularity"]

            if least_mainstream_artist_score > artist_data["popularity"] >= 5:
                least_mainstream_artist_name = artist_data["name"]
                least_mainstream_artist_score = artist_data["popularity"]
                least_mainstream_artist_url = artist_data["external_urls"]["spotify"]

        artists_popularity_data = {
            "number_artists": number_artists,
            "average_popularity": "{:.1f}".format(
                round((average_popularity / number_artists) / 10, 1)
            ),
            "least_mainstream_artist_name": least_mainstream_artist_name,
            "least_mainstream_artist_score": "{:.1f}".format(
                round(least_mainstream_artist_score / 10, 1)
            ),
            "least_mainstream_artist_url": least_mainstream_artist_url,
        }

        return artists_popularity_data
