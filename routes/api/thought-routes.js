const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtID,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller')

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)
    .put(updateThought)
   

router
    .route('/:thoughtId')
    .get(getThoughtID)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)


module.exports = router;