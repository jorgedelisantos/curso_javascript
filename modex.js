function contar(){
    var inicio = document.getElementById('txti')
    var fim    = document.getElementById('txtf')
    var passo  = document.getElementById('txtp')
    var res    = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'impossivel contar'
        //window.alert('[ERRO] dados incompletos')
    } else {
        res.innerHTML = 'CONTANDO:<br>'
        var inicio = Number (inicio.value)
        var fim    = Number (fim.value)
        var passo  = Number (passo.value)

         if ( passo <= 0){
            window.alert(' Passo invalido! considerando PASSO 1')
            passo = 1
         }

        if ( inicio < fim){
            //contagem progressiva
             for(contar = inicio ; contar <= fim ; contar += passo){
            res.innerHTML += `\u{1f449} ${contar} `
        }
       
      }else{
        // contagem regressiva
        for(contar = inicio ; contar >= fim ; contar -= passo){
            res.innerHTML += `\u{1f449}${contar}`
        }
       
      } 
         res.innerHTML += `\u{1f3c1}`
    }
}
