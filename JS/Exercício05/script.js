let num = document.getElementById('numero')
let reaj = document.getElementById('reajuste')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    resultado.value = parseFloat(num.value)+(parseFloat(num.value)*(parseFloat(reaj.value)/100)).toFixed(2);
})