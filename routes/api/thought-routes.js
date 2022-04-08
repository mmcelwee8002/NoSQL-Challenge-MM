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
    .route('/:thoughtId/reactions')
    .post(addReaction)
    
router
    .route('/:thoughtId/reactionId')
    .delete(removeReaction)

module.exports = router;