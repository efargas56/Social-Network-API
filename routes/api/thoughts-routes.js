const router = require('express').Router();

const { 
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
 } = require('../../controllers/thoughts-controller');

router
  .route('/')
  .get(getAllThoughts)
  .post(createThought);

router
    .route('/:thoughtsId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtsId/reactions')
    .post(addReaction);

router
    .route('/:thoughtsId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;