const { diffTime } = require('./helpers');
const LAUNCH_DATE_TIME = new Date("2021-12-25T12:20Z");

module.exports = function calculatePosition(){
 return {
  'launch-elapse': diffTime(LAUNCH_DATE_TIME.getTime() - Date.now()),
 }
}
