let altura = 0;
let largura = 0;
let vidas = 1;
let time = 10;

//adiciona o nivel e seu tempo 
let criaTempoMosquito = 1500;
let nivel = window.location.search;
   nivel =  nivel.replace('?', '');

if(nivel ==='normal'){
    criaTempoMosquito = 1500;
} else if(nivel ==='dificil'){
    criaTempoMosquito= 1000;
} else if(nivel ==='chuckNorris'){
    criaTempoMosquito = 750;
}

//Pega as dimensões da tela
function ajustaTamanhoPalcoJogo(){   
    altura = window.innerHeight;
    largura = window.innerWidth;
}    

ajustaTamanhoPalcoJogo();

// cria o cronometro do jogo
let cronometro = setInterval(function(){
    time -= 1;
    if( time < 0){
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else{
    document.getElementById('cronometro').innerHTML = time;
    }
}, 1000)

//coloca os mosquitos em campos aleatorios
function positionRandom(){

    //remover o mosquito anterior(caso exista)
    if(document.getElementById('mosquito')){   
        document.getElementById('mosquito').remove()
    if( vidas > 3){
        window.location.href = 'game_over.html';
    } else{
        document.getElementById('v' + vidas).src =' imagens/coracao_vazio.png'
         vidas++
        }
    }
    
    let positionX =  Math.floor(Math.random() * largura) - 90
    let positionY =  Math.floor(Math.random() * altura) - 90
    let tipoMosquito = Math.floor(Math.random()* 3);
    const mosquito = document.createElement('img')

    positionX =  positionX < 0 ? 0: positionX
    positionY =  positionY < 0 ? 0: positionY

    console.log(positionX, positionY);

    //criar o elemento html

        mosquito.src = 'imagens/mosca.png'
        mosquito.className =  'mosquito'+ tipoMosquito+ ' '+ ladoAouB()
        mosquito.style.left= positionX + 'px'
        mosquito.style.top= positionY + 'px'
        mosquito.style.position= 'absolute'
        mosquito.id= 'mosquito'
        mosquito.onclick = function(){
            this.remove()
        }
            document.body.appendChild(mosquito)
}    

//Investe a imagem do mosquito
function ladoAouB(){
    let tipoMosquito = Math.floor(Math.random()* 2);
   
    switch(tipoMosquito){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}