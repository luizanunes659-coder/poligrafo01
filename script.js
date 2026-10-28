let perguntas = [
    "Você conhecia a vítima?",
    "Você já esteve perto do local do crime?",
    "Você morava perto da vítima?",
    "Você devia para a vítima?",
    "Você já trabalhou com a vítima?",
    "Você discutiu com a vítima recentemente?",
    "Você esteve com a vítima no último mês?",
    "Você tem antecedente criminal?",
    "Você viu a vítima no dia do crime?",
    "Você mentiu para a polícia?"
];
 
let respostas = []; 
let atual = 0; 
 
mostrarPergunta(); 
 
function mostrarPergunta() { 
    document.getElementById("pergunta").innerHTML = perguntas[atual]; 
    document.getElementById("numero").innerHTML = "Pergunta " + (atual + 1) + " de " + perguntas.length;
} 
 
function responder() { 
 
    let resposta = document.getElementById("resposta").value; 
 
    if (resposta == "") { 
        alert("Escolha uma resposta!"); 
        return; 
    } 
 
    respostas[atual] = resposta; 
    atual++; 
 
    document.getElementById("resposta").value = ""; 
 
    if (atual < perguntas.length) { 
        mostrarPergunta(); 
    } else { 
        resultado(); 
    } 
} 
 
function resultado() { 

    let pontos = respostas.filter(resposta => resposta === "sim").length;
    let classificacao = "";

    if (pontos < 5) {
        classificacao = "inocente";
    } else if (pontos === 5) {
        classificacao = "suspeito(a)";
    } else if (pontos <= 8) {
        classificacao = "cúmplice";
    } else {
        classificacao = "culpado(a)";
    }

    let mensagem = "Você teve " + pontos + " respostas sim, por isso foi considerado(a) " + classificacao + ".";

    document.getElementById("pergunta").innerHTML = mensagem; 
    document.getElementById("numero").innerHTML = "Fim do interrogatório"; 
 
    document.getElementById("resposta").style.display = "none"; 
    document.querySelector("button").style.display = "none"; 
    document.getElementById("reiniciar").style.display = "inline-block"; 
} 
 
function reiniciarJogo() { 
    location.reload(); 
} 