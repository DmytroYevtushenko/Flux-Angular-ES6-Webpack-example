export default class CommentsController {
    constructor(commentActions, $scope, CommentsStore, NotificationStore) {
        this.$scope = $scope;
        this.$scope.comment = "";
        this.CommentsStore = CommentsStore;
        this.NotificationStore = NotificationStore;
        this.commentActions = commentActions;
        this.$scope.$listenTo(CommentsStore, ()=>this.setComments());
        this.$scope.$listenTo(NotificationStore, ()=>this.setNotifications());
    }

    addComment(comment) {
        this.commentActions.addComment(comment);
    }

    setComments() {
        this.$scope.comments = this.CommentsStore.getComments();
        this.$scope.comment = "";
        this.updateScope();
    }

    setNotifications() {
        let notification = this.NotificationStore.getLatestNotifications();
        if (notification)
            this.$scope.message = notification.comment;
        this.updateScope();
    }

    updateScope() {
        if(!this.$scope.$$phase) 
            this.$scope.$digest();
    }
}
CommentsController.$inject = ['commentActions', '$scope', 'CommentsStore', 'NotificationStore'];

