set -e

echo "Cleaning environment"
rm -rf node_modules
rm -rf ../node_modules
rm -rf ../package.json

echo "Installing shared modules"
npm install

echo "Creating Package.json"
node merge.js

echo "Installing modules"
cd ".."
npm install
