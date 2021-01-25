/**
 * Global functions
 * @param value
 * @returns {string}
 */

export const numberWithCommas = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const isAuthenticated = () => !!JSON.parse(localStorage.getItem('token'));
