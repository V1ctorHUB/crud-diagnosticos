const { param, body } = require("express-validator");

const createDiagValidator = [
    body('name')
        .isString().withMessage("el nombre debe ser una cadena de texto")
        .trim()
        .isLength({ min: 2 }).withMessage("el nombre debe tener al menos dos caracteres"),

    body('codigo')
        .isInt().withMessage('el codigo debe ser un numero entero')
        .trim()
        .isLength({ min: 6, ma: 6 })
        .withMessage("el codigo debe tener solamente 6 caracteres"),

    body('edad')
        .isInt().withMessage('La edad debe ser un numero entero')
        .trim()
        .isLength({ max: 3 }).withMessage('La edad tiene un maximo de 3 digitos'),

    body('genero')
        .isString().withMessage("El genero debe ser una cadena de texto")
        .trim()
        .isIn(['F', 'M']).withMessage("El género debe ser 'F' o 'M'"),

    body('rasgClinicos')
        .optional()
        .isString().withMessage('Los rasgos clinicos deben ser una cadena de texto'),

    body('rasgRadiog')
        .optional()
        .isString().withMessage('Los rasgos clinicos deben ser una cadena de texto'),

    body('estadoSistem')
        .optional()
        .isString().withMessage('Los rasgos clinicos deben ser una cadena de texto')
];

const updateDiagValidator = [
    body('name')
        .optional()
        .isString().withMessage("el nombre debe ser una cadena de texto")
        .trim()
        .isLength({ min: 2 }).withMessage("el nombre debe tener al menos dos caracteres"),

    body('codigo')
        .optional()
        .isInt().withMessage('el codigo debe ser un numero entero')
        .trim()
        .isLength({ min: 6, ma: 6 })
        .withMessage("el codigo debe tener solamente 6 caracteres"),

    body('edad')
        .optional()
        .isInt().withMessage('La edad debe ser un numero entero')
        .trim(),

    body('genero')
        .optional()
        .isString().withMessage("El genero debe ser una cadena de texto")
        .trim()
        .isIn(['F', 'M']).withMessage("El género debe ser 'F' o 'M'"),

    body('rasgClinicos')
        .optional()
        .isString().withMessage('Los rasgos clinicos deben ser una cadena de texto'),

    body('rasgRadiog')
        .optional()
        .isString().withMessage('Los rasgos clinicos deben ser una cadena de texto'),

    body('estadoSistem')
        .optional()
        .isString().withMessage('Los rasgos clinicos deben ser una cadena de texto')
]

const idInParams = [
    param("id")
        .notEmpty().withMessage("id field is required")
        .isMongoId().withMessage("id must be mongo id")
]

module.exports = { idInParams, createDiagValidator, updateDiagValidator };