const express = require('express')
const request = require('superagent')

const router = express.Router()

const url = 'https://cat-fact.herokuapp.com/facts/random'

router.get('/', (req, res) => {
  const text = req.params.text

  request.get(url)
    .query(text)
    .then(response => {
      res.json(response.body)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})


module.exports = router
