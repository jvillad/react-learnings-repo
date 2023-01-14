export const toTitleCase = (str) => {
  // regular expression `/\w\S*/g` will match any word character(letter, number, or underscore)
  return str.replace(/\w\S*/g, (txt) => {
    // make the first char of the string upperCase then rest to lowerCase
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
