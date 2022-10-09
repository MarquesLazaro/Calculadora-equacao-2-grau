let valorA,valorB,valorC,delta,x1,x2

function extraiValores(){
    let valores = document.querySelectorAll('.valor')

    valorA = valores[0].value
    valorB = valores[1].value
    valorC = valores[2].value
}

function calculaDelta(){
    delta = Math.pow(valorB, 2) - 4 * valorA * valorC
}

function calculaRaizes(){
    if(delta >= 0){
        x1 = (-1 * valorB - Math.sqrt(delta)) / (2 * valorA)
        x2 = (-1 * valorB + Math.sqrt(delta)) / (2 * valorA)
    }
    else{
        x1 = x2 = "O valor não é um número real!"
    }
}

function escreveValores(){
    document.querySelector('#delta').innerHTML += delta
    document.querySelector('#x1').innerHTML += x1
    document.querySelector('#x2').innerHTML += x2
}

function limpar(){
    document.querySelector('#delta').innerHTML = 'Delta: '
    document.querySelector('#x1').innerHTML = 'x1: '
    document.querySelector('#x2').innerHTML = 'x2: ' 
}

function calcular(){
    limpar()
    extraiValores()
    calculaDelta()
    calculaRaizes()
    escreveValores()
}