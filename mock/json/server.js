const jsonServer = require('json-server');
const app = jsonServer.create();
const router = require('./lowdb').getRouter();
const middlewares = jsonServer.defaults();
const fs = require('fs');

// const delayMiddleware = require('./middlewares/delay');
// const errorsMiddleware = require('./middlewares/errors');
// const sseMiddleware = require('./middlewares/sse');

// Set the port of our application
const port = 3400;
// Middlewares
app.use(middlewares);
// app.use(delayMiddleware.delay);
// app.use(errorsMiddleware.error);
// app.use(sseMiddleware.sse);

// To handle POST, PUT and PATCH we need to use any body-parser
// We using the one bundled with json-server
app.use(jsonServer.bodyParser);

// Controllers

app.get('/restapi/protected/ePlatform/reportENER/user-details/userExists', (req, res, next) => {
    res.send(true)
});
app.post('/restapi/contactRequests', (req, res, next) => {
    res.send(true)
});
// Simulate endpoints that fail with 500, 400, 404, 401
app.get('/restapi/getError500', (req, res, next) => {
    res.sendStatus(500)
});
app.get('/restapi/customErrorHandlerOn400', (req, res, next) => {
    res.sendStatus(400)
});
app.get('/restapi/this-doesnt-exist', (req, res, next) => {
    res.sendStatus(404)
});
app.get('/restapi/admin/*', (req, res, next) => {
    res.sendStatus(401)
});

app.post('/restapi/logging', (req, res, next) => {
    var body = '';
    let filePath = __dirname + '/logs.txt';

    fs.appendFile(filePath, `${JSON.stringify(req.body)}\n\n`, function() {
        res.sendStatus(200);
    });
});

app.post('/restapi/translate', (req, res, next) => {
    res.send(req.body.data);
});

// endpoint to test ApiQueueService
app.post('/restapi/form', (req,res,next) => {
    // respond with delay so that user can block the request or close the Tab
    setTimeout(()=>res.send(req.body.data), 4000)
});

// Rewriter rules
app.use(jsonServer.rewriter({
    '/restapi/configuration': 'configuration',
    '/restapi/people': 'people',
    "/restapi/user-details": "/user-details",
    "/restapi/v1/system-detail-information": "/system-details-info",
    "/restapi/logout": "/logoutOK",
    "/restapi/protected/ePlatform/reportENER/deliverable-details/deliverables": "/deliverables",
    "/restapi/user-actions": "/user-actions",
    "/restapi/dataflows": "/dataflows",
    "/restapi/private/health": "/health",
    "/restapi/protected/ePlatform/reportENER/obligation-details/obligations": "/obligations",
    "/restapi/protected/urls": "/urls",
    "/restapi/protected/ePlatform/reportENER/obligations/hierarchy": "/layoutHomeLeftTree", // right sided carousel url
    "/restapi/protected/ePlatform/reportENER/obligations/deadline?*": "/obligationsDeadlines", // right sided carousel url
    '/restapi/*': '/$1'
}));

const obligationsDeadlines = require('./core/obligations/deadlines/obligations-deadlines');

app.use((req, res, next) => {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);

    console.log(req.params);

    if(req.path.startsWith('/obligationsDeadlines')) {
        return res.status(200).json(obligationsDeadlines);
    }


    next();
});

// Mount the router based on lowdb.js
app.use(router);

// Start listening
app.listen(port, () => {
    console.log(`\n\nJSON Server is running! Open the browser at http://localhost:${port}\n\n`);
});
