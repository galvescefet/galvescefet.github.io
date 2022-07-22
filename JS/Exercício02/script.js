let num1 = document.getElementById('numero1')
let num2 = document.getElementById('numero2')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    if(parseInt(num1.value)>parseInt(num2.value)){
        resultado.value = 'Maior: Primeiro numero';
    }
    else if(parseInt(num1.value)<parseInt(num2.value)){
        resultado.value = 'Maior: Segundo numero';
    }
    else{
        resultado.value = 'Numeros equilaventes';
    }
})