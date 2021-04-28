const { phone, internet, name, address } = require('faker/locale/pt_BR');

const DATA_LENGTH = 100;

const data = Array.from({ length: DATA_LENGTH }).map(() => ({
  name: name.findName(),
  profession: name.jobTitle(),
  email: internet.email(),
  phone: phone.phoneNumber(),
  webste: internet.url(),
  location: address.state(),
}));

module.exports = data;
