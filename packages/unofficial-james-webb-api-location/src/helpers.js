/**
 *
 * @returns {object}
 */
function parseMiliseconds(miliseconds){
 return Object.entries({
  days: 1000 * 60 * 60 * 365,
  hours: 1000 * 60 * 60,
  minutes: 1000 * 60,
  seconds: 1000,
  miliseconds: 1
 }).reduce((o, [key, factor]) => {
  const trunc = o[key] = Math.floor(miliseconds/factor);
  miliseconds -= (trunc * factor);
  return o;
 }, {});
}

/**
 * Calcula el tiempo correspondiente a partir de los milisegundos
 *
 * @param {int} miliseconds
 * @returns {string}
 */
function diffTime(miliseconds) {
 const REGEX_FORMAT = /\{(0*)\}/;
 const formats = {
  hours: "{00}:",
  minutes: "{00}:",
  seconds: "{00}.",
  miliseconds: "{000}"
 };

 return Object
 .entries(parseMiliseconds(miliseconds))
 .map(([key, value]) => {

  const format = formats[key];

  if(format){
   const [,match] = REGEX_FORMAT.exec(format);

   return format.replace(REGEX_FORMAT, ("" + value).padStart(match.length, "0"));
  }

  return value > 0 && `${value}.`;
 })
 .filter(Boolean)
 .join("");
}

module.exports = {
 diffTime,
 parseMiliseconds
};
