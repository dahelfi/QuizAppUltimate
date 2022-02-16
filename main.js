let questions = [

    {
        "questionId": 1,
        "question": "Was ist die Hauptstadt von Israel?",
        "answer_1": "Jerusalem",
        "answer_2": "Jericho",
        "answer_3": "Jordan",
        "answer_4": "Haiffa",
        "right_answer": 1
    },

    {
        "questionId": 2,
        "question": "In welchem Jahr wurden die USA gegründet?",
        "answer_1": "1312",
        "answer_2": "1776",
        "answer_3": "1948",
        "answer_4": "2001",
        "right_answer": 2
    },

    {
        "questionId": 3,
        "question": "Wer entdeckte den amerikanischen Kontinent?",
        "answer_1": "C. Kolumbus",
        "answer_2": "Lady Gaga",
        "answer_3": "Michael Ballack",
        "answer_4": "Barack Obama",
        "right_answer": 1
    },

    {
        "questionId": 4,
        "question": "Wie lang ist der Rhein?",
        "answer_1": "595",
        "answer_2": "7025",
        "answer_3": "2005",
        "answer_4": "1328",
        "right_answer": 4
    },
    {
        "questionId": 5,
        "question": "Wo steht der schiefe Turm von Pisa?",
        "answer_1": "Rom",
        "answer_2": "Mailand",
        "answer_3": "Pisa",
        "answer_4": "Bergamo",
        "right_answer": 3
    },
    {
        "questionId": 6,
        "question": "Wer gewann die Frauen-Weltmeisterschaft im Jahr 2019?",
        "answer_1": "USA",
        "answer_2": "Japan",
        "answer_3": "Deutschland",
        "answer_4": "Chile",
        "right_answer": 1
    },
    {
        "questionId": 7,
        "question": "Was ist das berühmteste mexikanische Bier?",
        "answer_1": "Weissbier",
        "answer_2": "Corona",
        "answer_3": "Öttinger",
        "answer_4": "Orangensaft",
        "right_answer": 2
    },
    {
        "questionId": 8,
        "question": "Wie hiess Britneys Spears erste Single?",
        "answer_1": "Baby one more Time",
        "answer_2": "Man in the Middle",
        "answer_3": "You are great",
        "answer_4": "Heaven is a place to be",
        "right_answer": 1
    }
    ,
    {
        "questionId": 9,
        "question": "Was ist der erfolgreichste Fussballklub der Welt?",
        "answer_1": "FC Barcelona",
        "answer_2": "Real Madrid",
        "answer_3": "Hannover 96",
        "answer_4": "Manchester United",
        "right_answer": 2
    },
    {
        "questionId": 10,
        "question": "Durch welche Branche wurde Heidi Klum berühmt?",
        "answer_1": "IT",
        "answer_2": "Gastronomie",
        "answer_3": "Mode",
        "answer_4": "Kanalreinigung",
        "right_answer": 3
    },
    {
        "questionId": 11,
        "question": "Was ist das grösste Organ des Menschen?",
        "answer_1": "Dickdarm",
        "answer_2": "Leber",
        "answer_3": "Haare",
        "answer_4": "Haut",
        "right_answer": 4
    },
    {
        "questionId": 12,
        "question": "Was ist die englische Währung?",
        "answer_1": "Euro",
        "answer_2": "Zlotty",
        "answer_3": "Nichts davon",
        "answer_4": "Dollar",
        "right_answer": 3
    },
    {
        "questionId": 13,
        "question": "Wie oft wurde Schalke deutscher Meister in der Bundesliga?",
        "answer_1": "0",
        "answer_2": "4",
        "answer_3": "2",
        "answer_4": "5",
        "right_answer": 1
    },
    {
        "questionId": 14,
        "question": "Was ist der weltweit am häufigsten gewählte Vorname für Männer?",
        "answer_1": "Karl",
        "answer_2": "Mohammed",
        "answer_3": "Daniel",
        "answer_4": "Lukas",
        "right_answer": 2
    },
    {
        "questionId": 15,
        "question": "Was ist der kleinste Planet unseres Sonnensystems?",
        "answer_1": "Jupiter",
        "answer_2": "Neptun",
        "answer_3": "Uranus",
        "answer_4": "Pluto",
        "right_answer": 4
    },

    {
        "questionId": 16,
        "question": "Was ist der grösste Fisch der die Ozeane bevölkert?",
        "answer_1": "Walhai",
        "answer_2": "Blauwal",
        "answer_3": "Weisser Hai",
        "answer_4": "Orca",
        "right_answer": 1
    },
    {
        "questionId": 17,
        "question": "Aus welchem Land stammt die Salami?",
        "answer_1": "Griechenland",
        "answer_2": "Italien",
        "answer_3": "USA",
        "answer_4": "Japan",
        "right_answer": 2
    },
    {
        "questionId": 18,
        "question": "Wer war keiner der drei Musketiere?",
        "answer_1": "Athos",
        "answer_2": "Porthos",
        "answer_3": "Aramis",
        "answer_4": "Samaros",
        "right_answer": 4
    },
    {
        "questionId": 19,
        "question": "Wer ist der Hauptdarsteller der Filmreihe Mission Impossible?",
        "answer_1": "Tom Cruise",
        "answer_2": "Brad Pitt",
        "answer_3": "George Clooney",
        "answer_4": "Will Smith",
        "right_answer": 1
    },
    {
        "questionId": 20,
        "question": "Was ist kein Bauteil des Fahrwerks eines Autos?",
        "answer_1": "Lenkrad",
        "answer_2": "Stossdämpfer",
        "answer_3": "Federn",
        "answer_4": "Stabilisator",
        "right_answer": 1
    }


];

let randomNumberArray = [];
let randomQuestionArray = [];
let currentQuestion = 0;
let disabled = false;
let newQuestions = false;
let rightQuestionsCounter = 0;
let AUDIO_SUCCESS = new Audio('sounds/success.mp3');
let AUDIO_WRONG = new Audio('sounds/wrong.mp3');
let AUDIO_END = new Audio('sounds/end.mp3');


/**
 * function to create an array to create an array with random numbers between 0 and the length of the question array
 */
function createRandomNumberArray() {
    randomNumberArray = [];
    let counter = 0;

    for (let i = 0; i < 5; i++) {
        while (counter < 5) {
            let number = createRandomNumber();
            
            
            if (randomNumberArray.indexOf(number) < 0) {
                counter++;
                randomNumberArray.push(number);
            }
        }
    }
  

   
}

function createRandomNumber() {
    return Math.floor(Math.random() * questions.length);

}

function createRandomQuestionArray(){
    let counter = 0;
    randomQuestionArray = [];
    createRandomNumberArray();
    for (let i = 0; i < randomNumberArray.length; i++) {
        const number = randomNumberArray[i];
        let question = questions[number];
        randomQuestionArray.push(question);
        
    }

    newQuestions = true;



}

function init() {
 
    if(!newQuestions){
        createRandomQuestionArray();
    }
    
    document.getElementById('all-questions').innerHTML = randomQuestionArray.length;
    document.getElementById('selected-question').innerHTML = currentQuestion + 1;
 
    showQuestion();
}

function showQuestion() {
    
    if (currentQuestion == randomQuestionArray.length) {
        endTheGame();
    } else {
        console.log("ich werde ausgeführt", currentQuestion);
        let percent = (currentQuestion + 1) / randomQuestionArray.length;
        percent = Math.round(percent * 100);

        document.getElementById('progress-bar').innerHTML = `${percent}%`;
        document.getElementById('progress-bar').style = `width:${percent}%;`;

        let question = randomQuestionArray[currentQuestion];
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('1').innerHTML = question['answer_1'];
        document.getElementById('2').innerHTML = question['answer_2'];
        document.getElementById('3').innerHTML = question['answer_3'];
        document.getElementById('4').innerHTML = question['answer_4'];
    }
}

function answer(selectedQuestionLocal) {
    let answer = randomQuestionArray[currentQuestion]['right_answer'];
    if (!disabled) {
        if (selectedQuestionLocal == answer) {
            document.getElementById(selectedQuestionLocal).classList.add('bg-success');
            rightQuestionsCounter++;
            AUDIO_SUCCESS.play();
        } else {
            document.getElementById(selectedQuestionLocal).classList.add('bg-danger');
            document.getElementById(answer).classList.add('bg-success');
            AUDIO_WRONG.play();
        }
        document.getElementById('nextButton').disabled = false;
        disabled = true;
    }
}

function nextQuestion() {
    currentQuestion++;
    init();
    document.getElementById('nextButton').disabled = true;
    removeDangerandSuccessClass();
}

function removeDangerandSuccessClass() {
    console.log("reset wird ausgeführt");
    document.getElementById('1').classList.remove('bg-success');
    document.getElementById('1').classList.remove('bg-danger');
    document.getElementById('2').classList.remove('bg-success');
    document.getElementById('2').classList.remove('bg-danger');
    document.getElementById('3').classList.remove('bg-success');
    document.getElementById('3').classList.remove('bg-danger');
    document.getElementById('4').classList.remove('bg-success');
    document.getElementById('4').classList.remove('bg-danger');
    disabled = false;
}

function restartGame() {
    document.getElementById('header-image').src = 'img/KIQuiz_Search_result_teaser_01.jpg';
    document.getElementById('questionBody').classList.remove('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    rightQuestionsCounter = 0;
    currentQuestion = 0;
    init();
}

function endTheGame() {

    newQuestions = false;

    document.getElementById('endScreen').style = '';
    document.getElementById('endScreen').classList.remove('d-none');
    document.getElementById('questionBody').classList.add('d-none');
    document.getElementById('rightQuestions').innerHTML = rightQuestionsCounter;
    document.getElementById('all-questions2').innerHTML = randomQuestionArray.length;
    document.getElementById('header-image').src = 'img/trophy-1674911_640.png';
    AUDIO_END.play();

}