const { Router } = require('express');
var express = require('express');
var router = express.Router();
var ContatoController = require("../controllers/ContatoController")

/* HOME PAGE */
router.get('/', function (req, res, next) {
  res.render("index", { title : "Express" });

})

/* CONTACT PAGE */
router.get("/contato", ContatoController.pagina_contato)


module.exports = router
