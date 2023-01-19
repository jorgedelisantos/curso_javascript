function comecar(){
    var inicio = document.getElementById('txtpon')
    var alto  = document.getElementById ('txtalt')
    var baixo = document.getElementById ('txtbaix')
    var res  = document.getElementById('trico')
    if (inicio.value.length == 0 || alto.value.length == 0 || baixo.value.length == 0){
     // window.alert('[ERRO]digite seus dados')
    }else{
        res.innerHTML = 'vamos começar:'
        var inicio = Number (inicio.value)
        var alto   = Number (alto.value)
        var baixo  = Number (baixo.value)
    } if (inicio <= 1000){
    window.alert('insuficiente')
     }if(inicio <= alto){
        for (comecar = inicio ; comecar >= alto ; comecar += alto)}

     
    }  