#!/bin/bash
set -e

echo "1) Remove node_module and reinstall libraries" 
rm -fr node_modules
npm install

echo "2) build up node_env"  
npm run config

echo "3) build a config file for different env"
# node config/index.js

# npm install serverless@"1.5.1" &&
# node_modules/serverless/bin/serverless deploy -v --stage $STAGE
echo "my environment variable:"
echo   $STAGE
echo "my VPC"
echo   $VPC_ID
echo "my subnetIds"
echo   $SUBNET_ID


npm install serverless@"1.5.1" &&
node_modules/serverless/bin/serverless deploy -v --stage $STAGE --region ap-southeast-2 --vpcId $VPC_ID --subnetId $SUBNET_ID
 
  
 
#  sls deploy -v --stage dev --region ap-southeast-2 --vpcId vpc-610fe205 --subnetId subnet-7f83281b,subnet-9f3beae9
  

 
  
