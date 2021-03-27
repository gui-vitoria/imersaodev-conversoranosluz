//Criando variável para o usuário decidir os 2 valores
var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

//Perguntando ao usuário qual a operação fazer
var operacao = prompt("Escolha a operação desejada: \n1 - Multiplicação\n2 - Divisão\n3 - Soma\n4 - Substração")

if(operacao == 1){
  //Operação a ser feita exibida em todos os ifs
  var resultado = primeiroValor * segundoValor
  
  //Comando para ler as variáveis para serem escritas   na tela entre o <h2> e </h2> do html que se repetirá   em todos os ifs
  document.write("<h2>", primeiroValor, " x ",           segundoValor, " = ", resultado, "</h2>")
  
}else if(operacao == 2){
  var resultado = primeiroValor / segundoValor
  
  document.write("<h2>", primeiroValor, " / ",           segundoValor, " = ", resultado, "</h2>")
    
}else if(operacao == 3){
  var resultado = primeiroValor + segundoValor
  
  document.write("<h2>", primeiroValor, " + ",           segundoValor, " = ", resultado, "</h2>")
    
}else if(operacao == 4){
  var resultado = primeiroValor - segundoValor  
  
  document.write("<h2>", primeiroValor, " - ",           segundoValor, " = ", resultado, "</h2>")  
}else{
  document.write("<h2>", "operação ERROR", "</h2>")   
}
