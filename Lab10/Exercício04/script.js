btn1 = document.getElementById('btn-1');
var nota100 = document.getElementById('nota100')
var nota50 = document.getElementById('nota50')
var nota20 = document.getElementById('nota20')
var nota10 = document.getElementById('nota10')
var nota5 = document.getElementById('nota5')
var nota2 = document.getElementById('nota2')


function saque(n){
    if(n-100>=0){
        nota100.innerHTML=parseInt(nota100.innerHTML)+1;
        saque(n-100)
    }
    else if(n-50>=0){
        nota50.innerHTML=parseInt(nota50.innerHTML)+1;
        saque(n-50)
    }
    else if(n-20>=0){
        nota20.innerHTML=parseInt(nota20.innerHTML)+1;
        saque(n-20)
    }
    else if(n-10>=0){
        nota10.innerHTML=parseInt(nota10.innerHTML)+1;
        saque(n-10)
    }
    else if(n-5>=0){
        nota5.innerHTML=parseInt(nota5.innerHTML)+1;
        saque(n-5)
    }
    else if(n-2>=0){
        nota2.innerHTML=parseInt(nota2.innerHTML)+1;
        saque(n-2)
    }


}


btn1.addEventListener('click',function(){
    var numero = parseInt(document.getElementById('input').value);
    nota100.innerHTML=0;nota50.innerHTML=0;nota20.innerHTML=0;nota10.innerHTML=0;nota5.innerHTML=0;nota2.innerHTML=0;
    saque(numero)


})
