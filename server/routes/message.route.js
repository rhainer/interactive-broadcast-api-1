import express from 'express';

const router = express.Router(); // eslint-disable-line new-cap
const Event = require('../services/event');
const getAPIResponse = require('../helpers/APIResponse');

const getEvents = getAPIResponse(req => Event.getEvents(req.query.adminId), { skipNotFoundValidation: true });

function handleInboundSms(request, response) {
  const text = request.body.text;
  response.status(204).send();
}

router.post('/inbound-sms', handleInboundSms);
export default router;
