let num = document.getElementById('num')
let vendas = document.getElementById('vendas')
let salario = document.getElementById('salario')
let carro = document.getElementById('carro')


let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')

//salario fixo + comissao fixa + 5% do valor das vendas
botao.addEventListener('click',function(){
    resultado.value = parseInt(num.value)*parseFloat(carro.value) + parseFloat(vendas.value)*0.05 + parseFloat(salario.value);
    
})