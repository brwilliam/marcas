const express =require('express');
const MarcaController = require('../controller/marcaController');
const router = express.Router();
const marcaController = new MarcaController();

router.get('/',marcaController.getAll )
router.get('/:id',marcaController.getById )

module.exports = router; 