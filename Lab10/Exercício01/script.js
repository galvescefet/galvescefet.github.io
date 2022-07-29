btn1 = document.getElementById('btn-1');
btn2 = document.getElementById('btn-2');
btn3 = document.getElementById('btn-3');

function sum(vetor){
    var soma = 0;
    for(var i=0;i<vetor.length;i++){
        soma+=parseInt(vetor[i]);
    }
    return soma;
}
function sumOdds(vetor){
    var soma = 0;
    for(var i=0;i<vetor.length;i++){
        if(parseInt(vetor[i])%2!=0){
            soma+=parseInt(vetor[i]);
        }
    }
    return soma;
}
function product(vetor){
    var produto =1;
    for(var i=0;i<vetor.length;i++){
        produto*=parseInt(vetor[i]);
    }
    return produto;
}



btn1.addEventListener('click',function(){
    var vet = document.getElementById('array-1').value.split(';')
    var resultado = sum(vet)
    document.getElementById('result-1').value = resultado


})

btn2.addEventListener('click',function(){
    var vet = document.getElementById('array-2').value.split(';')
    var resultado = sumOdds(vet)
    document.getElementById('result-2').value = resultado

    
})

btn3.addEventListener('click',function(){
    var vet = document.getElementById('array-3').value.split(';')
    var resultado = product(vet)
    document.getElementById('result-3').value = resultado
    
})
