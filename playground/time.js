const moment = require('moment');

var createdAt = 1232234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));

