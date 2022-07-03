const express = require('express')

const QuestionCtrl = require('../controllers/questions-ctrl')

const router = express.Router()

router.post('/question', QuestionCtrl.createQuestion)
router.put('/question/:id', QuestionCtrl.updateQuestion)
router.delete('/question/:id', QuestionCtrl.deleteQuestion)
router.get('/question/:id', QuestionCtrl.getQuestionById)
router.get('/questions', QuestionCtrl.getQuestions)

module.exports = router