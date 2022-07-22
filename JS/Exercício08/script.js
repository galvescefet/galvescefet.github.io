

let celsius = document.getElementById('celsius')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    let output = parseFloat((celsius.value) - 32) * 5/9;
    resultado.value = parseFloat(output.toFixed(2));
    
})

