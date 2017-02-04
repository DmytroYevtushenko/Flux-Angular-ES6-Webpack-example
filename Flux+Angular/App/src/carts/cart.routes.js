cartRoutes.$inject = ['$stateProvider'];

export default function cartRoutes($stateProvider) {
    $stateProvider
      .state('cart', {
          url: '/cart',
          template: require('./views/cart.html')
      });
}