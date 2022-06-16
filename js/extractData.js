const fs = require('fs')


fs.readFile('../games/questions.txt', 'utf-8', (err, data) => {

    if (err) throw err

    console.log(data)

    // USE JSON!!!! not txt, continue tomorrow

    // Extract then parse data
    let stringifiedData = data

    /* 
                        Data parsing structure:
        Category |   [question]  |   [options]   |>>  [correctAnswer]  <<|
            - category, question, options are separated by '|'
            - correctAnswer is enclosed by '|>>' and '<<|'
                - this indicates end of line
    */

    // loop until all data is extracted
    while (stringifiedData.length > 0) {
        // parse data into temp variables
        let category = stringifiedData.slice(0, '|')
    }
    

})