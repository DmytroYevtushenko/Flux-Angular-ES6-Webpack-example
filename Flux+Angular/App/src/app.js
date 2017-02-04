import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'css/custom.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularAnimate from 'angular-animate';
import 'flux-angular';
import fluxConfig from './flux.config';
import routing from './app.config';
import common from './common/commonModule';
import home from './home/homeModule';
import about from './about/aboutModule';
import cart from './carts/cartModule';
import comments from './comments/commentsModule';

angular.module('app', [uirouter, 'flux', angularAnimate, common, home, about, cart, comments])
    .config(routing)
    .config(fluxConfig);