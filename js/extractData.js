const fs = require('fs')

// URL path for JSON data
const url = "../games/questions.json"

// Read JSON file and extract data
fs.readFile(url, 'utf-8', (err, data) => {

    if (err) throw err

    // parse JSON
    let jsonData = JSON.parse(data)

    // Extract JSON data to variables
    const {
        MATH: [m1, m2, m3],
        ENGLISH: [e1],
        SCIENCE: [s1]

    } = jsonData

    // Store questions into separate arrays
    const math_questions = [m1, m2, m3]
    const english_questions = [e1]
    const science_questions = [s1]



})