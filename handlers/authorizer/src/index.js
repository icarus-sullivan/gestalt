const { v4: uuid } = require('uuid');
const tokenTable = require('./dynamo');

const PREAMBLE = /bearer /gi;

exports.default = async ({ authorizationToken, methodArn, ...rest }) => {
  console.log({
    authorizationToken,
    methodArn,
    rest,
  })
  const token = authorizationToken.replace(PREAMBLE, '');
  const exists = await tokenTable.get(token);

  const [arn] = methodArn.split('/');

  return {
    // principalId: 'user',
    principalId: uuid(),
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: exists ? 'Allow' : 'Deny',
          Resource: arn + '/*/*' //methodArn,
        },
      ],
    },
  };
};
