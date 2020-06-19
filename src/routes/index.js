const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
	const data = {
		firstname: 'Hugo Andres',
    lastname: 'Diaz Bernal',
    age: 30
	};
	res.json(data);
});

module.exports = router;
