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


# Endpoint Examples

### Get config
/

Optional: 
 - ?version=latest or semver
 - ?key='specific path'

```
var config = {
  method: 'get',
  url: 'https://config-dev.teleology.io',
  headers: { 
    'Authorization': 'C3297B1F-CEF7-4EE8-852B-B9E4E0766E88'
  }
};
```


### Create Client Config Overrides 
/client/{client_id}
```
var data = JSON.stringify({"config":{"name":"doo"}});
var config = {
  method: 'post',
  url: 'https://config-dev.teleology.io/client/58F981F8-3FAF-4DBE-A3AC-29DAC372698D',
  headers: { 
    'Authorization': 'Bearer C3297B1F-CEF7-4EE8-852B-B9E4E0766E88', 
    'Content-Type': 'application/json'
  },
  data : data
};
```