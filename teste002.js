var agora = new Date()
var diaSemana = agora.getDay()
/*
   Domingo = 0
   Segunda = 1
   Terça   = 2
   Quarta  = 3
   Quinta  = 4
   Sexta   = 5
*/
console.log(diaSemana)

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
}