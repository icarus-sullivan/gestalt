const { wrapper } = require('@teleology/lambda-api');
const { update } = require('./clients');

exports.default = wrapper(async ({ data = {}, ...rest }) => {
  const { client_id, config = {} } = data;

  await update({ client_id, config });

  return {
    success: true,
  };
});
