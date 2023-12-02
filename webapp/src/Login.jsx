import './Login.css';
import 'react-spotify-auth/dist/index.css';

import React from "react";
import GithubCorner from "react-github-corner";
import {Scopes,SpotifyAuth} from 'react-spotify-auth';

const url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? "http://localhost:3001" : "https://wrapped.mudi.me";


const Login = () => {
  const clientID = '0ab0f042b3e44b3086e978dacb7cee47';
  const redirectUri = `${url}/app`;
  const scope = [Scopes.userTopRead, Scopes.userReadPrivate, Scopes.userReadEmail]

  return (
    <>
      <GithubCorner href="https://github.com/mudassarzahid/miniwrap"/>
      <div className="login-headline">Mini Wrap for Spotify</div>
      <div className="login-sub-headline">generate your own collage</div>

      <div className="login-button">
        <SpotifyAuth
          redirectUri={redirectUri}
          clientID={clientID}
          scopes={scope}
        />
      </div>

      <div className="built-by">
        built by <a href="https://www.linkedin.com/in/mudassarzahid/" target="_blank" rel="noreferrer">Mudi</a>
      </div>
    </>)
};

export default Login;


