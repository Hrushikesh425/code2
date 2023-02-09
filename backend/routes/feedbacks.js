const express = require('express');
const router = express.Router();

const FeedbackController = require('../controllers/feedbackController');

router.post('/feedback', FeedbackController.feedbackController);

router.get('/getFeedbacks', FeedbackController.getFeedbacks);

module.exports = router;