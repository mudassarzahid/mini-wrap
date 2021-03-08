import React from "react";
import './Login.css';
import SpotifyLogin from 'react-spotify-login';
import {useHistory} from "react-router-dom";
import GithubCorner from "react-github-corner";

let url;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  url = "http://localhost:3001"
} else {
  url = "https://wrapped.mudi.me"
}

const Login = () => {
  const history = useHistory();
  const onFailure = res => {
    console.error(res);
    history.push('/');
  }
  const onSuccess = res => {
    console.log('response: ', res);
    let access_token = res.access_token
    console.log('access token: ', res.access_token);
    history.push(`/app?access_token=${access_token}`)
  }

  const clientID = '0ab0f042b3e44b3086e978dacb7cee47';
  const redirectUri = `${url}/app`;
  const scope = 'user-top-read user-read-private user-read-email'

  return (
    <>
      <GithubCorner href="https://github.com/mudassarzahid/miniwrap"/>
      <div className="login-headline">Mini Wrap for Spotify</div>
      <div className="login-sub-headline">✨ generate your own collage ✨</div>

      <div className="login-button">
        <SpotifyLogin clientId={clientID}
                      redirectUri={redirectUri}
                      scope={scope}
                      onSuccess={onSuccess}
                      onFailure={onFailure}/>
      </div>

      <div className="built-by">
        built by <a href="https://twitter.com/mudassar_z" target="_blank" rel="noreferrer">Mudi</a>
      </div>
    </>)
};

export default Login;


