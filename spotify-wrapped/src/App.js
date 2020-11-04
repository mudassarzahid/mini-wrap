import './App.css';
import React from "react";
import TopButton from "./Button/TopButton";
import Card from "./Card/Card";
import axios from 'axios';
import Cookies from 'js-cookie';
import TermButton from "./Button/TermButton";
import Popularity from "./Textfield/Popularity";
import Headline from "./Textfield/Headline";
import AudioFeature from "./Textfield/AudioFeature";

class App extends React.Component {

  state = {
    'headlineEmoji': '',
    'energyEmoji': '',
    'danceabilityEmoji': '',
    'tempoEmoji': '',
    'valenceEmoji': '',
    'user_data': '',
    'artists_data': [],
    'tracks_data': [],
    'tracks_popularity': '',
    'artists_popularity': '',
    'topVisible': 'top_artists',
    'termSelected': 'medium_term',
    'audio_features': ''
  }

  componentDidMount() {
    this.getData('medium_term');
    this.generateHeadlineEmoji();
  }

  getData(term,) {
    const spotify_token = Cookies.get('spotify_token');
    axios.get(`http://localhost:3000/api/top/?term=${term}&spotify_token=${spotify_token}`)
      .then(res => {
        this.setState({
          user_data: res.data.user_data,
          artists_data: res.data.artists_data,
          tracks_data: res.data.tracks_data,
          tracks_popularity: res.data.tracks_popularity,
          artists_popularity: res.data.artists_popularity,
          audio_features: res.data.audio_features
        }, () => {
          this.generateAudioEmoji();
          ;
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  generateHeadlineEmoji() {
    let emoji = ['✌😗', '😤🗣💯', '👁️👄👁️', '🦔🐾', '🤘😎'];
    const randomNumber = Math.round(Math.random() * 4);
    this.setState({headlineEmoji: emoji[randomNumber]});
  }

  generateAudioEmoji() {
    let danceability = this.state.audio_features.danceability;
    let energy = this.state.audio_features.energy;
    let tempo = this.state.audio_features.tempo;
    let valence = this.state.audio_features.valence;

    const danceabilityEmoji = [
      [[0, 1.7], '🧍🧍🧍'],
      [[1.7, 3.3], '🧍🧍'],
      [[3.3, 5.0], '🧍'],
      [[5.0, 6.7], '💃'],
      [[6.7, 8.4], '💃💃'],
      [[8.4, 10.0], '💃💃💃'],
    ]
    const energyEmoji = [
      [[0, 1.7], '💤💤💤'],
      [[1.7, 3.3], '💤💤'],
      [[3.3, 5.0], '💤'],
      [[5.0, 6.7], '⚡'],
      [[6.7, 8.4], '⚡⚡'],
      [[8.4, 10.0], '⚡⚡⚡'],
    ]

    const tempoEmoji = [
      [[0, 40], '🐌🐌🐌'],
      [[40, 66], '🐌🐌'],
      [[66, 76], '🐌'],
      [[76, 120], '🚀'],
      [[120, 168], '🚀🚀'],
      [[168, Number.MAX_VALUE], '🚀🚀🚀'],
    ]
    const valenceEmoji = [
      [[0, 1.7], '😫😫😫'],
      [[1.7, 3.3], '😫😫'],
      [[3.3, 5.0], '😫'],
      [[5.0, 6.7], '😆'],
      [[6.7, 8.4], '😆😆'],
      [[8.4, 10.0], '😆😆😆'],
    ]

    for (let i = 0; i < danceabilityEmoji.length; i++) {
      let valueRange = danceabilityEmoji[i][0];
      let begin = valueRange[0];
      let end = valueRange[1];
      if (danceability >= begin && danceability <= end) {
        this.setState({danceabilityEmoji: danceabilityEmoji[i][1]});
      }
    }

    for (let i = 0; i < energyEmoji.length; i++) {
      let valueRange = energyEmoji[i][0];
      let begin = valueRange[0];
      let end = valueRange[1];
      if (energy >= begin && energy <= end) {
        this.setState({energyEmoji: energyEmoji[i][1]});
      }
    }

    for (let i = 0; i < valenceEmoji.length; i++) {
      let valueRange = valenceEmoji[i][0];
      let begin = valueRange[0];
      let end = valueRange[1];
      if (valence >= begin && valence <= end) {
        this.setState({valenceEmoji: valenceEmoji[i][1]});
      }
    }

    for (let i = 0; i < tempoEmoji.length; i++) {
      let valueRange = tempoEmoji[i][0];
      let begin = valueRange[0];
      let end = valueRange[1];
      if (tempo >= begin && tempo <= end) {
        this.setState({tempoEmoji: tempoEmoji[i][1]});
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div className="container">

            <Headline username={this.state.user_data}
                      emoji={this.state.headlineEmoji}/>

            <div className="term-buttons">
              <TermButton
                onClick={() => {
                  this.setState({termSelected: 'short_term'});
                  this.getData('short_term');
                }}
                value="short_term"
                termdesc="4 weeks"
                isSelected={this.state.termSelected === 'short_term'}/>

              <TermButton
                onClick={() => {
                  this.setState({termSelected: 'medium_term'});
                  this.getData('medium_term');
                }}
                value="medium_term"
                termdesc="6 months"
                isSelected={this.state.termSelected === 'medium_term'}/>

              <TermButton
                onClick={() => {
                  this.setState({termSelected: 'long_term'});
                  this.getData('long_term');
                }}
                value="long_term"
                termdesc="all time"
                isSelected={this.state.termSelected === 'long_term'}/>
            </div>

            <div className="top-buttons">
              <TopButton
                onClick={() =>
                  this.setState({topVisible: 'top_artists'})
                }
                category={'artists'}
                isSelected={this.state.topVisible === "top_artists"}/>

              <TopButton
                onClick={() =>
                  this.setState({topVisible: 'top_tracks'})
                }
                category={'tracks'}
                isSelected={this.state.topVisible === "top_tracks"}/>
            </div>

            <div className="audio-feature-texfield">
              <div>
                <AudioFeature emoji={this.state.danceabilityEmoji}
                              category='danceability'
                              score={this.state.audio_features.danceability}
                              scale='/10'/>
                <AudioFeature emoji={this.state.energyEmoji}
                              category='energy'
                              score={this.state.audio_features.energy}
                              scale='/10'/>
              </div>
              <div>
                <AudioFeature emoji={this.state.tempoEmoji}
                              category='tempo'
                              score={this.state.audio_features.tempo}
                              scale=' bpm'/>
                <AudioFeature emoji={this.state.valenceEmoji}
                              category='valence'
                              score={this.state.audio_features.valence}
                              scale='/10'/>
              </div>
            </div>

            <div className="popularity-textfield">
              <Popularity averagePopularity={this.state.artists_popularity.average_popularity}
                          name={this.state.artists_popularity.least_mainstream_artist_name}
                          isVisible={this.state.topVisible === 'top_artists'}/>

              <Popularity averagePopularity={this.state.tracks_popularity.average_popularity}
                          name={`${this.state.tracks_popularity.least_mainstream_track_name} by 
                                 ${this.state.tracks_popularity.least_mainstream_track_artists}`}
                          isVisible={this.state.topVisible === 'top_tracks'}/>
            </div>

            <div>
              {this.state.tracks_data.map((track_data) => (
                <Card backgroundUrl={track_data.track_background}
                      link={track_data.track_url}
                      text={`${track_data.track_rank} ${track_data.track_name}`}
                      subtext={track_data.track_artists}
                      key={track_data.track_id}
                      isVisible={this.state.topVisible === 'top_tracks'}/>
              ))}
            </div>

            <div>
              {this.state.artists_data.map((artist_data) => (
                <Card backgroundUrl={artist_data.artist_background}
                      link={artist_data.artist_url}
                      text={`${artist_data.artist_rank} ${artist_data.artist_name}`}
                      subtext={artist_data.artist_followers}
                      key={artist_data.artist_id}
                      isVisible={this.state.topVisible === 'top_artists'}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
