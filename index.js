const ejs = require('ejs');
const _ = require('lodash');
module.exports = { render: (name) => ejs.render('Hello <%= name %>', { name: _.capitalize(name) }) };
