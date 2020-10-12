const { wrapper } = require('@teleology/lambda-api');
const get = require('lodash.get');
const s3 = require('./s3');

exports.default = wrapper(async ({ data = {} }) => {
    const { version = '1.0.0', key } = data;
    
    const config = await s3({ key: `${version}.json` });
    if (key) {
        return get(config, key, {});
    }

    return config;
});
