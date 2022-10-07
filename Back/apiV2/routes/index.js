const advertisements = require('./advertisements.route');
const companies = require('./companies.route');
const users = require('./users.route');
const auth = require('./auth.route');

module.exports = {
    advertisements,
    companies,
    users,
    auth
}