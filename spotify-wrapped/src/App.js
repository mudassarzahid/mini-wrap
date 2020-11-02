import './App.css';
import React from "react";
import TopButton from "./Button/TopButton";
import Card from "./Card/Card";
import axios from 'axios';
import Cookies from 'js-cookie';
import TermButton from "./Button/TermButton";
import Gallery from "react-photo-gallery";
import {photos} from "./photos";

class App extends React.Component {

  state = {
    'artists_data': [],
    'tracks_data': [],
    'topVisible': 'top_artists',
    'termSelected': 'medium_term'
  }

  componentDidMount() {
    this.getTopData();
  }

  getTopData() {
    const spotify_token = Cookies.get('spotify_token');
    axios.get(`http://localhost:3000/api/top/?term=${this.state.termSelected}&spotify_token=${spotify_token}`)
      .then(res => {
        this.setState({
          artists_data: res.data['artists_data'],
          tracks_data: res.data['tracks_data']
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div className="container">
            <h1>mudi's spotify wrapped</h1>

            <span style={{display: 'inline-flex'}}>
            <TermButton
              onClick={() => {
                this.setState({termSelected: 'short_term'});
                this.getTopData();
              }}
              value="short_term"
              termdesc="4 weeks"
              isSelected={this.state.termSelected === 'short_term'}/>
            <TermButton
              onClick={() => {
                this.setState({termSelected: 'medium_term'});
                this.getTopData();
              }}
              value="medium_term"
              termdesc="6 months"
              isSelected={this.state.termSelected === 'medium_term'}/>
            <TermButton
              onClick={() => {
                this.setState({termSelected: 'long_term'});
                this.getTopData();
              }}
              value="long_term"
              termdesc="all time"
              isSelected={this.state.termSelected === 'long_term'}/>
            </span>

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

            {this.state.tracks_data.map((track_data) => (
              <Card backgroundUrl={track_data.track_background}
                    text={`${track_data.track_rank} ${track_data.track_name}`}
                    subtext={track_data.track_artists}
                    key={track_data.track_rank}
                    isVisible={this.state.topVisible === 'top_tracks'}/>
            ))}

            {this.state.artists_data.map((artist_data) => (
              <Card backgroundUrl={artist_data.artist_background}
                    text={`${artist_data.artist_rank} ${artist_data.artist_name}`}
                    subtext={artist_data.artist_followers}
                    key={artist_data.artist_rank}
                    isVisible={this.state.topVisible === 'top_artists'}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
