let question
let answers
let score = 0
let btns = [selectId("btn1"),
selectId("btn2"),
selectId("btn3"),
selectId("btn4")]
let data = readText("questions.json")
let dataQues = JSON.parse(data)
let arrName = []
let arrScore = []
let arrLevel = []


const selectQuestion = (dataQues) =>{
    question = dataQues
    selectId("level").innerHTML = `Nivel: ${question.nivel}`
    selectId("category").innerHTML = question.categoria
    selectId("question").innerHTML = question.pregunta
    selectId("img").setAttribute("src",question.imagen)
    selectId("score").innerHTML=`Puntaje: ${score}`
    randomAnswer(question)
    
    if(question.imagen){
        document.getElementById("img").style.height="200px"
        document.getElementById("img").style.width="100%"
    }else{
        document.getElementById("img").style.width="0px"
        document.getElementById("img").style.height="0px"
    }
    return 
}
const randomAnswer = (question) =>{
    answers = [question.respuesta, 
        question.incorrecta1,
        question.incorrecta2,
        question.incorrecta3]
        answers.sort(()=>Math.random()-0.5)
    selectId("btn1").innerHTML = answers[0]
    selectId("btn2").innerHTML = answers[1]
    selectId("btn3").innerHTML = answers[2]
    selectId("btn4").innerHTML = answers[3]
}
const clickLeave = () => {
    setTimeout(() => {
        let mensaje ="Gracias por jugar, vuelve pronto. \nIngresa tu Nickname"
        addPlayer(score, mensaje)
        score =0
        restart()
        level(score)
    }, 300)
}
const clickBtn = (i) => {
    if(answers[i] === question.respuesta){
        btns[i].style.background = "green"
        score +=100
    }else if(answers[i] !== question.respuesta){
        btns[i].style.background = "pink"
        setTimeout(() => {
            let mensaje ="PERDISTE!!  Sigue jugando \nIngresa tu Nickname"
            addPlayer(score,mensaje)
            score =0
        }, 3000)
    }
     setTimeout(() => {
         restart()
         level(score)
     }, 3000)
}

const restart = () => {
    for (const btn of btns) {
        btn.style.background = "white"
      }
}

if(localStorage.getItem('pScore') !== null){
    arrName = JSON.parse(localStorage.getItem('pNames'))
    arrLevel = JSON.parse(localStorage.getItem('pLevel'))
    arrScore = JSON.parse(localStorage.getItem('pScore'))
}


const addPlayer = (score, mensaje) =>{
    let name = window.prompt(mensaje)
    if(name === null || name === ''){
        score =0
        restart()
        level(score)
    }else{
    arrName.push(name)
    arrScore.push(score)
    arrLevel.push(question.nivel)
    localStorage.setItem('pNames',JSON.stringify(arrName))
    localStorage.setItem('pScore',JSON.stringify(arrScore))
    localStorage.setItem('pLevel',JSON.stringify(arrLevel))
    fillTable()
    }
}

const level = (score) => {
    let n = Math.floor(Math.random()*15)
    if(score>=0 & score<500){
        selectQuestion(dataQues[0][n]) 
    }else if(score>=500 & score<1000){
        selectQuestion(dataQues[1][n]) 
    }else if(score>=1000 & score<1500){
        selectQuestion(dataQues[2][n]) 
    }else if(score>=1500 & score<2000){
        selectQuestion(dataQues[3][n]) 
    }else if(score>=2000 & score<2500){
        selectQuestion(dataQues[4][n]) 
    }else if(score===2500){
        let mensaje ="Felicidades ganaste!!!, eres muy inteligente \nIngresa tu Nickname"
        addPlayer(score, mensaje)
        score =0
        restart()
        level(score)
    }
}
level(score)


function selectId(id) {
    return document.getElementById(id)
  }
  
function readText(localRoute) {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", localRoute, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
      texto = xmlhttp.responseText;
    }
    return texto;
  }