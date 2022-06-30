const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Questions = new Schema(
    {
        "MATH": [
            {
                "question": "What is the square root of 64?",
                "choices":
                    {
                        "A": "8",
                        "B": "32",
                        "C": "16"
                    },
                "correct_answer": "C",
                "category": "MATH"
            },
            {
                "question": "If a racket and ball cost $1.10 together, and the racket costs exactly $1.00 more than the ball, How much does the ball cost?",
                "choices":
                    {
                        "text_input": ""
                    },
                "correct_answer": "0.05",
                "category": "MATH"
            },
            {
                "question": "Which number has the same amount of letters as its meaning?",
                "choices":
                    {
                        "text_input": ""
                    },
                "correct_answer": "4",
                "category": "MATH"
            }
        ],
    
        "ENGLISH": [
            {
                "question": "How many letters are in the English alphabet?",
                "choices": 
                    {
                        "A": "27",
                        "B": "26",
                        "C": "25"
                    },
                "correct_answer": "B",
                "category": "ENGLISH"
            }
        ],
    
        "SCIENCE": [
            {
                "question": "Which is the first element of the periodic table?",
                "choices": 
                    {
                        "A": "Potassium",
                        "B": "Helium",
                        "C": "Hydrogen"
                    },
                "correct_answer": "C",
                "category": "SCIENCE"
            }
        ]
    
    }
    
)

module.exports = mongoose.model('questions', Questions)