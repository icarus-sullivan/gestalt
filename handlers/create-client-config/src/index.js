const { wrapper } = require('@teleology/lambda-api');
const { create } = require('./clients');

exports.default = wrapper(async ({ data = {}, ...rest }) => {
  const { client_id, config = {} } = data;

  await create({ client_id, config });

  return {
    success: true,
  };
});
