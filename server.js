// The order for the server is important to work properly - DON'T change it
const express = require('express');
const history = require('connect-history-api-fallback');
const serveStatic = require("serve-static")
const path = require('path');
const app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 8080;
app.listen(port);