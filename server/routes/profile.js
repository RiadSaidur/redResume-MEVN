const router = require('express').Router();

const { userDetails, updateDetails, deleteResume } = require('../controller/profile_controller');

router.get('/', (req, res) => userDetails(req, res));
router.patch('/update', (req, res) => updateDetails(req, res));
router.patch('/delete', (req, res) => deleteResume(req, res));

module.exports = router;