const proxy = require('express-http-proxy');
const express = require('express')
const app = express()
const port = 3000
const url = require('url');

// A basic proxy to bypass CORS mechanism
function getProxyHost(req) {
	proxyUrl = url.parse(req.query.url);
	return proxyUrl.protocol + '//' + proxyUrl.hostname;
}

function getProxyPath(req) {
	return url.parse(req.query.url).path;	
}
 
app.use('/proxy', proxy(getProxyHost, { proxyReqPathResolver: getProxyPath }));

// A simple web server that serves status files
app.use(express.static(__dirname + '/public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
