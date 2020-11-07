const { ApiError } = require('@teleology/lambda-api');
const aws = require('aws-sdk');

const { REGION, CLIENT_TABLE } = process.env;

const db = new aws.DynamoDB.DocumentClient({
  region: REGION,
});

const create = async ({ client_id, config }) => {
  const { Item } = await db
    .get({
      TableName: CLIENT_TABLE,
      Key: {
        client_id,
      },
    })
    .promise();

  if (Item) {
    throw new ApiError(`A user with the id ${client_id} already exists`, {
      code: 409
    });
  }

  await db
    .put({
      TableName: CLIENT_TABLE,
      Item: {
        client_id,
        config: JSON.stringify(config),
      },
    })
    .promise();
}

module.exports = {
  create,
};
