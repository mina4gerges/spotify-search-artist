import axios from "axios";
import qs from "qs";
import {CLIENT_ID, REDIRECT_URI, SECRET_ID} from "../constant/spotify";

const encodedData = window.btoa(`${CLIENT_ID}:${SECRET_ID}`);

// Get token to be used if search requests
export const getToken = code => axios.post(
    'https://accounts.spotify.com/api/token',
    qs.stringify({
        code,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
    }),
    {
        headers: {
            'Authorization': `Basic ${encodedData}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
);

export const getSearchArtist = (token, q, type = 'artist') => axios.get(
    `https://api.spotify.com/v1/search?q=${q}&type=${type}`,
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
);

