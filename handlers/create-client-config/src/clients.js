const { v4: uuid } = require('uuid');
const aws = require('aws-sdk');

const { REGION, CLIENT_TABLE } = process.env;

const db = new aws.DynamoDB.DocumentClient({
  region: REGION,
});

const create = ({ client_id, config }) =>
  db
    .put({
      TableName: CLIENT_TABLE,
      Item: {
        client_id,
        config: JSON.stringify(config),
      },
    })
    .promise();

module.exports = {
  create,
};
