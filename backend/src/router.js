const express = require("express");
// const fetch = require("node-fetch");

const router = express.Router();

const state = { jsonInput: null };

router.get("/", (req, res) => {
  return res.status(200).send({ data: state.jsonInput });
});

router.post("/", async (req, res) => {
  state.jsonInput = req.body.data;
  return res.status(200).send({ response: req.body });
});

module.exports = router;
