#!/bin/sh
#Upload the built config to s3

PROJECT_NAME=$( more package.json | jq -r '.name' )

if [ -z ${NODE_ENV+x} ]; then 
    echo "NODE_ENV is not set"; 
    exit 1;
fi

aws s3 sync build "s3://$PROJECT_NAME-$NODE_ENV"
