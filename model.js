function carregar(){
   var msg  = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 13
msg.innerHTML = `Agora são exatamente ${hora} horas`

if (hora >= 0 && hora < 12) {
    imagem.src = 'fotos_js/manha.png'
    document.body.style.background = '#e6ffff'

}else if (hora >= 12 && hora < 18){
    imagem.src = 'fotos_js/tarde.png'
    document.body.style.background = '#ffa31a'
}else{
    imagem.src = 'fotos_js/noite.png'
    document.body.style.background = 'black'
}
}