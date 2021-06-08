const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send(`<h1>Wrong Route!</h1>\n <br><ul><li><a href="http://localhost:3001/api/products" >All Products</a></li><li><a href="http://localhost:3001/api/categories" >All Categories</a></li><li><a href="http://localhost:3001/api/tags" >All Tags</a></li></ul>`)
});

module.exports = router;
