const express = require("express");
const { check } = require("express-validator");
const { getEvento, crearEvento, actualizarEvent, eliminarEvent } = require("../controllers/events");
const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");



const router = express.Router();

router.use(validarJWT);

router.get("/", getEvento)
router.post("/", [
    check("title", "El titulo es obligatorio").not().isEmpty(),
    check("start", "Fecha de inicio es obligatoria").custom(isDate),
    check("end", "Fecha de finalizacion es obligatoria").custom(isDate),
    validarCampos
], crearEvento)
router.put("/:id", actualizarEvent)
router.delete("/:id", eliminarEvent)

module.exports = router;

