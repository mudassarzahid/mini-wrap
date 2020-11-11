import React from "react";
import './Login.css';
import SpotifyLogin from 'react-spotify-login';
import Cookies from 'js-cookie';
import {useHistory} from "react-router-dom";


const onFailure = response => console.error(response);

const Login = props => {
  let history = useHistory();

  return (
    <div>
      <div>Mini Spotify Wrapped</div>
      <div>
        <SpotifyLogin clientId="0ab0f042b3e44b3086e978dacb7cee47"
                      redirectUri="http://localhost:3001/login"
                      onSuccess={response => {
                        console.log(response);
                        Cookies.set('spotify_token', response.access_token);
                        history.push('/')
                      }}
                      onFailure={onFailure}/>
      </div>
      <div>
        built by <a href="https://twitter.com/mudassar_z" target="_blank" rel="noreferrer">Mudi</a>
      </div>
    </div>)
};

export default Login;


