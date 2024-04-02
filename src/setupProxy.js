const { createProxyMiddleware } = require('http-proxy-middleware');

const express = require('express');

const app = express();
app.use(
	createProxyMiddleware('', {
		target:
			'http://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json',
		changeOrigin: true,
	}),
);

app.listen(3000);
