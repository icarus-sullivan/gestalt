#!/bin/sh
#Upload the built config to s3

if [ -z ${NODE_ENV+x} ]; then 
    echo "NODE_ENV is not set"; 
    exit 1;
fi

aws s3 sync build "s3://api-config-$NODE_ENV"