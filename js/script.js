var questionList = [
    {
        id: 1,
        question: "Quelle est la capitale de l’Inde ?",
        choix: [
            "Calcutta",
            "Mumbai",
            "New Delhi",
            "Bangalore"
        ],
        reponse: "New Delhi",
        nombreDePoint: 1
    },
    {
        id: 2,
        question: "Qu’est-ce qu’un ouistiti ?",
        choix: [
            "Un aigle",
            "Un poissson",
            "Un chien",
            "Un singe"
        ],
        reponse: "Un singe",
        nombreDePoint: 2
    },
    {
        id: 3,
        question: "Quel couple s’est mis en scène dans le film « Eyes Wide Shut » ?",
        choix: [
            "Charlotte Gainsbourg et Yvan Attal",
            "Nicole Kidman et Tom Cruise",
            "Penelope Cruz et Javier Bardem",
            "Jennifer Garner et Ben Affleck"
        ],
        reponse: "Nicole Kidman et Tom Cruise",
        nombreDePoint: 3
    },
    {
        id: 4,
        question: "Dans quel pays est né le tango ?",
        choix: [
            "Le Brésil",
            "L'Espagne",
            "L'Argentine",
            "Cuba"
        ],
        reponse: "L'Argentine",
        nombreDePoint: 1
    },
    {
        id: 5,
        question: "Si 10 000 euros rapportent 280 euros d’intérêts. Combien rapportent 7 500 euros ?",
        choix: [
            "75 euros",
            "200 euros",
            "210 euros",
            "373 euros"
        ],
        reponse: "210 euros",
        nombreDePoint: 2
    },
    {
        id: 6,
        question: "Un garçon a 30 ans de moins que son père. Dans 7 ans, son âge sera le tiers de celui de son père. Quels sont les âges du fils et du père ?",
        choix: [
            "5 et 39 ans",
            "8 et 38 ans",
            "9 et 37 ans",
            "12 et 35 ans"
        ],
        reponse: "8 et 38 ans",
        nombreDePoint: 3
    },
    {
        id: 7,
        question: "Quel est le métier qui consiste à confectionner des chapeaux pour femme ?",
        choix: [
            "Modéliste",
            "Modiste",
            "Capeliste",
            "Chapeautier"
        ],
        reponse: "Modiste",
        nombreDePoint: 1
    },
    {
        id: 8,
        question: "Quel niveau faut-il avoir au minimum pour devenir architecte ?",
        choix: [
            "BTS (bac+2)",
            "Licence (bac+3)",
            "Maîtrise (bac+4)",
            "Doctorat (bac+8)"
        ],
        reponse: "Maîtrise (bac+4)",
        nombreDePoint: 2
    },
    {
        id: 9,
        question: "Quel footballeur est surnommé la Puce ?",
        choix: [
            "Mathieu Valbuena",
            "Andres Iniesta",
            "Carlos Tevez",
            "Lionel Messi"
        ],
        reponse: "Lionel Messi",
        nombreDePoint: 3
    },
    {
        id: 10,
        question: "En quelle année Zinédine Zidane a-t-il pris sa retraite en tant que joueur ?",
        choix: [
            "1999",
            "2002",
            "2006",
            "2008"
        ],
        reponse: "2006",
        nombreDePoint: 3
    },
    {
        id: 11,
        question: "Quel footballeur a été élu Ballon d’or 2015 ?",
        choix: [
            "Cristiano Ronaldo",
            "Neymar",
            "Lionel Messi",
            "Thomas Müller"
        ],
        reponse: "Lionel Messi",
        nombreDePoint: 2
    },
    {
        id: 12,
        question: "De quel pays africain, les Éléphants constituent-ils le nom de l’équipe de foot ?",
        choix: [
            "Ghana",
            "Tunisie",
            "Cameroun",
            "Côte d’Ivoire"
        ],
        reponse: "Côte d’Ivoire",
        nombreDePoint: 1
    },
    {
        id: 13,
        question: "Quel pays a remporté la Coupe du monde de football féminin en 2011 ?",
        choix: [
            "Les États-Unis",
            "Le Brésil",
            "La France",
            "Le Japon"
        ],
        reponse: "Le Japon",
        nombreDePoint: 2
    },
    {
        id: 14,
        question: "Sur quel score s’est conclue la finale de la Coupe du monde de rugby 2011 sacrant les Néo-Zélandais face aux Français ?",
        choix: [
            "8-7",
            "18-13",
            "22-21",
            "45-25"
        ],
        reponse: "8-7",
        nombreDePoint: 3
    },
    {
        id: 15,
        question: "Quel est l'autre nom des machines à sous ?",
        choix: [
            "Le 777",
            "Un bandit manchot",
            "Un bras ballant",
            "Un pirate borgne"
        ],
        reponse: "Un bandit manchot",
        nombreDePoint: 1
    },
    {
        id: 16,
        question: "Quelle est la seconde ville américaine, après Las Vegas, réputée pour être une ville de Jeux ?",
        choix: [
            "New York City",
            "Oklahoma City",
            "La Nouvelle-Orléans",
            "Atlantic City"
        ],
        reponse: "Atlantic City",
        nombreDePoint: 3
    },
    {
        id: 17,
        question: "Qui est l’interprète du tube « I believe i can fly » ?",
        choix: [
            "R Kelly",
            "Ben Harper",
            "Chris Brown",
            "Jamiroquai"
        ],
        reponse: "R Kelly",
        nombreDePoint: 2
    },
    {
        id: 18,
        question: "Qui interprète le tube 'Allumer le feu' ?",
        choix: [
            "Yves Montand",
            "Johnny Hallyday",
            "Dick Rivers",
            "Eddy Mitchell"
        ],
        reponse: "Johnny Hallyday",
        nombreDePoint: 3
    },
    {
        id: 19,
        question: "À quel scientifique fait-on référence quand on évoque la poussée, le levier et la spirale ?",
        choix: [
            "Galilée",
            "Copernic",
            "Hippocrate",
            "Archimède"
        ],
        reponse: "Archimède",
        nombreDePoint: 1
    },
    {
        id: 20,
        question: "Qui a découvert le téléphone ?",
        choix: [
            "Thomas Edison",
            "Thomas Jefferson",
            "Benjamin Franklin",
            "Alexandre Bell"
        ],
        reponse: "Alexandre Bell",
        nombreDePoint: 2
    },
    {
        id: 21,
        question: "De quel État Ouagadougou est-elle la capitale ?",
        choix: ["Du Niger", "Du Burkina Faso", "Du Togo", "Du Burundi"],
        reponse: "Du Burkina Faso",
        nombreDePoint: 1
    },
    {
        id: 22,
        question: "Quelle est la capitale du Zimbabwe ?",
        choix: ["Bamako", "Gaborone", "Lomé", "Harare"],
        reponse: "Harare",
        nombreDePoint: 3
    },
    {
        id: 23,
        question: "Quelle capitale africaine a aussi été capitale de la France libre de 1940 à 1942 ?",
        choix: ["Tunis", "Abidjan", "Brazzaville", "Alger"],
        reponse: "Brazzaville",
        nombreDePoint: 3
    },
    {
        id: 24,
        question: "Dans quelle capitale peut-on trouver la mosquée Ibn Touloun ?",
        choix: ["Nouakchott", "N'Djaména", "Khartoum", "Le Caire"],
        reponse: "Le Caire",
        nombreDePoint: 3
    },
    {
        id: 25,
        question: "À qui doit-on la chanson « I Shot the Sheriff » ?",
        choix: ["Jim Morrison", "Eric Clapton", "UB40", "Bob Marley"],
        reponse: "Bob Marley",
        nombreDePoint: 3
    },
    {
        id: 26,
        question: "Pourquoi Addis-Abeba est-elle, d’un certain point de vue, la « capitale » de l’Afrique ?",
        choix: ["C'est la plus grande ville d'Afrique", "Elle accueille le siège de l'Union africaine", "C'est la plus vieille d'Afrique", "Elle accueille les réunions du Conseil africain"],
        reponse: "Elle accueille le siège de l'Union africaine",
        nombreDePoint: 1
    },
    {
        id: 27,
        question: "Depuis les années 2010, Kinshasa est devenue…",
        choix: ["La plus grande ville francophone du monde", "La capitale de la Francophonie (OIF)", "La nouvelle capitale du Soudan du Sud", "La capitale africaine de la sapologie"],
        reponse: "La plus grande ville francophone du monde",
        nombreDePoint: 2
    },
    {
        id: 28,
        question: "Qui est la femme d’Akhénaton, dont les historiens pensent qu’elle a exercé un grand pouvoir ?",
        choix: ["Hatchepsout", "Néfertiti", "Mérytaton", "Cléopâtre VII"],
        reponse: "Néfertiti",
        nombreDePoint: 3
    },
    {
        id: 29,
        question: "Quelle femme Muhammad prend-il comme première épouse, alors qu’elle est âgée de 40 ans et lui 25 ?",
        choix: ["Khadidja", "Safia", "Aïcha", "Fatima"],
        reponse: "Khadidja",
        nombreDePoint: 3
    },
    {
        id: 30,
        question: "Quel célèbre dictateur dirigea l’URSS du milieu des années 1920 à 1953 ?",
        choix: ["Lénine", "Staline", "Trotski", "Molotov"],
        reponse: "Staline",
        nombreDePoint: 1 
    },
    {
        id: 31,
        question: "Dans quel pays peut-on trouver la Catalogne, l’Andalousie et la Castille ?",
        choix: ["L'Italie", "La France", "L'Espagne", "Le Portugal"],
        reponse: "L'Espagne",
        nombreDePoint: 2
    },
    {
        id: 32,
        question: "Qui a dit : « Le sort en est jeté » (Alea jacta est) ?",
        choix: ["Vercingétorix", "César", "Attila", "Auguste"],
        reponse: "César",
        nombreDePoint: 1 
    },
    {
        id: 33,
        question: "Par quel mot désigne-t-on une belle-mère cruelle ?",
        choix: ["Une jocrisse", "Une chenapan", "Une marâtre", "Une godiche"],
        reponse: "Une marâtre",
        nombreDePoint: 1
    },
    {
        id: 34,
        question: "Quel pays européen a été si durement touché par la crise des années 2010 qu’il a été menacé de faillite ?",
        choix: ["L'Irlande", "La Pologne", "La Grèce", "La Hongrie"],
        reponse: "La Grèce",
        nombreDePoint: 3 
    },
    {
        id: 35,
        question: "En combien de temps la Terre tourne-t-elle autour du Soleil ?",
        choix: ["456 jours et demi", "24 H", "365 jours et un quart", "365 jours"],
        reponse: "365 jours et un quart",
        nombreDePoint: 2
    },
    {
        id: 36,
        question: "Quel est l’athlète le plus titré de l’histoire des Jeux Olympiques ?",
        choix: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Michael Johnson"],
        reponse: "Michael Phelps",
        nombreDePoint: 2
    },
    {
        id: 37,
        question: "Quel est le plus grand État du monde ?",
        choix: ["Les Etats-Unis", "La Chine", "Le Canada", "La Russie"],
        reponse: "La Russie",
        nombreDePoint: 1 
    },
    {
        id: 38,
        question: "Quel président succède à Georges Bush père en 1992 ?",
        choix: ["Ronald Reagan", "Lyndon Johnson", "Bill Clinton", "John McCain"],
        reponse: "Bill Clinton",
        nombreDePoint: 1
    },
    {
        id: 39,
        question: "En quelle année Adolf Hitler accède-t-il au pouvoir en Allemagne ?",
        choix: ["1929", "1931", "1933", "1937"],
        reponse: "1933",
        nombreDePoint: 3
    },
    {
        id: 40,
        question: "En 2011, à la suite de quel événement a eu lieu l’accident nucléaire de Fukushima ?",
        choix: ["La dénonciation de son mauvais état", "Une attaque terroriste", "Un séisme et un tsunami", "Une erreur des ingénieurs"],
        reponse: "Un séisme et un tsunami",
        nombreDePoint: 1
    },
    {
        id: 41,
        question: "Quel homme d’État surnommé « Madiba » a été emprisonné 27 ans sur Robben Island ?",
        choix: ["Desmond Tutu", "Martin Luther King", "Gandhi", "Nelson Mandela"],
        reponse: "Nelson Mandela",
        nombreDePoint: 1
    }
];

let ul = document.getElementById('ul');
let btn = document.getElementById('button');
let scoreCard = document.getElementById('scoreCard');
let scoreBox = document.getElementById("scoreBox");
let quizBox = document.getElementById('questionBox');
let op1 = document.getElementById('op1');
let op2 = document.getElementById('op2');
let op3 = document.getElementById('op3');
let op4 = document.getElementById('op4');
let asideElt = document.getElementById("aside");
let chrono = document.getElementById("chronoApp");
let timeOverMessage = document.getElementById("timeOverMessage");
let answerBox = document.getElementById("answerBox");
let answerText = document.getElementById("answerText");
let buttonReponse = document.getElementById("buttonReponse");
let compteur = 5;
let goodAnswer = "";
const questionsNumber = 10;
let jouer = false;

//variables pour le countdown timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;
const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
};
const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

var timerId;
var counter;

var tickAudio = new Audio('https://onlineclock.net/audio/options/marching-robots.mp3');

// Compteur pour le message welcome
function diminuerCompteur() {
    if (compteur > 1) {
        compteur = compteur - 1;
    } else {
        clearInterval(intervalId);
    }
}

// Debut design du chronometre
// Ajout du chrono à la page
chrono.innerHTML = `
        <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
                <path
                    id="base-timer-path-remaining"
                    stroke-dasharray="283"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                    "
                ></path>
                </g>
            </svg>
        <span id="base-timer-label" class="base-timer__label">${formatTime(timeLeft)}</span>
        </div>
`;


function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
}


function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= 20) {
            document.getElementById("base-timer-path-remaining").classList.add(info.color);
            tickAudio.play();
    }
    else if (timeLeft <= alert.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
        document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
        document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
            tickAudio.play();
    } 
}

function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
    const circleDasharray = `${(
        calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
        .getElementById("base-timer-path-remaining")
        .setAttribute("stroke-dasharray", circleDasharray);
}
// Fin design du chronometre

// Controler le décompte des secondes
function start() {
    if (!counter) {
        reset();
    } else {
        startTimer();
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
            pause();
            timeOverMessage.style.display = "block";
            buttonReponse.style.backgroundColor = "#ff6f00";
            buttonReponse.style.boxShadow = "#ff6f00";
            buttonReponse.style.color = "white";
            buttonReponse.disabled = false;
            app.notClickAble();
        }
    }, 1000);
}

function pause() {
    clearInterval(timerInterval);
}

function reset() {
    pause();
    timePassed = 0;
    startTimer();
}

var saveRandomNumber = "";

var app = {
    welcome: function () {
        timeOverMessage.style.display = "none";
        op1.style.display = "none";
        op2.style.display = "none";
        op3.style.display = "none";
        op4.style.display = "none";
        btn.style.display = "none";
        buttonReponse.style.display = "none";
        scoreCard.style.display = "none";
        scoreBox.style.display = "none";
        asideElt.style.display = "none";
        quizBox.innerHTML = "Bienvenue sur MTN TECHNOLOGY ONLINE GAME, la plateforme de jeu de questionnaire du département IT.<br/>" +
            "Amusez-vous Bien !";
    },
    goOn: function () {
        timeOverMessage.style.display = "none";
        quizBox.innerHTML = "<strong>Les questions valent 1, 2 ou 3 points.</strong><br /><br />" +
            "Cliquez sur une case pour choisir votre réponse. Vous disposez de <em><strong>20 secondes</strong></em> pour répondre à chacune des questions.";
        buttonReponse.style.display = "none";
        btn.innerHTML = "Jouer Level 1";
        btn.setAttribute("onclick", "cliquerJouer()");
    },
    play: function () {
        timeOverMessage.style.display = "none";
        op1.style.display = "block";
        op2.style.display = "block";
        op3.style.display = "block";
        op4.style.display = "block";
        scoreBox.style.display = "inline";
        scoreCard.style.display = "inline";
        buttonReponse.style.display = "block";
        buttonReponse.style.backgroundColor = "#eeeeee";
        buttonReponse.style.boxShadow = "0px 3px 0px #eeeeee";
        buttonReponse.style.color = "#9e9e9e";
        buttonReponse.disabled = true;
        btn.innerHTML = "Suivant";
        btn.setAttribute("onclick", "suivant()");
        asideElt.style.display = "flex";
        answerBox.style.display = "none";
    },
    index: 0,
    increment: 0,
    load: function () {
        timeOverMessage.style.display = "none";
        if (this.index <= 20) {
            quizBox.innerHTML = "<h5>Question à " + questionList[this.index].nombreDePoint + " Points.</h5>" +
                questionList[this.index].question;
            
            op1.innerHTML = questionList[this.index].choix[0];
            op2.innerHTML = questionList[this.index].choix[1];
            op3.innerHTML = questionList[this.index].choix[2];
            op4.innerHTML = questionList[this.index].choix[3];
            this.scoreCard();
            start();
        }
        else if (this.index === 21){
            quizBox.innerHTML = "Level 1 terminé......!!!"
            op1.style.display = "none";
            op2.style.display = "none";
            op3.style.display = "none";
            op4.style.display = "none";
            asideElt.style.display = "none";
            btn.innerHTML = "Jouer Level 2";
            buttonReponse.style.display = "none";
        }
        else if (this.index > 21 && this.index <=40) {
            quizBox.innerHTML = "<h5>Question à " + questionList[this.index].nombreDePoint + " Points.</h5>" +
                questionList[this.index].question;
            op1.innerHTML = questionList[this.index].choix[0];
            op2.innerHTML = questionList[this.index].choix[1];
            op3.innerHTML = questionList[this.index].choix[2];
            op4.innerHTML = questionList[this.index].choix[3];
            asideElt.style.display = "flex";
            btn.innerHTML = "Suivant";
            buttonReponse.style.display = "block";
            this.scoreCard();
            start();
        }
        else {
            quizBox.innerHTML = "Jeu terminé......!!!<br>Veuillez fermer cet onglet pour quitter le jeu !"
            op1.style.display = "none";
            op2.style.display = "none";
            op3.style.display = "none";
            op4.style.display = "none";
            asideElt.style.display = "none";
            btn.style.display = "none";
            //btn.innerHTML = "Veuillez fermer cet onglet pour quitter le jeu";
            //btn.setAttribute("type", "submit");
            //btn.setAttribute("onclick", "window.close()");
            buttonReponse.style.display = "none";
           // buttonReponse.setAttribute("onclick", "location.reload()");
        }
    },
    next: function () {
        this.index++;
        reset();
        timeOverMessage.style.display = "none";
        buttonReponse.style.backgroundColor = "#eeeeee";
        buttonReponse.style.boxShadow = "0px 3px 0px #eeeeee";
        buttonReponse.style.color = "#9e9e9e";
        buttonReponse.disabled = true;
        op1.style.display = "block";
        op2.style.display = "block";
        op3.style.display = "block";
        op4.style.display = "block";
        this.load();
    },
    checkAnswer: function (element) {
        if (element.innerHTML === questionList[this.index].reponse.toString()) {
            this.score += questionList[this.index].nombreDePoint;
            element.className = "correct";
            element.innerHTML = "Bonne réponse !";
            this.scoreCard();
        }
        else {
            element.className = "wrong";
            element.innerHTML = "Mauvaise réponse !";
            buttonReponse.style.backgroundColor = "#ff6f00";
            buttonReponse.style.boxShadow = "#ff6f00";
            buttonReponse.style.color = "white";
            buttonReponse.disabled = false;
            //answerBox.style.display = "block";
            //answerText.innerHTML = quizzes[this.nb_alea].reponse.toString().toUpperCase();
            //answerText.style.fontFamily = "Arial, sans-serif";
            //answerText.style.fontSize = "20px";
        }
    },
    notClickAble: function () {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "none";
        }
    },
    clickAble: function () {
        for (let i = 0; i < ul.children.length; i++) {
            ul.children[i].style.pointerEvents = "auto";
            ul.children[i].className = '';
        }
    },
    scoreTotal: function () {
        var scoreTotal = 0;
        for (const quiz of questionList) {
            scoreTotal += quiz.nombreDePoint;
        } 
        return scoreTotal;
    },
    score: 0,
    scoreCard: function () {
        scoreCard.innerHTML = this.score+" / "+this.scoreTotal();
    }
}

window.onload = app.welcome();

var intervalId = setInterval(diminuerCompteur, 1000);

setTimeout(() => {
    quizBox.innerHTML = "<strong>Maximum de points gagnants.</strong><br />" +
        "Vous disposez de 2 niveaux avec 20 questions chacun pour obtenir le maximum de points.";
    btn.style.display = "block";
    buttonReponse.style.display = "none";
    btn.innerHTML = "Continuer";
    btn.setAttribute("onclick", "cliquerContinuer()");
}, 3000);

function cliquerContinuer() {
    app.goOn();
}

function cliquerJouer() {
    app.play();
    app.load();
}

function choose(element) {
    pause();
    app.checkAnswer(element);
    app.notClickAble();
}

function suivant() {
    answerBox.style.display = "none";
    app.next();
    app.clickAble();
    app.increment++;
    console.log(app.increment);
}

function displayAnswer() {
    answerBox.style.display = "block";
    answerText.innerHTML = questionList[app.index].reponse.toUpperCase();
    answerText.style.fontFamily = "Arial, sans-serif";
    answerText.style.fontSize = "20px";
}

function closePage() {
    close();
}

/*
function playAgain() {
    app.load();
}
*/