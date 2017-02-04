import angular from 'angular';
import uirouter from 'angular-ui-router';
import MainController from './MainController';
import CommonDataService from './services/commonDataService';

export default angular.module('app.common', [uirouter])
    .controller('MainController', MainController)
    .service('commonDataService',CommonDataService)
    .name;



