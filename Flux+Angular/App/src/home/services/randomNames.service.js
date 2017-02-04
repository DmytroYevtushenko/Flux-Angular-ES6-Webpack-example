class RandomNames {
    constructor() {
        this.names = ['AngularJS', 'Webpack', 'Flux', 'ES6'];
    }

    getName() {
        const totalNames = this.names.length;
        const rand = Math.floor(Math.random() * totalNames);
        return this.names[rand];
    }
}

export default RandomNames;
