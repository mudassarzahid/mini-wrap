import './App.css';
import React from "react";
import TopButton from "./Button/TopButton";
import Card from "./Card/Card";
import axios from 'axios';
import Cookies from 'js-cookie';
import TermButton from "./Button/TermButton";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

class App extends React.Component {

  state = {
    'artists_data': [],
    'tracks_data': [],
    'visible': false
  }

  componentDidMount() {
    const spotify_token = Cookies.get('spotify_token');
    const term = "long_term"
    axios.get(`http://localhost:3000/api/top/?term=${term}&spotify_token=${spotify_token}`)
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

        const App = () => <Gallery photos={photos} />;
        render(<App />, document.getElementById("app"));

        <div id="wrapper">
          <div className="container">
            <h1>mudi's spotify wrapped</h1>

            <span style={{display: 'inline-flex'}}>
            <TermButton value="short_term" termdesc="4 weeks"/>
            <TermButton value="medium_term" termdesc="6 months"/>
            <TermButton value="long_term" termdesc="all time"/>
            </span>

            <TopButton onClick={() =>
              this.onClickListener()
            } category={'artists'}/>

            <TopButton onClick={() =>
              this.onClickListener()
            } category={'tracks'}/>

            {this.state.visible && this.state.tracks_data.map((track_data) => (
              <Card backgroundUrl={track_data.track_background}
                    text={`${track_data.track_rank} ${track_data.track_name}`}
                    subtext={track_data.track_artists}
                    key={track_data.track_rank}/>
            ))}

            {!this.state.visible && this.state.artists_data.map((artist_data) => (
              <Card backgroundUrl={artist_data.artist_background}
                    text={`${artist_data.artist_rank} ${artist_data.artist_name}`}
                    subtext={artist_data.artist_followers}
                    key={artist_data.artist_rank}/>
            ))}
          </div>
        </div>
      </div>
    );
  }

  onClickListener() {
    this.setState({visible: !this.state.visible})
  }
}

export default App;
