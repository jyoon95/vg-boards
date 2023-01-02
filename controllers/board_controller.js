const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('boards/index')
})

router.get('/new', (req, res) => {
  res.render('boards/new');
});

router.get('/:id', (req, res) => {
    console.log('err', err)
    res.render('error404')
})

module.exports = router