const express = require('express');
const controller = require('../controllers/connectionController');

const router = express.Router();

//GET /events/connections : Get all connections

router.get('/',controller.index);

//GET /events/newConnection : send html form for creating a new event

router.get('/newConnection',controller.newConnection);

//POST / events : create a new event
router.post('/',controller.create);


//GET /events/:id : send details of event by ID
router.get('/:id', controller.show);

//GET /events/:id/edit, send html form for editing an exisiting events
router.get('/:id/edit', controller.edit);

//PUT /events/:id, update the events identified by id
router.put('/:id', controller.update);

//DELETE /events/:id, delete the events identified by id
router.delete('/:id', controller.delete);

module.exports = router;
