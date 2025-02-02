module.exports = {
  create: require ('./scripts/order/_create'),
  destroy: require ('./scripts/order/_destroy'),
  findAll: require ('./scripts/order/_findAll'),
  findByUser: require ('./scripts/order/_findByUser'),
  findOne: require ('./scripts/order/_findOne')
}