import initApi from ('./api');

export default (app) => {
  // The '/' endpoint

  app.options('/', (req, res) => {
    
  });

  app.get('/', (req, res) => {

  });

  app.post('/', (req, res) => {

  });

  app = initApi(app);
  return app;
};
