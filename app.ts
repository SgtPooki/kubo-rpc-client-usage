//import { CID, create, IPFSHTTPClient } from 'kubo-rpc-client';
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  const url = "http://localhost:5001/api/v0";
  const kuboRpcClientImport = await import("kubo-rpc-client");

  let client: any = kuboRpcClientImport.create({
    url,
  });

  const testmessage = "kubo rpc client working!";
  const ipfsResult = await client.add({ content: Buffer.from(testmessage) });

  let data: any = [];
  const cid = ipfsResult.path;
  const result = client.cat(cid);
  for await (const object of result) {
    data.push(object);
  }

  const resultBuffer = Buffer.concat(data);

  res.end(resultBuffer.toString());
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
