# api-global-config

## Setting up a Stage

1. Set up a `samconfig.<stage>.toml` file
2. Make sure to use a stack name defined as `stack_name = "gestalt-<stage>"`
3. Add the deploy script `"deploy:stage": "export NODE_ENV=stage ; yarn deploy",`

## Parameters

| Parameter | Description | 
|--|--|
| ZoneId | The pre-defined ZoneId for a Route53 hosted zone |
| Domain | The domain you would like to use |
| CertificateArn | A pre-defined CertificateArn for an AWS Certificate Manager |
| Stage | The stage you wish to use |

## Deployment

```bash
yarn deploy:dev 
yarn deploy:prod
```



