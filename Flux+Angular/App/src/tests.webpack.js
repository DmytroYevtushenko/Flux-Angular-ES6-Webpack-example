import 'angular';
import 'angular-mocks/angular-mocks';

const testsContext = require.context('./tests', true, /\.js$/);
testsContext.keys().forEach(testsContext);
