const express = require('express');
router = express.Router();

const conexion = require ('./database/db');

router.get('/', (req, res)=>{
	conexion.query('select * from cards', (error, results) =>{
		if (error) {
			throw error;
		}else{
			res.send(results);
		}
	});

});

module.exports = router;