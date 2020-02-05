require('dotenv').config();
const SQl = require('sequelize');
// TODO add to docs:
// to install your version SQL module
// .env file config and rename

const db = new SQl(
  (process.env.NODE_ENV === 'production') ? process.env.PROD_DB_NAME : process.env.DEV_DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {
      // defaults for Model inits
      // https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-init
      underscored: false,
      paranoid: true
    }
  }
);

const models = {
  Example: sequelize.import('./example')
};

// Associate the models
Object.keys(models).forEach(modelName => {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.db = db;
models.SQL = SQL;

//The Op lib is passed in for more advanced requests.
models.Op = SQL.Op;

module.exports = models;
