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
      <h1>Mini Spotify Wrapped</h1>
      <div className="login-button">
        <SpotifyLogin clientId="8792004e128746f2a9b7dcb46f3912fa"
                      redirectUri="http://localhost:3001/wrapped"
                      onSuccess={response => {
                        console.log(response);
                        let now = new Date();
                        let time = now.getTime();
                        let expireTime = time + 3600;
                        console.log(response)
                        Cookies.set('spotify_token', response.access_token, {expires: expireTime});
                        history.push('/wrapped')
                      }}
                      onFailure={onFailure}/>
      </div>
      <div>
        built by <a href="https://twitter.com/mudassar_z" target="_blank" rel="noreferrer">Mudi</a>
      </div>
    </div>)
};

export default Login;


