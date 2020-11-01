const aws = require('aws-sdk');

const { REGION, CLIENT_TABLE } = process.env;

const db = new aws.DynamoDB.DocumentClient({
  region: REGION,
});

const get = async ({ client_id }) => {
  try {
    if (!client_id) throw new Error(`No client_id found`);

    const { Item: it } = await db
      .get({
        TableName: CLIENT_TABLE,
        Key: {
          client_id,
        },
      })
      .promise();

    return JSON.parse(it.config);
  } catch (e) {
    return {};
  }
};

module.exports = {
  get,
};
