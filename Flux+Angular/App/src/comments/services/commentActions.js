export default class CommentActions {
    constructor($http, flux, actions, commonDataService) {
        this.$http = $http;
        this.flux = flux;
        this.actions = actions;
        this.commonDataService = commonDataService;
    }

    addComment(comment) {
        this.flux.dispatch(this.actions.COMMENT_ADD, { comment: comment });
        let model = {
            Comment: comment
        };
        this.commonDataService.addComment(model)
        .then(() => {
            this.flux.dispatch(this.actions.COMMENT_ADD_SUCCESS, { comment: comment });
        })
        .catch((error) =>{
            this.flux.dispatch(this.actions.COMMENT_ADD_ERROR, { comment: comment, error: error });
        });
    }
}

CommentActions.$inject = ['$http', 'flux', 'actions', 'commonDataService'];
