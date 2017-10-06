#!/usr/bin/env bash

if [ -z $(which aws) ]; then
	echo 'aws cli must be installed on your PC'
	exit 1
fi

ENV=$([ -n "$1" ] && echo "$1" || echo 'test')
REGION=$([ -n "$2" ] && echo "$2" || echo 'us-west-2')
PROFILE=$([ -n "$3" ] && echo "$3" || echo 'default')

message() {
    echo -e "\033[38;5;148m"$1"\033[39m"
}

message "You are going to deploy to '${ENV}' environment (region: ${REGION}), continue? [y|n]: "
read CONFIRM

if [ ${CONFIRM} != 'y' ]; then
    echo 'Exiting without deploy'
    exit 1
fi

if [ ${ENV} != 'prod' ]; then
    DEPLOY_HOST='https://www-test.mitocgroup.com'
    BUCKET='s3://www-test.mitocgroup.com/'
    DIST_ID='E2MR6WOVYGNOM0'
    MAX_AGE='600'
else
    DEPLOY_HOST='https://www.mitocgroup.com'
    BUCKET='s3://www.mitocgroup.com/'
    DIST_ID='E17AX02BW6QRQO'
    MAX_AGE='604800'
fi

message "Build: Start"
./build.sh ${ENV}
message "Build: Done"

message "Synchronizing build directory"
aws s3 sync ./build/ ${BUCKET} --region ${REGION} --profile ${PROFILE} \
    --storage-class REDUCED_REDUNDANCY --metadata-directive REPLACE --cache-control max-age=${MAX_AGE}

message "Invalidating CloudFront"
aws cloudfront create-invalidation --distribution-id ${DIST_ID} --paths '/*'

message "Deploy: Done"
