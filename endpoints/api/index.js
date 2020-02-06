const router = require('express').Router();

module.exports = (app, models) => {
  // The '/api' endpoint

  router.options('/', (req, res) => {
    
  });

  router.get('/', (req, res) => {

  });

  router.post('/', (req, res) => {

  });

  app.use('/api', router);

  return app;
};
