const { Schema, model } = require("mongoose");

const diagSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        codigo: {
            type: Number,
            required: true,
        },
        edad: {
            type: Number,
            required: true,
        },
        genero: {
            type: String,
            maxlength: 1,
            required: true,
        },
        rasgClinicos: {
            type: String,
        },
        rasgRadiog: {
            type: String,
        },
        estadoSistem: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = model("Diagnostico", diagSchema);