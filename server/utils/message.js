const moment = require('moment');

const generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: moment().valueOf()
  }
};

const generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://maps.google.com?q=${latitude},${longitude}`,
    createdAt: moment().valueOf()
  }
};

module.exports = { generateMessage, generateLocationMessage };