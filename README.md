# Mini Wrap for Spotify

clone the repository:
```
git clone git@github.com:mudassarzahid/miniwrap.git
```
then open Terminal and go to the miniwrap folder:
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```
now the backend should be running. To run the frontend, open another Terminal tab and go to the miniwrap folder:
```
cd webapp
yarn install
yarn start
```
Say yes if Terminal asks whether the frontend should run on another port than the backend. In case you have problems starting the frontend, try: 
```
rm -rf build
rm -rf node_modules
yarn install
yarn run build
yarn start
```
