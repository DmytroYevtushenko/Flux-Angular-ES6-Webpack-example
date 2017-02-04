export default () => ({
    initialize() {
        this.state = this.immutable({ comments: [] });
    },

    handlers: {
        'COMMENT_ADD_SUCCESS' : 'addComment'
    },

    addComment(comment) {
        this.waitFor('NotificationStore', function () {
            this.state.push('comments', comment);
        });
    },

    exports: {
        getComments() {
            return this.state.get('comments');
        }
    }
});