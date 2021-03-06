import httpStatus from 'http-status';

const defaultOptions = { skipNotFoundValidation: false };

const getAPIResponse = (fn, options = defaultOptions) =>
  (req, res) => {
    fn(req, res)
      .then(body => res.status(body || options.skipNotFoundValidation ? httpStatus.OK : httpStatus.NOT_FOUND).send(body))
      .catch((error) => {
        if (error.errorInfo) {
          res.status(httpStatus.CONFLICT).send(error);
        } else {
          res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
        }
      });
  };

export default getAPIResponse;
