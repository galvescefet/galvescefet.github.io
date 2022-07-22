
let num1 = document.getElementById('numero1')
let num2 = document.getElementById('numero2')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    let output = parseInt(num1.value)+parseInt(num2.value);
    resultado.value = output;
})

