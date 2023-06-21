var express = require('express');
const db = require('../models');
var router = express.Router();

/* Get list of products by categories */
router.get('/groups', async (req, res, next) => {
  try {
    result = await db.Group.find({})
    res.send({
      error: 0,
      message: 'Success',
      data: result,
    })
  } catch (error) {
    res.send({ error: -1, message: 'Unknown exception' });
    console.log('API-Exception', error);
  }
});
/* Get list of products by categories */
/* router.get('/create-group', async (req, res, next) => {
  try {
    result = await db.Products.aggregate([
      {
        $group: {
          _id: "$category",
          products: { $push: "$$ROOT" },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } }])
    res.send({
      error: 0,
      message: 'Success',
      data: result,
    })
  } catch (error) {
    res.send({ error: -1, message: 'Unknown exception' });
    console.log('API-Exception', error);
  }
});
 */
module.exports = routers;