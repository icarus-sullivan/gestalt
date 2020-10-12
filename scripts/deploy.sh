#!/bin/bash
# Deploy the stack

if [ -z ${ENV+x} ]; then 
    echo "ENV is not set"; 
    exit 1;
fi

if [ -f "samconfig.$ENV.toml" ]; then
    cat "samconfig.$ENV.toml" > samconfig.toml
else 
    echo "samconfig.$ENV.toml does not exist."
    exit 1 
fi

sam build ; sam deploy --force-upload
