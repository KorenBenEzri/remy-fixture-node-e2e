const assert = require('assert');
const { render } = require('./index.js');
assert.strictEqual(render('remy'), 'Hello Remy');
console.log('ok');
