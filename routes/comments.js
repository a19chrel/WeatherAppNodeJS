const router = require('express').Router();

router.get('/:ort', (req, res) => {
    // Get comments from location - req.params.location
});

router.post('/:ort', (req, res) => {
    // Create comments from location
});

router.get('/:ort/comment/:commentid/', (req, res) => {
    // Get an comment
});

router.post('/:ort/comment/:commentid/', (req, res) => {
    // Create an answer to an comment
});

router.put('/:ort/comment/:commentid/', (req, res) => {
    // Update an comment
});

module.exports = router;