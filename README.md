# BreakingBadPage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.


## Before serving the project

1. Install [Node](https://nodejs.org/es/download/)

2. Install [Angular CLI](https://github.com/angular/angular-cli)
```
npm install -g @angular/cli
```

3. Install dependencies
```
npm i
```

## Development server

The default language for the dev server is Spanish, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --configuration=production --localize` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#

# Project Structure

```
├───app
│   ├───character-detail
│   ├───character-list
│   ├───header
│   ├───models
│   └───services
├───assets
├───environments
└───locale

```

### RequestService
Interacts with the Breaking Bad API to get characters and Quotes

### header component
It defines the header of the project. You can change the language by clicking on the Globe Icon

### CharacterList component
Shows a list of all characters in the API. It uses the CharacterService to get the character list using a rxjs BehaviorSubject (The list gets stored with just one Api call).

The list get filtered by the searchPipe, using the name and nickname of the characters.

Once the user clics on a character, it redirects to the characterDetail component

### CharacterDetail component
Shows all the info stored in the API for a given character. It uses the RequestService to get and show a random quote of that character. 

### Models dir
Where the data interfaces are stored.

### Locale dir
Where the translations are stored

## Tools used

| Project | Package | Version | Links |
|---|---|---|---|
**Angular CLI** | [`@angular/cli`](https://npmjs.com/package/@angular/cli) | [![latest](https://img.shields.io/npm/v/%40angular%2Fcli/latest.svg)](https://npmjs.com/package/@angular/cli) | [![README](https://img.shields.io/badge/README--green.svg)](/packages/angular/cli/README.md) [![snapshot](https://img.shields.io/badge/snapshot--blue.svg)](https://github.com/angular/cli-builds)
**Font Awesome** | [`@fortawesome/angular-fontawesome`](https://www.npmjs.com/package/@fortawesome/angular-fontawesome) | 0.9.0
**bootstrap** | [`bootstrap`](https://www.npmjs.com/package/bootstrap) | 4.6.0
**primeng** | [`primeng`](https://www.npmjs.com/package/primeng) | 12.1.0-rc.2

