let num1 = document.getElementById('numero1')
let num2 = document.getElementById('numero2')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    let hipo = Math.sqrt(Math.pow(parseInt(num1.value),2)+Math.pow(parseInt(num2.value),2));
    resultado.value = hipo;
})