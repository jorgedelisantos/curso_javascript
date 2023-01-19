function tabuada(){
    var numero = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')
    if (numero.value.length == 0){
    window.alert('Por favor digite um numero!')
    }else{
        var numero = Number(numero.value)
        var contador = 1
        tabuada.innerHTML = "" //string vazia limpa o texto
    }while(contador <= 10){
      var item = document.createElement('option')
      item.text =` ${numero} x ${contador} = ${numero*contador}`
      item.value = `tabuada ${contador}`

      tabuada.appendChild(item)
      contador++
    }
}