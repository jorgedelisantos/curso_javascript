function verificar(){
var data = new Date()
var ano = data.getFullYear()
var forano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if ( forano.value.length == 0 || forano.value > ano){
    window.alert ('[ERRO]Verique os dados e tente outra vez')
}else{
     var formsex = document.getElementsByName('radsex')
     var idade = ano - Number(forano.value)
     var genero = ''

     var img = document.createElement('img')
     img.setAttribute('id','foto')

     if(formsex[0].checked){
        genero = 'homem'
        if (idade >= 0 && idade < 10){
          //criança
          img.setAttribute('src','/fotos_js/idadecrianca.png')
        }else if(idade < 30){
          //jovem
          img.setAttribute('src','/fotos_js/idadejovemhomem.jpg')
        }else if(idade < 40){
            //adulto
            img.setAttribute('src','/fotos_js/idadeadultohomem.png')
        }else{
            //idoso
            img.setAttribute('src','/fotos_js/idadeidoso.jpg')
        }
     }else if(formsex[1].checked){
        genero = 'mulher'
        if(idade >= 0 && idade < 10){
            //criança
        }else if(idade > 21){
            //jovem
        }else if(idade > 50){
            //adulto
        }else{
            //idoso
        }
     }
     res.innerHTML =  `detectamos ${genero} com ${idade} anos`
     res.appendChild(img)
}
}