# api-global-config

## Setting up a Stage

1. Set up a `samconfig.<stage>.toml` file
2. Make sure to use a stack name defined as `stack_name = "api-config-<stage>"`
3. Add the deploy script `"deploy:stage": "export NODE_ENV=stage ; yarn deploy",`

Deployment:

```bash
yarn deploy:dev 
yarn deploy:prod
```



