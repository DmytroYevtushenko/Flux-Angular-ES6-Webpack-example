import angular from 'angular';
import uirouter from 'angular-ui-router';
import './style/carts.css';
import routing from './cart.routes';
import dispatcher from './dispatcher';
import CartController from './cartController';
import CatalogController from './catalogController';
import cartActions from './services/cartActions';
import CartStore from './services/cartStore';
import CartStoreEmitter from './services/cartStoreEmitter';


export default angular.module('app.cart', [uirouter])
  .config(routing)
  .service('dispatcher', dispatcher)
  .service('cartActions', cartActions)
  .service('CartStoreEmitter', CartStoreEmitter)
  .factory("cartStore", CartStore)
  .controller('CartController', CartController)
  .controller('CatalogController', CatalogController)
  .name;