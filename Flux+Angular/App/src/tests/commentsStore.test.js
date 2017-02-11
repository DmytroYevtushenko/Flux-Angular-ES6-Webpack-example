import fluxModule from 'flux-angular';
import comments from '../comments/commentsModule';

describe('Testing store', function () {
    var notificationStore, commentsStore, dispatch, flux;

    beforeEach(function () {
        angular.mock.module(fluxModule);
        angular.mock.module(comments);
        inject(function ($injector) {
            flux = $injector.get('flux');
            notificationStore = $injector.get('NotificationStore'); 
            commentsStore = $injector.get('CommentsStore');  
            dispatch = flux.dispatch.bind(flux);
        });
    });

    it('Notification store getNotifications() should be defined', function() {
        expect(notificationStore.getNotifications()).toBeDefined();
    });

    it('Comments store getComments() should be defined', function() {
        expect(commentsStore.getComments()).toBeDefined();
    });

    it('It should add new item', function () {
        dispatch('COMMENT_ADD_SUCCESS', 'test');
        expect(notificationStore.getNotifications()).toEqual(['test']);
        expect(commentsStore.getComments()).toEqual(['test']);
    });

});
