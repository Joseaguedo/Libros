var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  var dato = fs.readFileSync('lib/libros.json', 'utf-8');
  var datoJson = JSON.parse(dato);
  res.render('reporte', { reporte: datoJson });
});

module.exports = router;
