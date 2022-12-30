var agora = new Date()
var diaSemana = agora.getDay()
diaSemana 
/*
   Domingo = 0
   Segunda = 1
   Terça   = 2
   Quarta  = 3
   Quinta  = 4
   Sexta   = 5
   Sábado  = 6
*/
//console.log(diaSemana)
// Não esquecer de colocar o BREEEAK!!!! KKKKKKKK

switch(diaSemana){

   case 0:
      console.log('domingo')
      break

      case 1:
         console.log('Segunda Feira')
         break

         case 2:
            console.log('Teça Feira')
            break

            case 3:
               console.log('Quarta Feira')
               break

               case 4:
                  console.log('Quinta Feira')
                  break

                  case 5:
                     console.log('Sexta Feira')
                     break 

                     case 6:
                      console.log('Sábado')
                      break 

                      default:
                        console.log('[ERRO] Dia Inválido')
                        break
}