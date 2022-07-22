let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')


let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')

botao.addEventListener('click',function(){
    resultado.value = (parseFloat(nota1.value)*2 + parseFloat(nota2.value)*3 + parseFloat(nota3.value)*5)/10;
})