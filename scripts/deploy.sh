#!/bin/bash
# Deploy the stack

if [ -z ${NODE_ENV+x} ]; then 
    echo "NODE_ENV is not set"; 
    exit 1;
fi

if [ -f "samconfig.$NODE_ENV.toml" ]; then
    cat "samconfig.$NODE_ENV.toml" > samconfig.toml
else 
    echo "samconfig.$NODE_ENV.toml does not exist."
    exit 1 
fi

sam build ; sam deploy --force-upload
