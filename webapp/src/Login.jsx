import React from "react";
import './Login.css';
import SpotifyLogin from 'react-spotify-login';
import Cookies from 'js-cookie';
import {useHistory} from "react-router-dom";


const onFailure = response => console.error(response);

const Login = props => {
  let history = useHistory();
  let url;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = "http://localhost:3001"
  } else {
    url = "https://wrapped.mudi.me"
  }

  return (
    <div>
      <div className="login-headline">Mini Spotify Wrap</div>
      <div className="login-sub-headline">generate your own Spotify collage</div>

      <div className="login-button">
        <SpotifyLogin clientId="0ab0f042b3e44b3086e978dacb7cee47"
                      redirectUri={`${url}/app`}
                      scope="user-top-read user-read-private user-read-email"
                      onSuccess={response => {
                        console.log(response);
                        let access_token = response.access_token
                        console.log(response)
                        history.push(`/app?access_token=${access_token}`)
                      }}
                      onFailure={onFailure}/>
      </div>

      <div className="sample-collages">
        <img src="/sample_collage.png" alt="sample_tracks_collage"/>
      </div>
      <div>
        built by <a href="https://twitter.com/mudassar_z" target="_blank" rel="noreferrer">Mudi</a>
      </div>

    </div>)
};

export default Login;


