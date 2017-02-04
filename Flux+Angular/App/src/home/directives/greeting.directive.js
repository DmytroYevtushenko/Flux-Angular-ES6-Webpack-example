export default class GreetingDirective {
    constructor() {
        this.template = '<h1>Hello, {{name}}!</div>';
        this.restrict = 'E';
        this.scope = {
            name: '='
        };
    } 
}

