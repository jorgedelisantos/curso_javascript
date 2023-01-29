
                                var numero = document.getElementById('form1')
                                let lista  = document.querySelector ('select#selec1')
                                var resultado = document.getElementById('resultado')
                                let valores = []

                                function éumNumero(numero){
                                if (Number(numero) >= 0 &&  Number(numero) <= 100){
                                    return true
                                }else{
                                    return false
                                }
                                }

                                function noSelec1(numero, lista){
                                if (lista.indexOf(Number(numero)) != -1){
                                    return true
                                }else{
                                    return false
                                }
                                }

                                function adicionar(){
                                    if (éumNumero(numero.value) && !noSelec1(numero.value, valores)){
                                        valores.push(Number(numero.value)) 

                                        var item = document.createElement('option') 

                                        item.text = `Dígito ${numero.value} Adicionado`
                                        lista.appendChild(item)
                                        resultado.innerHTML = ''// faz limpar a parte finalizada
                                    }else{
                                        window.alert('valor invalido ou já se encontra na lista')
                                    }
                                    numero.value = ''
                                    numero.focus()
                                }

                                function finalizar(){
                                    if(valores.length == 0){
                                        window.alert('Adicione valores antes de finalizar!')

                                    }else{
                                    var total = valores.length
                                    let maior = valores[0]
                                    let menor = valores[0]
                                    let soma  = 0
                                    let media = 0 

                                    for ( let posicao in valores){
                                        soma += valores[posicao]

                                        if (valores[posicao] > maior)
                                        maior = valores[posicao]

                                        if (valores[posicao] < menor)
                                        menor = valores[posicao]
                                    } 
                                        media = soma / total
                                    resultado.innerHTML = ''//faz limpar numaros adionados
                                    resultado.innerHTML += `<p> Ao todo temos ${total} números cadastrados.</p>`
                                    resultado.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
                                    resultado.innerHTML += `<p> O menor numero informado foi ${menor}.</p>`
                                    resultado.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`
                                    resultado.innerHTML += `<p> A media dos valores digitados é ${media}.</p>`
                                    }   
                                
                                }