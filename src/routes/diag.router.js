const express = require("express");
const router = express.Router();

const {
    createDiag,
    getDiags,
    getOneDiag,
    updateDiag,
    deleteOneDiag
} = require('../Controllers/diag.controller');

const {
    idInParams,
    createDiagValidator,
    updateDiagValidator,
} = require("../validators/diag.validator");

const { runValidation } = require("../middlewares/validator.middlewares");

router.post("/", createDiagValidator, runValidation, createDiag);
router.get("/", getDiags);
router.get("/:id", idInParams, runValidation, getOneDiag);
router.put("/:id", idInParams, updateDiagValidator, runValidation, updateDiag);
router.delete("/:id", idInParams, runValidation, deleteOneDiag);

module.exports = router;