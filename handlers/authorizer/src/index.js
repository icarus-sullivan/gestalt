const { v4: uuid } = require('uuid');
const tokenTable = require('./dynamo');

const PREAMBLE = /bearer /gi; 

exports.default = async ({ authorizationToken, methodArn }) => {
    const token = authorizationToken.replace(PREAMBLE, '');
    const exists = await tokenTable.get(token);

    return {
        // principalId: 'user',
        principalId: uuid(),
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: exists ? 'Allow' : 'Deny',
                    Resource: methodArn
                }
            ]
        }
    };
};

