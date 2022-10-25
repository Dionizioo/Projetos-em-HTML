
function botao(){


    var num = Number(window.prompt("Informe o primeiro valor: "));
    var num1 = Number(window.prompt("Informe o segundo numero: "));

    if(num1>=num){
        document.getElementById("resultado").innerHTML = +num+ " e " +num1+ ".";
    }else{
        document.getElementById("resultado").innerHTML = +num1+ " e " +num+ ".";
    }

}

function botao01(){


    var genero = window.prompt("Informe seu Gênero com [M] Masculino e [F] Feminino ");
    var altura = Number(window.prompt("Informe sua Altura: "));
    var peso;

    if(genero=="M"){
        peso = (72.7*altura)-58;
        document.getElementById("resultado01").innerHTML = "Seu Peso Ideal para seu Gênero escolhido é: "+peso.toFixed(2)+".";

    }else if (genero=="F"){
        peso = (62.1*altura)-44.7;
        document.getElementById("resultado01").innerHTML = "Seu Peso Ideal para seu Gênero escolhido é: "+peso.toFixed(2)+".";
    }
    else{
        window.alert("Letra invalida");
    }
   
}
function botao02(){


    var num1 = window.prompt("Informe o Primeiro numero: ");
    var num2 = window.prompt("Informe o Segundo numero: ");
    var num3 = window.prompt("Informe o Terceiro numero: ");

    var menor = num1;

    if(num2<menor){
        menor=num2;
    }else if (num3<menor){
        menor=num3;
    }
    document.getElementById("resultado02").innerHTML = "O MENOR numero entre os quais digitou é esse: " + menor + ".";

}
function botao03(){

    var num = Number(window.prompt("Informe um numero: "));
    var impar;
    var a;
    
    if(num>=0){
        if(num %2==0){
            impar=num;
            document.getElementById("resultado03").innerHTML = "Esse numero é um valor POSITIVO e PAR";
        }else
        document.getElementById("resultado03").innerHTML ="Esse numero é um valor POSITIVO e IMPAR";
    }else if(num<=0){
        a=Math.abs(num);
        document.getElementById("resultado03").innerHTML ="Esse numero é Negativo e abusoluto será:"+a+".";

    }
    else{
        window.alert("Informe um numero");
    } 
}

function botao04(){

    var num = Number(window.prompt("Informe o numero: "));
    
    if(num %2==0 || num %3 == 0 ){
        document.getElementById("resultado04").innerHTML = "Esse numero é DIVISÍVEL POR 2 e 3";
    }else
    document.getElementById("resultado04").innerHTML = "Esse numero NÃO É DIVISÍVEL POR 2 e 3";

}

function botao05(){

    var num = Number(window.prompt("Informe o numero: "));
    
    if(num %2==0 || num %7 == 0 ){
        document.getElementById("resultado05").innerHTML = "Esse numero é DIVISÍVEL POR 2 e 7";
    }else
    document.getElementById("resultado05").innerHTML = "Esse numero NÃO É DIVISÍVEL POR 2 e 7";

}

function botao06(){


    var num = Number(window.prompt("Informe um numero de 1 a 7: "));

    switch(num){
        case 1:
            document.getElementById("resultado06").innerHTML = "Hoje é DOMINGO"; 
            break;
        case 2:
            document.getElementById("resultado06").innerHTML = "Hoje é SEGUNDA-FEIRA"; 
            break;
        case 3:
            document.getElementById("resultado06").innerHTML = "Hoje é TERÇA-FEIRA"; 
            break;
        case 4:
            document.getElementById("resultado06").innerHTML = "Hoje é QUARTA-FEIRA";
            break;
        case 5:
            document.getElementById("resultado06").innerHTML = "Hoje é QUINTA-FEIRA";
            break;
        case 6:
            document.getElementById("resultado06").innerHTML = "Hoje é SEXTA-FEIRA";
            break;
        case 7:
            document.getElementById("resultado06").innerHTML = "Hoje é SABADO-FEIRA";
            break;
        default:
            document.getElementById("resultado06").innerHTML = "COMANDO ERRADO DIGITE 1 ATÉ 7";
    }
}

function botao07(){

    var num=0;
    var i ;

    for(i = 0; i < 20; i++){
        if(i %2==0){
            num=num+i;
        }
    }document.getElementById("resultado07").innerHTML = "O SOMATORIO DE PARES ENTRE 1 e 20 são esses: " +num+".";
}

function tabuada(){
    var num = parseInt(document.getElementById("num").value);
    var resposta = document.getElementById('resposta');
    var tabuada='';
  
    for(var count=1; count<=10 ; count++)
     tabuada += num+" x "+count+" = "+
                 num*count+"<br />";
    
    resposta.innerHTML = tabuada;
}


function botao09(){

    var num = Number(window.prompt("Informe o numero do FATORIAL: "));
    var fatorial = num;
    var resultado=fatorial;

    for(var i=1;i<fatorial;i++){
        resultado *=i;
        document.getElementById("resultado09").innerHTML = +resultado+".";
    }
}
