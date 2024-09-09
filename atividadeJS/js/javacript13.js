alert("Progama calculo de area geometrica")

let opcao = prompt("Digite o numero da figura geometrica :\n 1.Triangulo \n 2.Quadrado\n 3.Retangulo\n 4.Circulo ")
 
if (opcao == 1){
    let base = prompt ("Digite o valor da base ")
    let altura = prompt ("Digite o valor da altura ")
    let area = base * altura 
    alert ("O valor do triangulo é " + area)
}

else if (opcao == 2){
    let lado = prompt ("Digite o valor do lado do quadrado")
    let area = lado * lado 
    alert ("O valor do quadrado é " + area)
}

else if(opcao == 3){
    let base = prompt ("Digite o valor da base do retangulo")
    let lado = prompt ("Digite o valor do lado do retangulo")
    let area = base * lado 
    alert ("O valor do retangulo é " + area)
}
 
else if (opcao == 4){
    let raio = parseFloat(prompt("Digite o valor do raio"))
    let area = 3.14 * (raio * raio ) 
    alert ("O valor do circulo é " + area)
}
