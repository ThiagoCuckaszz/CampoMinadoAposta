let caixa = 1000;
let ganhoTotal = 0;
let numSorteados = []
let caixaEl = document.getElementById("caixa");
let aposta = Number(document.getElementById("aposta").value);
let apostafeita = false;

function atualizarCaixa(){
    caixaEl.innerHTML = "Valor Caixa: R$" + caixa.toFixed(2);
}

function apostar(){
    if (apostafeita == false){
        let aposta = Number(document.getElementById("aposta").value);
    caixa = caixa - aposta;
    apostafeita = true;
    } else
    return
}
    
function verificarAposta(){
    if (aposta > caixa){
        alert("lokio?")
        
    }else
    return
}

function somarGanho(){
    let aposta = Number(document.getElementById("aposta").value);
    let ganhohtml = document.getElementById("ganho");
    let ganho = aposta * 1.5;
    ganhoTotal += ganho;
    ganhohtml.innerHTML = `Valor Acumulado R$${ganhoTotal.toFixed(2)}`
}


function livre() {
    verificarAposta();
    corLivre(this);
    apostar(); 
    somarGanho();
    atualizarCaixa();
    desativarBotao(this);
}


function bomba() {
    let ganhohtml = document.getElementById("ganho");
    ganhoTotal = 0;
    aposta.value = ""
    ganhohtml.innerHTML = `Valor Acumulado R$${ganhoTotal.toFixed(2)}`
    
    corBomba(this);
    apostar();
    bloquearBotoes();
    setTimeout(resetar, 2000);
    setTimeout(ativarBotoes, 2000);
    atualizarCaixa();
    desativarBotao(this);
}

function bloquearBotoes() {
    var botoes = document.querySelectorAll('.botoes');
    for (var i = 0; i < botoes.length; i++) {
      botoes[i].disabled = true;
    }
  }
  
  function ativarBotoes() {
    var botoes = document.getElementsByClassName("botoes");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].disabled = false;
    }
}  

function desativarBotao(botao) {
    botao.disabled = true;
}

function retirar(){
    caixa = caixa+ganhoTotal;
    
    atualizarCaixa();
    ativarBotoes();
    resetar();
}

function corBomba(botao) {
    botao.style.backgroundColor = 'red';
}
  
  function corLivre(botao) {
    botao.style.backgroundColor = 'green';
}

function verificarId(botao) {
    var idCelula = botao.parentNode.id;
    return idCelula
}

function sorteio(){ 
    var numAleatorio; 12
    do{
        numAleatorio = Math.floor(Math.random() * 25) + 1;
    }while (numSorteados.includes(numAleatorio));
    
    if (numAleatorio < 21) {
        
        botao.style.backgroundColor = "rgb(47,69,83)";
        return livre;
    } else {

        botao.style.backgroundColor = "rgb(47,69,83)";
        return bomba;
    }
}

function resetar(){
    for (let i = 1; i < 6; i++){
        for(let j = 1; j< 6; j++){
            var botao = document.getElementById(`${i}x${j}`).firstChild;
            botao.style.backgroundColor = "rgb(47,69,83)";
            botao.onclick = sorteio()
        }
    }
    ganhoTotal = 0;
    apostafeita = false;
    document.getElementById("ganho").innerHTML = `Valor Acumulado R$ ${ganhoTotal.toFixed(2)}`;
}

for (let i = 1; i < 6; i++){
    for(let j = 1; j< 6; j++){
        var botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'botoes'

        var container = document.getElementById(`${i}x${j}`);
        container.appendChild(botao);
        
        
        botao.onclick = sorteio();
               
        
    }
}
atualizarCaixa();
