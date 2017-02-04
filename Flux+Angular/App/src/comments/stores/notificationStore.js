export default () => ({
    initialize() {
        this.state = this.immutable({ notifications: [] });
    },

    handlers: {
        'COMMENT_ADD_SUCCESS': 'addNotification'
    },

    addNotification(comment) {
        this.state.push('notifications', comment);
    },

    exports: {
        getNotifications() {
            return this.state.get('notifications');
        },
        getLatestNotifications: function () {
            let notifications = this.state.get('notifications');
            return notifications[notifications.length - 1];
        }
    }
});
