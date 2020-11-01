const { wrapper } = require('@teleology/lambda-api');
const get = require('lodash.get');
const merge = require('lodash.merge');
const s3 = require('./s3');
const clients = require('./clients');

exports.default = wrapper(async ({ data = {} }) => {
  const { version = '1.0.0', key } = data;

  const [config, overrides] = await Promise.all([
    s3({ key: `${version}.json` }),
    clients.get(data),
  ]);

  const merged = merge(config, overrides);
  if (key) {
    return get(merged, key, {});
  }

  return merged;
});
