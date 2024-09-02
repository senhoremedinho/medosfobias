const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você tem medo da inteligencia artificial?",
        alternativas: [
            { 
             texto: "sim, ela tira meu sono"
             afirmacao: "afirmacao"
            },
            { 
                texto: "não, coisa boba"
                afirmacao: "afirmacao"
               },
              
            
        ]
    },
    {
        enunciado: "chatgpt é uma boa influência para a sociedade atual?",
        alternativas: [

            "sim, porque esta desenvolvendo a mente dos jovens",
            "não, porque facilita a cola nas provas"
        ]
    },
    {
        enunciado: "a internet afeta positivamente a mente das nossas crianças?",
        alternativas: [
            "sim, pois ajuda a educar",
            "não, porque a internet leva a caminhos errados"
        ]
    },
    {
        enunciado: "a internet ajuda na comunicaçâo?",
        alternativas: [
            "sim, porque possibilita a comunicação em longa distância",
            "não, porque evita o contato pessoal com as outras pessoas"
        ]
    },
    {
        enunciado: "a tecnologia dominará o mundo?",
        alternativas: [
            "sim, cada vez estamos mais dependentes dela",
            "não, estamos cada vez mais se conectando com a natureza"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
}
}
mostraPergunta();