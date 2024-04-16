const express = require('express');
const router = express.Router();

const diagsRouter = require('./diag.router');
router.use('/DR', diagsRouter);

module.exports = router;