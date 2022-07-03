const Questions = require('../models/questions-model')

createQuestion = (req, res) => {
    const body = req.body
    
    if (!body) {
        return res
            .status(400)
            .json({
                success:    false,
                error:      'You must provide a question',
            })
    }

    const question = new Questions(body)

    if (!question) {
        return res
            .status(400)
            .json({
                success: false,
                error: err 
            })
    }

    question
        .save()
        .then(() => {
            return res
                .status(201)
                .json({
                    success:    true,
                    id:         question._id,
                    message:    'Question created!',
                })
        })
        .catch(error => {
            return res
                .status(400)
                .json({
                    error,
                    message:    'Question not created',
                })
        })
}

updateQuestion = async (req, res) => {
    const body = req.body

    if(!body) {
        return res
            .status(400)
            .json({
                success:    false,
                error:      'You must provide a body to update',
            })
    }

    Questions.findOne({_id: req.params.id }, (err, question) => {

        if (err) {
            return res
                .status(400)
                .json({
                    err,
                    message:    'Question not found!',
                })
        }

        question.category = body.category
        question.question = body.question
        question.choices = body.choices
        question.correct_answer = body.correct_answer
        question
            .save()
            .then(() => {
                return res
                    .status(200)
                    .json({
                        success:    true,
                        id:         question._id,
                        message:    'Question updated!',
                    })
            })
            .catch(error => {
                return res
                    .status(404)
                    .json({
                        error,
                        message:    'Question not updated!',
                    })
            })

    })
}


deleteQuestion = async (req, res) => {

    await Questions.findOneAndDelete({ _id: req.params.id }, (err, question) => {

        if (err) {
            return res
                .status(400)
                .json({
                    success:    false,
                    error:      err,
                })
        }


        if (!question) {
            return res
                    .status(404)
                    .json({
                        success:    false,
                        error:      `Question not found`
                    })
        }


        return res
                .status(200)
                .json({
                    success:    true,
                    data:       question,
                })


    }).catch(err => console.log(err))

}

getQuestionById = async (req, res) => {
    // UPDATE
    await Questions.findOne({ _id: req.params.id }, (err, movie) => {

        if (err) {
            return res
                    .status(400)
                    .json({
                        success:    false,
                        error:      err
                    })
        }

        if (err) {
            return res
                    .status(400)
                    .json({
                        success:    false,
                        error:      `Question not found`
                    })
        }

        return res
                .status(200)
                .json({
                    success:    false,
                    error:      `Question not found`
                })

    }).catch(err => console.log(err))
}

getQuestions = async (req, res) => {
    await Questions.find({}, (err, questions) => {
        
        if (err) {
            return res
                    .status(400)
                    .json({
                        success:    false,
                        error:      err
                    })
        }

        if (!questions.length) {
            return res
                    .status(404)
                    .json({
                        success:    false,
                        error:      `Question not found`
                    })
        }

        return res.status(200).json({ success: true, data: questions })
    }).catch(err => console.log(err))
}


