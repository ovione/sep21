const jsonServer = require('json-server');

const userDetails = require('./core/user').generateUserDetails();
const configDetails = require('./core/config').getConfiguration();
const systemDetailsInfo = require('./core/system-details-info').generateSystemDetailsInfo();
const deliverables = require('./core/deliverables');
const useractions = require('./core/useractions');
const logoutOK = require('./core/logoutSuccess');
const success = require('./core/success');
const dataflows = require('./core/dataflows');
const health = require('./core/health');
const registrationReportENER = {url: 'www.nba.com'};
const obligations = require('./core/obligations');
const reportInfo = require('./core/reportInfo/reportInfo');
const urls = require('./core/urls/urls');
const layoutHomeLeftTree = require('./core/layouts/home/layout-home-left-tree');
const obligationsDeadlines = require('./core/obligations/deadlines/obligations-deadlines');

const generateMocks = () => {
    return Object.assign({
        'user-details': userDetails,
        'system-details-info': systemDetailsInfo,
        'configuration': configDetails,
        "deliverables": deliverables,
        "user-actions": useractions,
        "logoutOK": logoutOK,
        "success": success,
        "dataflows": dataflows,
        "health": health,
        "registrationReportENER": registrationReportENER,
        "obligations": obligations,
        "reportInfo": reportInfo,
        "urls": urls,
        "layoutHomeLeftTree": layoutHomeLeftTree,
        "obligationsDeadlines": obligationsDeadlines,
    });
};

// set mocks-obj to the router
const mocks = generateMocks();
const router = jsonServer.router(mocks);

// expose router and db behind json-server
// (@{link https://github.com/typicode/lowdb})
exports.getDb = () => {
    return router.db;
};

exports.getRouter = () => {
    return router;
};
