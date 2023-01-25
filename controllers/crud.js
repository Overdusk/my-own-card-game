const conexion = require('../database/db');

exports.save = (req,res) => {
	const cardName = req.body.CARD_NAME;
	const cardType = req.body.CARD_TYPE;
	const cardEff = req.body.CARD_EFF;
	const cardATK = req.body.CARD_ATK;
	const cardDef = req.body.CARD_DEFENSE;
	const cardPrice = req.body.PRICE;

	conexion.query('INSERT INTO CARDS SET ?', 
		{CARD_NAME:cardName, CARD_TYPE:cardType,
		 CARD_EFF:cardEff, CARD_ATK:cardATK,
		 CARD_DEFENSE:cardDef, PRICE:cardPrice},
		(error, results) => {
			if (error) {
				console.log(error);
			} else {
				res.redirect('/');
			}
		})

}