const express = require('express')
const router = express.Router()

const axios = require('axios').default
const postcodejp = require('../config/postcodejp')

router.get('/', async function(req, res, next) {
  try {
    const postcode = req.query.postcode
    console.log(postcode)

    const response = await axios.get(`https://apis.postcode-jp.com/api/v4/postcodes/${postcode}`, {
      headers: { apikey: postcodejp.API_KEY }
    })

    res.json(response.data[0])
    return
  } catch(err) {
    console.error(err.message)
    next(err)
  }
})

module.exports = router