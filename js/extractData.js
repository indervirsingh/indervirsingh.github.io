const fs = require('fs')


const url = "../games/questions.json"





fs.readFile(url, 'utf-8', (err, data) => {

    if (err) throw err

    // parse JSON
    let jsonData = JSON.parse(data)

    // Extract JSON data to variables
    const { MATH: [ first, second, third ] } = jsonData

    // only first question from MATH is being extracted, need all math questions
    console.log(second.choices.text_input)



})