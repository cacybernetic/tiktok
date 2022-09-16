## Environment installation
***This tutorial only work on Linux.***
### <u>Install curl</u>:
```sh
sudo apt install curl
```
#
### <u>Install nvm</u>:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
You can check your nvm program version with this command line:
```sh
nvm --version
```
#
### <u>Install nodejs</u>:
```sh
nvm install node
```
To install a specific nodejs version.
```sh
nvm install 18.4.0
```
To use a specific nodejs version.
```sh
nvm use 18.4.0
```
#
### <u>Install yarn with npm</u>:
NPM (Node Package Manager) is the default program that is automatically installed on Nodejs installation. You can use NPM directly when Nodejs is already installed.
```sh
npm install yarn --global
```
#
### <u>React installation</u>:
If you don't have React in your computer, you can install it with npm or yarn like this:
```sh
sudo npm -g install create-react-app
```
or
```sh
yarn global add create-react-app --prefix /usr/local
```
### <u>React project creation</u>:
If you want to create a React project, use create-react-app program with npm or yarn like this:
```sh
npm create-react-app my-new-react-project/
```
or
```sh
yarn create react-app my-new-react-project/
```
If you want to run your react project after his creation, go to your project root folder and write:
```sh
npm start
```
or
```sh
yarn start
```
<u>**Note**</u>: Use yarn command only whether you create your react project with that.
<br/>
Happy coding :)
