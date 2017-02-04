aboutRoutes.$inject = ['$stateProvider'];

export default function aboutRoutes($stateProvider) {
    $stateProvider
      .state('about', {
          url: '/about',
          template: require('./views/about.html'),
          controller: 'AboutController',
          controllerAs: 'about'
      });
}