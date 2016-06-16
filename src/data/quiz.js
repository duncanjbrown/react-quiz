const quizData = {
    questions: [
        { 
            id: 0, 
            text: "In which year did the Franco-Prussian war end?",
            answers: [
                {
                    text: "1871",
                },
                {
                    text: "1901",
                },
                {
                    text: "1834",
                }
            ],
            explanation: "France would not get Alsace and Lorraine back until after WWI",
            correctAnswer: 0,
            selectedAnswer: null
        },
        { 
            id: 1, 
            text: "How many planets in the Solar System?",
            answers: [
                {
                    text: "9" 
                },
                {
                    text: "10"
                },
                {
                    text: "7" 
                },
            ],
            correctAnswer: 0,
            explanation: "In ascending order of distance from the sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto",
            selectedAnswer: null
        },
        { 
            id: 2, 
            text: "How many states in the EU?",
            answers: [
                {
                    text: "27" 
                },
                {
                    text: "28"
                },
                {
                    text: "29" 
                },
            ],
            explanation: "More states will join soon",
            correctAnswer: 1,
            selectedAnswer: null
        }
    ]
}

export default quizData;