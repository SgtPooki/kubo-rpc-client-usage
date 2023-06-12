Steps to replicate the ERR_REQUIRE_ESM issue.

1. npm install
2. npm run build
3. node dist/app.js
4. access the endpoint http://127.0.0.1:3000/

Below the error:
:~/code/test$ node dist/app.js
Server running at http://127.0.0.1:3000/
node:internal/process/promises:279
triggerUncaughtException(err, true /_ fromPromise _/);
^

Error [ERR_REQUIRE_ESM]: require() of ES Module /home/code/test/node_modules/kubo-rpc-client/dist/src/index.js from /home/code/test/dist/app.js not supported.
Instead change the require of index.js in /home/code/test/dist/app.js to a dynamic import() which is available in all CommonJS modules.
at /home/code/test/dist/app.js:49:81 {
code: 'ERR_REQUIRE_ESM'
}
