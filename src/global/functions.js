/**
 * Function to get a variable and add a comma after 3 digits
 * @returns {string}
 * @param value
 */
export const numberWithCommas = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
