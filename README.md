
# React JS with Redux and Saga Project Structure
[![Author](http://img.shields.io/badge/author-@maitraysuthar-blue.svg)](https://www.linkedin.com/in/maitray-suthar/) [![GitHub license](https://img.shields.io/github/license/maitraysuthar/rest-api-nodejs-mongodb.svg)](https://github.com/maitraysuthar/react-redux-saga-boilerplate/blob/master/LICENSE)  ![GitHub repo size](https://img.shields.io/github/repo-size/maitraysuthar/react-redux-saga-boilerplate)

A ready-to-use boilerplate for React JS with Redux and Saga.

## Project Overview

This is a basic project structure with repeatative use cases. Added some essential feature for every projects. It is very useful to build mid to complex level project. This project structure is based on **NodeJs api boilerplate app:** https://github.com/maitraysuthar/rest-api-nodejs-mongodb

I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building a great app. Project is open for suggestions, Bug reports and pull requests.

## Is this project deserves a small treat?

If you consider my project as helpful stuff, You can appreciate me or my hard work and time spent to create this helpful structure with buying a coffee for me.

<a href='https://ko-fi.com/U6U617IA8' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi2.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> &nbsp;&nbsp; <a href="https://www.buymeacoffee.com/36GgOoQ2f" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Features

|Feature|Details  |
|--|--|
|  Structure|  Project is build with extenensible and flexible **Moduler** pattern|
|  Authentication|  Basic Authentication (Register/Login)|
|  Confirm Account|  Account confirmation with OTP verification|
|  Route Protection|  Route protection with middleware and localstorage|
|  Lazy Loading|  Added **Lazy Loading** of components to fasten the execution process of application|
|  App State Management|  Application level state management with **Redux**|
|  Async Call|  Managed async calls with **Saga** middleware|
|  Forms|  Managed apllication forms & validations with **Formik** and **Yup**|

## Software Requirements

-   Node.js **8+**

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/maitraysuthar/react-redux-saga-boilerplate.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```bash
    cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file to understand the constants.

## How to run

```bash
npm start
```

## New Module

All the modules of the project will be in `/src/modules/` folder, If you need to add more modules to the project just create a new folder in the same folder.

##### Every folder contains following files:
- Component file (`index.jsx`)
- Actions file (`actions.js`)
- Reducer file (`reducer.js`)
- Saga file (`saga.js`)
- Style file (`[module].css`)
- Sub module folder, if any.

##### Root module:
Module's root module folder is `/src/modules/app/` it contains main **Routes file (`routes.js`)**, **Reducer file (`mainReducer.js`)** and **Saga file (`mainSaga.js`)**. You will need to add your every component,reducer & saga to make your module work.

## Found any bug? Need any feature?

Every project needs improvements, Feel free to report any bugs or improvements. Pull requests are always welcome.

## License

This project is open-sourced software licensed under the MIT License. See the LICENSE file for more information.