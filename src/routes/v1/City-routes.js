const express = require('express');

const router = express.Router();

const { CityController } = require('../../controller');


router.post('/',
     CityController.createCity
    );

router.get('/:id', 
    CityController.getCity
);

router.get('/',
    CityController.getCities
    );

router.delete('/:id', 
    CityController.destroyCity
);

module.exports = router;