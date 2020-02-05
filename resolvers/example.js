module.exports = {
  create: async(model, args, context) => {
    // returns sucess
    return await model.create(args)
    .then(() => true)
    .catch(e => false);
  },
  readOne: async(model, args, context) => {
    // returns one record
    return await model.findOne({where: args})
    .catch(e => null);
  },
  readAll: async(model, args, context) => {
    // returns array of records
    return await model.findAll({where: args})
    .catch(e => null);
  },
  update: async(model, {update, where}, context) => {
    // returns sucess
    let success = await model.update({
      ...update
    }, {
      where: where
    }).catch(e => false);
    return Boolean(success[0]);
  },
  upsert: async(model, args, context) => {
    // returns - true:insert, false:update, null:error
    return await model.upsert(args)
    .catch(e => null);
  },
  destroy: async(model, args, context) => {
    // returns number of deleted records
    return await model.destroy({where: args})
    .catch(e => 0);
  }
}
