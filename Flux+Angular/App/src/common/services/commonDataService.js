class CommonDataService {
    constructor($http) {
        this.$http = $http;
    }

    getCatalog()
    {
        return this.$http.get("Catalog");
    }

    addComment(model)
    {
        return this.$http.post("/comments", model);
    }
}


export default CommonDataService;
CommonDataService.$inject = ['$http'];