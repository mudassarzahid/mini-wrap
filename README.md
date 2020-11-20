# Mini Wrap for Spotify

This is a [web application](https://wrapped.mudi.me/) that uses Spotify's Web API to generate a collage for your top tracks & top artists and display audio features. 

## Running the app locally
##### clone the repository:
```
git clone git@github.com:mudassarzahid/miniwrap.git
```
### Running the backend:
```
cd backend
```
##### Create a virtual environment for the backend:
```
python3 -m venv venv
source venv/bin/activate
```
##### Install required modules and run the backend:
```
pip install -r requirements.txt
python app.py
```

### Running the frontend
```
cd webapp
```
##### Install required modules and run the frontend
```
yarn install
yarn start
```
##### In case you have problems starting the frontend, try: 
```
rm -rf build
rm -rf node_modules
yarn install
yarn run build
yarn start
```
