# Spotify Artist Search

Web application using spotify API to search for artists

1. [Installation](#installation)
3. [Development environment](#developementEnvirement)
2. [Time spent](#timeSpent)

- <h2 name="installation">Installation</h2>

    - git clone https://github.com/mina4gerges/spotify-search-artist.git

    - Go to the directory **spotify-search-artist** and hit **npm install** to install the dependencies

    - Go to https://developer.spotify.com/dashboard/

    - Sign in/up and create a new application to get a CLIENT_ID and a SECRET_ID

    - The ids (CLIENT_ID and SECRET_ID) will be used in the project to get access to Spotify API

    - Click **Edit Setting** in Spotify dashboard to set the **website name** and **Redirect URIs** inputs. For now, we
      will use **localhost:3000** for website name and  **localhost:3000/artists** for Redirect URIs (if the port is
      3000 if not please put your port number)

    - Set CLIENT_ID and SECRET_ID in **/src/constant/spotify.js**

    - Hit **npm start** to run the application

    - Congrats 🎉 The app is running now

- <h2 name="developementEnvirement">Development environment</h2>

    - Node version: 14.15.0

    - Npm version: 6.14.11

- <h2 name="timeSpent">Time spent</h2>

    Read and understand requirements + Set a plan | Read and understand spotify API | Development | Testing | Total
    :--------------------------------------------:|:-------------------------------:|:-----------:|:-------:|:-----: 
    4h | 2h | 21h | 4h | 31h
