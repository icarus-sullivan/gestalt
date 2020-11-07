# gestalt

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
```
GET / HTTP/1.1
Host: <domain>
Authorization: Bearer <token>
```

| Params | Default | Description | 
|--|--|--|
| version | latest | The version of the config |
| key | undefined | A specific key within the config, with dot-notation |
| client_id | undefined | Fetches the client and applies any overrides the client has |

### Create Client Config Overrides 

```
POST /client/<client_id> HTTP/1.1
Host: <domain>
Authorization: Bearer <token>
Content-Type: application/json

{
    "config": {
        "featureGates": {
            "feature-b": false
        }
    }
}
```

### Update Client Config Overrides

```
PUT /client/<client_id> HTTP/1.1
Host: <domain>
Authorization: Bearer <token>
Content-Type: application/json

{
    "config": {
        "overrides": "here"
    }
}
```
