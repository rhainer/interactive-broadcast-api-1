import Nexmo from 'nexmo';
import config from '../../config/config';

const nexmo = new Nexmo({
  apiKey: config.nexmoApiKey,
  apiSecret: config.nexmoSecret,
});


// nexmo.message.sendSms(from/, to, text)