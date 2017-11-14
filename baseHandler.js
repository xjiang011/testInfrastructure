'use strict';

const sumoLogger = require('../sumoLogger');

module.exports.handleError = (err, callback) => {
    if (process.env.NODE_ENV !== 'dev') {
        sumoLogger.error('handler-error-message', `${err.message}`);
        sumoLogger.error('handler-error-stack', `${err.stack}`);  
        sumoLogger.error('handler-error-stage', `${process.env.NODE_ENV}`);
    }
    
    const body = err.body || { errorMessage: err.message };
    callback(null, {
        statusCode: err.statusCode,
        body: JSON.stringify(body),
    });
};

module.exports.handleAccessDenied = (callback) => {
  callback(null, {
    statusCode: 403,
    body: JSON.stringify({ errorMessage: 'Access Denied' }),
  });
};

module.exports.handleSuccess = (result, callback) => {
  var jsonResult=JSON.stringify(result);
  if (result.Errors){
		sumoLogger.info('The result has error: ',  jsonResult);
  }

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(result),
  });
 
};
  
    
   