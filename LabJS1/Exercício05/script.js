function primos1000(){
    var check=false;
    for(var i=2;i<=1000;i++){
        for(var f=2;f<i;f++){
            if(i%f == 0){
                //não-primo
                check=true;
                break;
            }
        }
        if(!check){
            document.body.insertAdjacentText('afterend',i);
            document.body.insertAdjacentHTML('afterend','<br>');
            
        }
        check=false;
        
    }
}