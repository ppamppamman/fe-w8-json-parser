const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();

const state = { jsonInput: null };

router.get("/", (req, res) => {
  console.log(state);
  return res.status(200).send({ data: state.jsonInput });
});

router.post("/", async (req, res) => {
  // const result = await fetch(recommendKeywordsEndPoint(req.body.query)).then(
  //   (response) => {
  //     return response.text();
  //   }
  // )
  console.log(req.body);
  // console.log(req.body)
  state.jsonInput = req.body.data;
  return res.status(200).send({ response: req.body });
});

module.exports = router;
