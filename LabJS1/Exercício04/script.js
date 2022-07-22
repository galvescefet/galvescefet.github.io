function fibonacci100(){
    var t1 = 0, t2 = 1, proximoN;
    
    document.body.insertAdjacentText('afterend',t2);
    document.body.insertAdjacentHTML('afterend','<br>');

    proximoN = t1+t2;

    var cont = 2;
    while (cont <= 100){
        document.body.insertAdjacentText('afterend',proximoN);
        document.body.insertAdjacentHTML('afterend','<br>');

        t1 = t2;
        t2 = proximoN;
        proximoN = t1+t2;
        cont++;
    }

}