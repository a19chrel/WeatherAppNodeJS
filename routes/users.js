const router = require('express').Router();

router.get('/', (req, res) => {
    // Get users
    return res.status(500).send("This service does not exists yet");
});

router.post('/', (req, res) => {
    // Create user
    return res.status(500).send("This service does not exists yet");
});

router.get('/:user', (req, res) => {
    // Get user
    return res.status(500).send("This service does not exists yet");
});

router.put('/:user', (req, res) => {
    // Update user
    return res.status(500).send("This service does not exists yet");
});

router.delete('/:user', (req, res) => {
    // Remove user
    return res.status(500).send("This service does not exists yet");
});

module.exports = router;