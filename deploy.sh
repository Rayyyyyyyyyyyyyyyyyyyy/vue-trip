set -e
yarn build
cd dist
git init 
git add .
git commit -m 'deploy'
git push -f https://github.com/Rayyyyyyyyyyyyyyyyyyyy/Rayyyyyyyyyyyyyyyyyyyy.github.io.git master:main
cd -
