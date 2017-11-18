const { COUNTRY_CODE } = require('./constants');
const AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

const sns = new AWS.SNS();


function sendSMS(message, phone) {
  const params = getParams(message, phone);
  sns.publish(params, function(err, data) {
    if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);          
    }
  });
}

function getParams(message, phone) {
  return {
    Message: message,
    MessageStructure: 'string',
    PhoneNumber: getPhoneFullNumber(phone)
  };
}

function getPhoneFullNumber(phone) {
  return `${COUNTRY_CODE}${phone}`;
}

module.exports = {
  sendSMS
};
