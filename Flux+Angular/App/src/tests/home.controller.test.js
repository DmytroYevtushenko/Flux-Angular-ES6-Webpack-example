import home from '../home/homeModule';

describe('Home module', function(){
    beforeEach(angular.mock.module(home));

    describe('Home controller', function(){
        var scope, testCont;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            testCont = $controller('HomeController', {$scope: scope});
        }));

        it('name = World', function(){
            expect(testCont.name).toBe('World');
        });
    });
});