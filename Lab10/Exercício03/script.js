btn1 = document.getElementById('btn-1');



function romano(num,rom){
    console.log(num)
    console.log(rom)
    
    if(num-1000>=0){
        rom+='M'
        return romano(num-1000,rom)
    }
    else if(num-900>=0){
        rom+='CM'
        return romano(num-900,rom)
    }

    if(num-500>=0){
        rom+='D'
        return romano(num-500,rom)
    }
    else if(num-400>=0){
        rom+='CD'
        return romano(num-400,rom)
    }

    if(num-100>=0){
        rom+='C'
        return romano(num-100,rom)
    }
    else if(num-90>=0){
        rom+='XC'
        return romano(num-90,rom)
    }

    if(num-50>=0){
        rom+='L'
        return romano(num-50,rom)
    }
    else if(num-40>=0){
        rom+='XL'
        return romano(num-40,rom)
    }

    if(num-10>=0){
        rom+='X'
        return romano(num-10,rom)
    }
    else if(num-9>=0){
        rom+='IX'
        return romano(num-9,rom)
    }

    if(num-5>=0){
        rom+='V'
        return romano(num-5,rom)
    }
    else if(num-4>=0){
        rom+='IV'
        return romano(num-4,rom)
    }

    if(num-1>=0){
        rom+='I'
        return romano(num-1,rom)
    }
    
    return rom;

}



btn1.addEventListener('click',function(){
    var numero = parseInt(document.getElementById('input').value);
    var algRom = ''
    var roman = romano(numero,algRom)
    document.getElementById('result-1').value = roman


})
