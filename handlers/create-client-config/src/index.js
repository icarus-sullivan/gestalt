const { wrapper } = require('@teleology/lambda-api');
const { create } = require('./clients');

exports.default = wrapper(async ({ data = {}, ...rest }) => {
    const { client_id, config = {} } = data;
    console.log({
        client_id,
        config,
        rest,
    })
    
    await create({ client_id, config });

    return {
        success: true,
    };
});
