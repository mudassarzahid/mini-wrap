import './App.css';
import React from "react";
import Button from "./Button/Button";
import Card from "./Card/Card";
import axios from 'axios';
import Cookies from 'js-cookie';

class App extends React.Component {

  state = {
    'artists_data': [],
    'tracks_data': [],
    'visible': true
  }

  componentDidMount() {
    const spotify_token = Cookies.get('spotify_token');
    axios.get(`http://localhost:3000/api/top/?term=short_term&spotify_token=${spotify_token}`)
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
    console.log(this.state)

    return (
      <div className="App">
        <div id="wrapper">
          <div className="container">
            <h1>mudi's spotify wrapped</h1>

            <Button onClick={() =>
              this.onClickListener()
            } category={'artists'}/>

            <Button onClick={() =>
              this.onClickListener()
            } category={'tracks'}/>

            {this.state.visible && this.state.tracks_data.map((track_data) => (
              <Card backgroundUrl={track_data.track_background}
                    text={`${track_data.track_rank} ${track_data.track_name}`}
                    subtext={track_data.track_artists}/>
            ))}

            {!this.state.visible && this.state.artists_data.map((artist_data) => (
              <Card backgroundUrl={artist_data.artist_background}
                    text={`${artist_data.artist_rank} ${artist_data.artist_name}`}
                    subtext={artist_data.artist_followers}/>
            ))}
          </div>
        </div>
      </div>
    );
  }

  onClickListener() {
    this.setState({visible: !this.state.visible})
  }

  buttonClick(number) {

    let artistsContent = document.getElementById("artists-ranking-content");
    let tracksContent = document.getElementById("tracks-ranking-content");

    if (number === 1) {
      artistsContent.style.display = "block";
      tracksContent.style.display = "none";
    }

    if (number === 2) {
      tracksContent.style.display = "block";
      artistsContent.style.display = "none";
    }
  }
}

export default App;
