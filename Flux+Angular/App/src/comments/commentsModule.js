import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './comments.routes';
import commentsStore from './stores/commentsStore';
import notificationStore from './stores/notificationStore';
import actions from './constants/actions';
import commentActions from './services/commentActions';
import CommentsController from './commentsController';

export default angular.module('app.comments', [uirouter])
  .config(routing)
  .constant('actions', actions)
  .service('commentActions', commentActions)
  .store('CommentsStore', commentsStore)
  .store('NotificationStore', notificationStore)
  .controller('CommentsController', CommentsController)
  .name;