function carregar(){
   var msg  = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = ?
msg.innerHTML = `Agora são exatamente ${hora} horas`

if (hora >= 0 && hora < 12) {
    imagem.src = 'fotos_js/manha.png'

}else if (hora >= 12 && hora < 18){
    imagem.src = 'fotos_js/tarde.png'

}else{
    imagem.src = 'fotos_js/noite.png'
}
}