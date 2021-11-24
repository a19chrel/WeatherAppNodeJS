const router = require('express').Router();

router.get('/', (req, res) => {
    // Get users
});

router.post('/', (req, res) => {
    // Create user
});

router.get('/:user', (req, res) => {
    // Get user
});

router.put('/:user', (req, res) => {
    // Update user
});

router.delete('/:user', (req, res) => {
    // Remove user
});

module.exports = router;