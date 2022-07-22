function pares1000(){
    var lim = 1000;
    var soma = 0;
    for(var i=0;i<=lim;i+=2){
        soma += i;
    }
    document.body.insertAdjacentText('afterend','Soma dos 1000 primeiros pares: '+soma);
}
