commentsRoutes.$inject = ['$stateProvider'];

export default function commentsRoutes($stateProvider) {
    $stateProvider
      .state('comments', {
          url: '/comments',
          template: require('./views/comments.html'),
          controller: 'CommentsController',
          controllerAs: 'commentsCtrl'
      });
}