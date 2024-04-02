/* eslint-disable no-undef */
const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
console.log('dev', dev);
const nextApp = next({
	dev,
});
const handle = nextApp.getRequestHandler();
nextApp
	.prepare()
	.then(() => {
		const server = express();
		const port = 3000;

		const serviceWorkers = [
			{
				filename: 'firebase-messaging-sw.js',
				path: './public/firebase-messaging-sw.js',
			},
		];
		serviceWorkers.forEach(({ filename, path }) => {
			server.get(`/${filename}`, (req, res) => {
				nextApp.serveStatic(req, res, path);
			});
		});

		server.get('/_next/*', (req, res) => {
			/* serving _next static content using next.js handler */
			handle(req, res);
		});

		server.get('*', (req, res) => {
			/* serving page */
			return handle(req, res);
			// return renderAndCache(req, res);
		});

		server.listen(port, (err) => {
			if (err) throw err;
			console.log(`>> Ready on  ${port}`);
		});
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});
