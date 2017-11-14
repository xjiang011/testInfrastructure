set -e

echo "1) installing all packages so gulp and co can be used"
npm install

echo "2) build up node_env"  
npm run config

echo "3) build a config file for different env"
node config/index.js

#if we dont need to run test there is no point to have this step
# npm run test
 
