const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtreaction,
  removeThoughtreaction,
} = require('../../controllers/ThoughtController');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/reactions
router.route('/:ThoughtId/reaction').post(addThoughtreaction);

// /api/Thoughts/:ThoughtId/reactions/:reactionId
router.route('/:ThoughtId/reaction/:reactionId').delete(removeThought reaction);

module.exports = router;
