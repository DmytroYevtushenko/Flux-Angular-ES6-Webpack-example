export default class HomeController {
    constructor($scope, randomNames) {
        this.name = 'World';
        this.random = randomNames;
    }

    randomName() {
        this.name = this.random.getName();
    }
}

HomeController.$inject = ['$scope', 'randomNames'];
