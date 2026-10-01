const ejs = require('ejs');
const _ = require('lodash');
// ejs 1.x filter API (removed in ejs >= 2): a bump-only upgrade breaks this.
ejs.filters.cap = (s) => _.capitalize(s);
module.exports = { render: (name) => ejs.render('Hello <%=: name | cap %>', { name }) };
