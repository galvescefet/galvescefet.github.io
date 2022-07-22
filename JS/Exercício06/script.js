let num = document.getElementById('numero')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    let distribuidor = parseFloat(num.value) *0.28;
    let imposto = parseFloat(num.value) *0.45;
    resultado.value = (parseFloat(num.value)+distribuidor+imposto).toFixed(2);
})