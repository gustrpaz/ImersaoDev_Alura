//  Scripts para o funcionamento do Jogo:

var RandomNum = parseInt(Math.random() * (1001) + 1);
var QtdChute = 0;
var LimiteChute = 11;

function discoverNumber() {
    
   Clear()

   var SecretNum;
   var ResponseArea = document.getElementById('response');
   console.log(RandomNum)

    //  Enquanto o Limite de chutes for maior que 0 ou o Número secreto for diferente do Número randomico
   while (LimiteChute > 0 && SecretNum != RandomNum) {

       SecretNum = document.getElementById('value').value;
       
    //  Descarta o número zero do Jogo:
       if (SecretNum == 0) {
        ResponseArea.innerHTML = ResponseArea.innerHTML +
        `<span> Não há possibilidade de ser número 0</span>` 
        break;
       }

       QtdChute = QtdChute + 1;
       LimiteChute = LimiteChute - 1;
    
       if (SecretNum == RandomNum) {
        ResponseArea.innerHTML = ResponseArea.innerHTML +
            `<span> Você acertou o número da sorte ${SecretNum}!</span>` + 
            `<span> Na ${QtdChute}º tentativa</span>`
            break;
    }
           if (SecretNum < RandomNum) {
       
            ResponseArea.innerHTML = ResponseArea.innerHTML +
                `<span> O número ${SecretNum} é menor do que o número da sorte </span><br>`+ 
                `<span> Chances: ${LimiteChute}</span>`
                break;
        }
        else if (SecretNum > RandomNum) {
          
            ResponseArea.innerHTML = ResponseArea.innerHTML +
                `<span> O número ${SecretNum} é maior do que o número da sorte </span>`+ 
                `<span> Chances: ${LimiteChute}</span>`
                break;
        }
    }
   
   if(LimiteChute == 0){
       Clear()
       ResponseArea.innerHTML = ResponseArea.innerHTML +
       `<span> Acabaram as suas chances. Sinto muito</span>` +
       `<span> O número da sorte era ${RandomNum}</span>`
   }
          
}

function Clear() {
    var cleaning = document.getElementById("response");
    cleaning.innerHTML = "";
}

    //  Explicação do código:

    // Descarta a possiilidade do número randomico ser 0
    // var RandomNum = parseInt(Math.random() * (1001) + 1);


    // Declara que o número secreto será inserido pelo usuário
    // SecretNum = document.getElementById('value').value;


    // Definir que o ResponseArea é a <div> do HTML
    //   var ResponseArea = document.getElementById('response');


    // Limpa a div response
    // var cleaning = document.getElementById("response");
    // cleaning.innerHTML = "";


    // Seleciona um número randomico 
    // var RandomNum = parseInt(Math.random() * 1001);

   








