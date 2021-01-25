/**
 * Values used for spotify API
 * @type {string}
 */

const BASE_URL = 'https://accounts.spotify.com/';

export const CLIENT_ID = 'a1de12246ef24f99be91852197bd8f2b';

export const REDIRECT_URI = 'http://localhost:3000/';

export const FULL_AUTHENTICATION_URL = `${BASE_URL}authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
