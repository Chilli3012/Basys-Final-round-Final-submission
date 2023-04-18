const express = require('express');
const { getEMRDetails, postEMRDetails } = require('../controller/emrController');

const router = express.Router();


router.get('/getEMRDetails/:id',getEMRDetails)
router.post('/postEMRDetails/',postEMRDetails)



module.exports = router;