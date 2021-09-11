const questionBank = async (n) => {
    const data = await fetch ("questions.json")
    const result = await data.json()
    
    const question = result[n]
    selectId("category").innerHTML = question.categoria
    selectId("question").innerHTML = question.pregunta
    selectId("img").setAttribute("src",question.imagen)
    selectId("btn1").innerHTML = question.respuesta
    selectId("btn2").innerHTML = question.incorrecta1
    selectId("btn3").innerHTML = question.incorrecta2
    selectId("btn4").innerHTML = question.incorrecta3
    if(question.imagen){
        document.getElementById("img").style.height="200px"
        document.getElementById("img").style.width="100%"
    }else{
        document.getElementById("img").style.width="0px"
        document.getElementById("img").style.height="0px"
    }
}
const  randomQuestion = () => {
    let n = Math.floor(Math.random()*5)
    console.log("pregunta ", n)
    questionBank(n)
}
randomQuestion()

const selectId = (id) => {
    return document.getElementById(id)
}
const style = (id) => {
    return selectId(id).style
}

const readText = (localRoute) =>{
    let texto = null
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.open("GET", localRoute, false)
    xmlhttp.send()
    if(xmlhttp.status == 200) {
        texto = xmlhttp.responseText
    }
    return texto
}