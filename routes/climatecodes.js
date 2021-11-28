const router = require('express').Router();

router.get('/', (req, res) => {
    // Get all climatecodes
    return res.status(500).send("No data");
});

module.exports = router;