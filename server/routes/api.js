const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.post('/test', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;