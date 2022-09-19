## Environment installation
### <u>Install curl</u>:
```sh
sudo apt install curl
```
#
### <u>Install nodejs</u>:
```sh
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
```
```sh
sudo bash /tmp/nodesource_setup.sh
```
```sh
sudo apt install nodejs
```
```sh
node -v
```
#
### <u>Install yarn with npm</u>:
NPM (Node Package Manager) is the default program that is automatically installed on Nodejs installation. You can use NPM directly when Nodejs is already installed.
```sh
sudo npm install yarn --global
```
#
### <u>React installation</u>:
If you don't have React in your computer, you can install it with npm or yarn like this:
```sh
sudo yarn global add create-react-app
```
#
### <u>Project cloning</u>:
```sh
git clone git@github.com:cacybernetic/tiktok.git
```
#
### <u>Install project dependencies</u>:
Go to the root folder of the project and run:
```sh
yarn install
```
#
### <u>Run project</u>:
Go to the root folder of the project and run:
```sh
yarn start
```
Enjoy :)
