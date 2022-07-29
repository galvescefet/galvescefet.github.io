btn1 = document.getElementById('btn-1');

function primos(vetor){
    var vetorResultado= [];
    if(vetor.length>1){
        var check = false;
        for(var i=parseInt(vetor[0]);i<=parseInt(vetor[1]);i++){
            for(var f=2;f<i;f++){
                if(i%f == 0){
                    //não-primo
                    check=true;
                    break;
                }
            }
            if(!check){
                vetorResultado.push(i);
                
            }
            check=false;
            
        }
        console.log('teste')
        return vetorResultado;
    }
    else{
        var check = false;
        for(var i=2;i>0;i++){
            for(var f=2;f<i;f++){
                if(i%f == 0){
                    //não-primo
                    check=true;
                    break;
                }
            }
            if(!check){
                vetorResultado.push(i);
                if(vetorResultado.length==parseInt(vetor)){
                    break;
                }
                
            }
            check=false;
            
        }
        return vetorResultado;
    }
}



btn1.addEventListener('click',function(){
    var vet = document.getElementById('array-1').value.split(',')
    var resultado = primos(vet)
    document.getElementById('result-1').value = resultado


})
