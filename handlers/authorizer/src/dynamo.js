const { default: dynamo } = require('@teleology/dynamo');

const { TOKEN_TABLE } = process.env;

module.exports = dynamo({
  table: TOKEN_TABLE,
  key: 'token',
});
