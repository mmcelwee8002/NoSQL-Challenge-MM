const router = require('express').Router;

const { get } = require('express/lib/response');
const{
  getAllThoughts,
  getThoughtID,
  createThought,
  addReaction,
  removeReaction,
  updateThought,
  deleteThought,
  } = require('../../controllers/thought-controller')

  //set up get all and post at /api/thought
  router
  .route('/')
  get(getAllThoughts)
  .post(createThought);

  //set up get one, put, and delte at api/thought/id

  router
  .route('/:id')
  .get(getThoughtID)
  .put(updateThought)
  .delete(deleteThought);

  //set up reaction
  router
  .route('/thoughtId/:reactionId')
  .delete('/removeReaction')


module.exports = router;
