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
import Collage from "./Collage/Collage";
import html2canvas from "html2canvas";
import SaveButton from "./Button/SaveButton";


class App extends React.Component {

  state = {
    'headlineEmoji': '',
    'energyEmoji': '',
    'danceabilityEmoji': '',
    'tempoEmoji': '',
    'happinessEmoji': '',
    'tracksPopularityEmoji': '',
    'artistsPopularityEmoji': '',
    'leastMainstreamEmoji': '',
    'user_data': '',
    'artists_data': [],
    'tracks_data': [],
    'tracks_popularity': '',
    'artists_popularity': '',
    'topVisible': 'top_tracks',
    'termSelected': 'medium_term',
    'audio_features': '',
    'tracks_collage': [],
    'artists_collage': [],
    'term_text': '',
    'date': ''
  }

  componentDidMount() {
    this.getData('medium_term');
    this.generateHeadlineEmoji();
  }

  getData(term) {
    const spotify_token = Cookies.get('spotify_token');
    axios.get(`http://localhost:3000/api/top/?term=${term}&spotify_token=${spotify_token}`)
      .then(res => {
        this.setState({
          user_data: res.data.user_data,
          artists_data: res.data.artists_data,
          tracks_data: res.data.tracks_data,
          tracks_popularity: res.data.tracks_popularity,
          artists_popularity: res.data.artists_popularity,
          audio_features: res.data.audio_features,
          tracks_collage: res.data.tracks_collage,
          artists_collage: res.data.artists_collage
        }, () => {
          this.generateAudioEmoji();
          this.generateCollageText();
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
    let happiness = this.state.audio_features.happiness;
    let tracksPopularity = this.state.tracks_popularity.average_popularity;
    let artistsPopularity = this.state.artists_popularity.average_popularity;

    const emojiList = [
      [[0, 1.7], '🧍🧍🧍', '💤💤💤', '😫😫😫', '👤👤👤'],
      [[1.7, 3.3], '🧍🧍', '💤💤', '😫😫', '👤👤'],
      [[3.3, 5.0], '🧍', '💤', '😫', '👤'],
      [[5.0, 6.7], '💃', '⚡', '😆', '🔥'],
      [[6.7, 8.4], '💃💃', '⚡⚡', '😆😆', '🔥🔥'],
      [[8.4, 10.0], '💃💃💃', '⚡⚡⚡', '😆😆😆', '🔥🔥🔥']
    ]

    const tempoEmoji = [
      [[0, 40], '🐌🐌🐌'],
      [[40, 66], '🐌🐌'],
      [[66, 76], '🐌'],
      [[76, 120], '🚀'],
      [[120, 168], '🚀🚀'],
      [[168, Number.MAX_VALUE], '🚀🚀🚀']
    ]

    for (let i = 0; i < 6; i++) {
      let valueRange = emojiList[i][0];
      let begin = valueRange[0];
      let end = valueRange[1];

      if (danceability >= begin && danceability <= end) {
        this.setState({danceabilityEmoji: emojiList[i][1]});
      }
      if (energy >= begin && energy <= end) {
        this.setState({energyEmoji: emojiList[i][2]});
      }
      if (happiness >= begin && happiness <= end) {
        this.setState({happinessEmoji: emojiList[i][3]});
      }
      if (tracksPopularity >= begin && tracksPopularity <= end) {
        this.setState({tracksPopularityEmoji: emojiList[i][4]});
      }
      if (artistsPopularity >= begin && artistsPopularity <= end) {
        this.setState({artistsPopularityEmoji: emojiList[i][4]});
      }
    }

    for (let i = 0; i < 6; i++) {
      let valueRange = tempoEmoji[i][0];
      let begin = valueRange[0];
      let end = valueRange[1];
      if (tempo >= begin && tempo <= end) {
        this.setState({tempoEmoji: tempoEmoji[i][1]});
      }
    }

    this.setState({leastMainstreamEmoji: '🎧'})
  }

  generateCollageText() {
    if (this.state.termSelected === 'short_term') {
      this.setState({term_text: 'this month'})
    } else if (this.state.termSelected === 'medium_term') {
      this.setState({term_text: 'this year'})
    } else if (this.state.termSelected === 'long_term') {
      this.setState({term_text: 'all time'})
    }

    this.setDate();
  }

  setDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    this.setState({date: mm + '/' + dd + '/' + yyyy})
  }

  tracksToCanvas() {
    html2canvas(document.querySelector("#tracks_img"), {
      useCORS: true,
      allowTaint: true,
      scrollY: -window.scrollY
    }).then(canvas => {
      let a = document.createElement('a');
      a.download = "image";
      a.href = canvas.toDataURL();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      a = null;
    });
  }

  toCanvas() {
    html2canvas(document.querySelector("#tracks_img"), {useCORS: true, allowTaint: true}).then(canvas => {
      window.location.href = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    })
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

            <div className="audio-feature-texfield">
              <AudioFeature
                emoji={this.state.danceabilityEmoji}
                category='danceability'
                score={this.state.audio_features.danceability}
                scale='/10'/>
              <AudioFeature
                emoji={this.state.energyEmoji}
                category='energy'
                score={this.state.audio_features.energy}
                scale='/10'/>
              <AudioFeature
                emoji={this.state.tempoEmoji}
                category='tempo'
                score={this.state.audio_features.tempo}
                scale=' bpm'/>
              <AudioFeature
                emoji={this.state.happinessEmoji}
                category='happiness'
                score={this.state.audio_features.happiness}
                scale='/10'/>
            </div>

            <div className="top-buttons">
              <TopButton
                onClick={() =>
                  this.setState({topVisible: 'top_tracks'})
                }
                category={'tracks'}
                isSelected={this.state.topVisible === "top_tracks"}/>

              <TopButton
                onClick={() =>
                  this.setState({topVisible: 'top_artists'})
                }
                category={'artists'}
                isSelected={this.state.topVisible === "top_artists"}/>
            </div>

            <div className="popularity-textfield">
              <Popularity
                popularityEmoji={this.state.artistsPopularityEmoji}
                leastMainstreamEmoji={this.state.leastMainstreamEmoji}
                averagePopularity={this.state.artists_popularity.average_popularity}
                name={this.state.artists_popularity.least_mainstream_artist_name}
                link={this.state.artists_popularity.least_mainstream_artist_url}
                isVisible={this.state.topVisible === 'top_artists'}/>

              <Popularity
                popularityEmoji={this.state.tracksPopularityEmoji}
                leastMainstreamEmoji={this.state.leastMainstreamEmoji}
                averagePopularity={this.state.tracks_popularity.average_popularity}
                name={this.state.tracks_popularity.least_mainstream_track_name}
                link={this.state.tracks_popularity.least_mainstream_track_url}
                isVisible={this.state.topVisible === 'top_tracks'}/>
            </div>


            <div className="collage">

              <div>
                <Collage id="tracks_img"
                         category="tracks"
                         term={this.state.term_text}
                         images={this.state.tracks_collage}
                         isVisible={this.state.topVisible === 'top_tracks'}
                         date={this.state.date}/>

                <SaveButton onClick={this.tracksToCanvas}/>
              </div>

              <div>
                <Collage id="artists_img"
                         category="artists"
                         term={this.state.term_text}
                         images={this.state.artists_collage}
                         isVisible={this.state.topVisible === 'top_artists'}
                         date={this.state.date}/>

                <SaveButton onClick={this.tracksToCanvas}/>
              </div>

            </div>

            <div>
              {this.state.tracks_data.map((track_data) => (
                <Card
                  backgroundUrl={track_data.track_background}
                  link={track_data.track_url}
                  text={`${track_data.track_rank} ${track_data.track_name}`}
                  subtext={track_data.track_artists}
                  key={`card_track_id + ${track_data.track_id}`}
                  isVisible={this.state.topVisible === 'top_tracks'}/>
              ))}
            </div>

            <div>
              {this.state.artists_data.map((artist_data) => (
                <Card
                  backgroundUrl={artist_data.artist_background}
                  link={artist_data.artist_url}
                  text={`${artist_data.artist_rank} ${artist_data.artist_name}`}
                  subtext={artist_data.artist_followers}
                  key={`card_artist_id + ${artist_data.artist_id}`}
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
