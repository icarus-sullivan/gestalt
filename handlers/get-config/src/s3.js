const AWS = require('aws-sdk');
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const { CONFIG_BUCKET } = process.env;

module.exports = async ({ key }) => {
    try {
        const { Body } = await s3.getObject({
            Bucket: CONFIG_BUCKET,
            Key: key,
        }).promise();
        return JSON.parse(Body);
    } catch (e) {
        return {};
    }
}