module.exports = (db, Type) => {
  const Example = db.define('example', {
    id: {
      type: Type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    string: {
      type: Type.STRING,
    },
    boolean: {
      type: Type.BOOLEAN,
      defaultValue: false
    }
  });

  return Example;
};
