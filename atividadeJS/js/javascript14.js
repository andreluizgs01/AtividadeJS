let preco = parseFloat (prompt("Digite o valor do produto"))
let desconto = parseFloat (prompt("Digite o valor do desconto"))
let novoValor = preco - (desconto/100*preco)
alert ("O novo preço corresponde a: R$ " + novoValor)
if (novoValor > 90){
    alert("A compra pode ser dividida em ate 3x")
}