#!/bin/sh
#Upload the built config to s3

if [ -z ${ENV+x} ]; then 
    echo "ENV is not set"; 
    exit 1;
fi

aws s3 sync build "s3://api-config-$ENV"