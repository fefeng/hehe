echo 'npm install'

npm config set registry https://registry.npm.taobao.org/
npm install

echo 'build'
npm run build