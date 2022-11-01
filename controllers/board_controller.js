const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /board')
})

module.exports = router