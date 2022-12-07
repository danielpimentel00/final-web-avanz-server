const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const express = require("express");
const app = express();
const cors = require("cors");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(cors());

app.get("/comics", async (req, res) => {
  const response = await fetch(
    "https://comicvine.gamespot.com/api/issues/?api_key=a25c2fc6bd3e2043008fe06b88ae092009134446&format=json"
  );
  res.json(await response.json());
});

app.get("/comic", async (req, res) => {
  const id = req.query.id;
  const response = await fetch(
    `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=a25c2fc6bd3e2043008fe06b88ae092009134446&format=json`
  );
  res.json(await response.json());
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
