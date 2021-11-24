const router = require('express').Router();

router.get('/', (req, res) => {

});

router.get('/:ort/', (req, res) => {
    // Get forecasts for ort
});

router.get('/:ort/:date', (req, res) => {
    // Get forecasts for ort and date
});

router.get('/:climatecode/:date/', (req, res) => {
    // Get forecasts for a entered date and climatecode
});

module.exports = router;