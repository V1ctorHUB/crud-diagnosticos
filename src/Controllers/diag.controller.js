const httpError = require("http-errors");
const Diag = require("../models/diagnostico.model");

const createDiag = async (req, res, next) => {
    try {
        const { body } = req;

        const newDiag = new Diag(body);

        const savedDiag = await newDiag.save();

        if (!savedDiag) throw httpError(500, "Diag not created");

        res.status(201).json({ message: "Diag created", data: savedDiag });
    } catch (error) {
        next(error);
    }
};

const getDiags = async (req, res, next) => {
    try {
        const diags = await Diag.find();

        if (!diags) throw httpError(404, "Diags not found");

        res.status(200).json({ data: diags });
    } catch (error) {
        next(error);
    }
};

const getOneDiag = async (req, res, next) => {
    try {
        const { id } = req.params;

        const diag = await Diag.findById(id);

        if (!diag) throw httpError(404, "Diag not found");

        res.status(200).json({ data: diag });
    } catch (error) {
        next(error);
    }
};

const updateDiag = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const toUpdateDiag = await Diag.findById(id);

        if (!toUpdateDiag) throw httpError(404, "Diag not found");

        const updatedDiag = await Diag.findByIdAndUpdate(id, body, {
            new: true,
        });

        if (!updatedDiag) throw httpError(500, "Diag not updated");

        res.status(200).json({ message: "Diag updated", data: updatedDiag });
    } catch (error) {
        next(error);
    }
};

const deleteOneDiag = async (req, res, next) => {
    try {
        const { id } = req.params;

        const toDeleteDiag = await Diag.findById(id);

        if (!toDeleteDiag) throw httpError(404, "Diag not found");

        const deletedDiag = await Diag.findByIdAndDelete(id);

        if (!deletedDiag) throw httpError(500, "Diag not deleted");

        res.status(200).json({ message: "Diag deleted" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createDiag,
    getDiags,
    getOneDiag,
    updateDiag,
    deleteOneDiag
};