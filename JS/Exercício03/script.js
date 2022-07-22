let num = document.getElementById('numero')
let resultado = document.getElementById('resultado')
let botao = document.getElementById('botao')


botao.addEventListener('click',function(){
    for(var i=2;i<parseInt(num.value);i++){
        if(parseInt(num.value)%i == 0){
            resultado.value = 'Numero não é primo';
            return;
        }
        
    }
    resultado.value = 'Numero primo';
})