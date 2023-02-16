const Router = require('express');
const router = new Router()
const meetController = require('../controller/meet.controller');



router.post('/Meet_up/Create',meetController.createMeetUp);
router.get('/Meet_up/Get',meetController.getMeetUps);
router.get('/Meet_up/Get/:id',meetController.getOneMeetUp);
router.put('/Meet_up/Edit/:id',meetController.updateMeetUp);
router.delete('/Meet_up/Delete/:id',meetController.deleteMeetUp);


module.exports = router