# The App

A Meteor project created to make the topic of sexual health easier to approach and find information about

## Contents
* [System Overview](#system-overview)
* [Installation](#installation)
* [Running Locally](#running-locally)
* [Testing](#testing)
    * [Automated Testing](#automated)
    * [Manual testing](#manual)
* [Script cheat sheet](#cheat-sheet)
* [Built With](#built-with)
* [Linting](#linting)
* [Deploying](#deploying)


## System Overview


The app is a [Meteor](https://www.meteor.com/) app...

## Installation
This setup assumes that you are using [nvm](https://github.com/creationix/nvm) to switch between different versions of Node.js and that you're running on a UNIX based OS.

### 1. Install Meteor:
```
curl https://install.meteor.com/ | sh
```

### 2. Clone the app:
```
git clone git@github.com:hazas123/sexaul-health-web-app.git
cd sexaul-health-web-app
```

### 3. Run Meteor:
```
meteor
```

### 4. Install dependencies:
```
npm Install
```

### 5. Start the app:
```
npm start
```

## Running Locally

To run the app locally ensure you are on the correct version of node.
If any dependencies have changed after pulling down the most recent changes, run `npm install` before finally running `npm start` the app will by default start up on `http://localhost:3000/`

## Script Cheat Sheet

npm start : will start the meteor app
npm lint : will the linting check

## Built With

In short, this app uses [Meteor](https://www.meteor.com/) as the application framework, with [Spacebars](http://blazejs.org/api/spacebars.html) for creating the templates and [less](http://lesscss.org/) for creating the CSS.

## Linting

Uses standard js linting

## Deploying

This application is deplyed via Heroku you can deploy by running the following
```
git push heroku master
```
