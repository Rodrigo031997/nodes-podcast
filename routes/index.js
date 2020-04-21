//traer todas las funciones de express a la carpeta routes
const express = require('express');
const router = express.Router();

//importar el controllador
const LaManoPeluda = require('../controllers/LaManoPeluda');
const AtandoCabos = require('../controllers/AtandoCabos');
module.exports = function(){
 router.get('/la-mano-peluda',LaManoPeluda.lamanopeluda);

 router.get('/atando-cabos',AtandoCabos.atandocabos);

 return router;

}