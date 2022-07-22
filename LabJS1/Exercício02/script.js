

function plot4(){
    var valor = 4;
    var pot = 30;
    for(var i=1;i<=pot;i++){
        var calc = Math.pow(valor,i);
        document.body.insertAdjacentText('afterend','4'+' '+'^'+' '+i+' = '+calc);
        document.body.insertAdjacentHTML('afterend','<br>')
    }
}
