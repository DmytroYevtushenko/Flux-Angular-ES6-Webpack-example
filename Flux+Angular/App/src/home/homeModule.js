import angular from 'angular';
import uirouter from 'angular-ui-router';

import './style/home.css';
import routing from './home.routes';
import HomeController from './homeController';
import randomNames from './services/randomNames.service';
import greeting from './directives/greeting.directive';



export default angular.module('app.home', [uirouter])
  .config(routing)
  .directive('greeting', () => new greeting())
  .service('randomNames', randomNames)
  .controller('HomeController', HomeController)
  .name;