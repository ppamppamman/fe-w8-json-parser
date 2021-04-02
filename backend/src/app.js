const express = require('express');
const cors = require('cors');

const app = express();
const port = 3333;
const router = require('./router.js');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/data', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})