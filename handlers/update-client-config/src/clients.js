const aws = require('aws-sdk');

const { REGION, CLIENT_TABLE } = process.env;

const db = new aws.DynamoDB.DocumentClient({
  region: REGION,
});

const update = async ({ client_id, config }) => db
  .put({
    TableName: CLIENT_TABLE,
    Item: {
      client_id,
      config: JSON.stringify(config),
    },
  })
  .promise();

module.exports = {
  update,
};
