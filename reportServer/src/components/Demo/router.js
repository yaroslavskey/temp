const { Router } = require('express');
const DemoComponent = require('./index');

const router = Router();

router.post('/origin_destination', DemoComponent.OriginDestination);
router.post('/destination', DemoComponent.Destination);
router.post('/origin', DemoComponent.Origin);

module.exports = router;
