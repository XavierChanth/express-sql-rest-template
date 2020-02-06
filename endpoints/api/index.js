const router = require('express').Router();

module.exports = (app, models) => {
  // The '/api' endpoint

  app.options('/', (req, res) => {
    
  });

  app.get('/', (req, res) => {

  });

  app.post('/', (req, res) => {

  });

  app.use('/api', router);

  return app;
};
