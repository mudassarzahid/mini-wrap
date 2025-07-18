<p align="center">
  <h3 align="center">Mini Wrap for Spotify</h3>
  <p align="center">
    A <a title="wrapped.mudi.me" href="https://wrapped.mudi.me/" target="_blank" rel="noreferrer">web application</a> that uses Spotify's Web API to generate a collage for your top tracks & top artists and display audio features (see example below).
    <br />
</p>


### Built With

* [Spotify Web API](https://developer.spotify.com/)
* [React](https://github.com/facebook/react)
* [Flask](https://github.com/pallets/flask)
* [Axios](https://github.com/axios/axios)
* [html2canvas](https://github.com/niklasvh/html2canvas)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.


### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:mudassarzahid/miniwrap.git
   ```
2. Create a virtual environment for the backend and activate it
   ```sh
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   ```
3. Install required modules and run the backend
   ```sh
   pip install -r requirements.txt
   python app.py
   ```
4. Open another tab for the frontend, install required modules and run the frontend
   ```sh
   cd webapp
   yarn install
   yarn start
   ```


## Usage example
<span align="center">
<img src="webapp/public/example.png" alt="example">
</span>
