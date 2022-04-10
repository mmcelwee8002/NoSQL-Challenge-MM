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
    
   

router
    .route('/:thoughtId')
    .get(getThoughtID)
    .delete(deleteThought)
    .put(updateThought)

router
    .route('/:thoughtId/reactions/:reactionId')
    .post(addReaction)
    .put(removeReaction)

router
    .route('/:thoughtId/reactions/')
    .post(addReaction)
    

module.exports = router;