const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).send({  });
});

router.post("/", async (req, res) => {
  // const result = await fetch(recommendKeywordsEndPoint(req.body.query)).then(
  //   (response) => {
  //     return response.text();
  //   }
  // )
  console.log(req.body)
  return res.status(200).send({response: req.body});
})

module.exports = router;
