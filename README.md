# Portfolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

INSTRUCTIONS TO USE 

open command prompt (CMD)
type D:
type cd mich then use tab to autocomplete
now you are in the project folder yaayyyyyy

<git branch> and make sure the "gh-pages" branch is the selected one. if not, use <git checkout gh-pages> and then <git pull> to get the latest from github and then you can work off that

to run the project: ng serve
navigate to localhost:4200 in browser
 
make whatever changes you need to make to the code in vscode
ctrl+c twice to break out of ng-serve when youre satisfied (or just open a new cmd)

in vs code look for the top level "docs" folder within the project, and delete it entirely. this is the folder that we built the project in last time, and now we are gonna replace it with a new build

Type: ng build --prod --base-href=/ --output-path docs
to replace the docs folder with a new version including your new changes

navigate to the docs folder in vs code, make a copy the "index" file with the chrome icon, and name it "404"

<git status> to see a list of all the files you've changed. they should be red right now, meaning that those files haven't been "staged" for your next commit yet

<git add .> where "." is a shortcut for "all of the files". this stages all your changes, so they will be included in your commit

<git status> again just to make sure all those files are green now, meaning they are staged

<git commit -m "message describing your changes goes in these quotes"> to actually commit your changes to the local version of the branch you're on

<git push> to push your commit up to the remote version of the repository on github

if it fails and you get a message saying "Updates were rejected because the remote contains work that you do not have locally", then do <git pull> first, then try to push again. if it failed for any other reason, stop and tell dan.
