import initApi from ('./api');

export default (app, models) => {
  // The '/' endpoint

  app.options('/', (req, res) => {
    
  });

  app.get('/', (req, res) => {

  });

  app.post('/', (req, res) => {

  });

  // Middleware
  app.use((err, req, res, next) => {
    // runs when calling next [add to (req, res) args to become (req, res, next)]
  });

  app = initApi(app, models);
  return app;
};
