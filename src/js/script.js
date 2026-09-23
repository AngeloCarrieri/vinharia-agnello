// Sistema básico de gerenciamento de vinhos
// Vinheria Agnello

window.onload = function() {

    // Coleta de informações do Vinho

    var nomeVinho = prompt("Digite o nome do vinho:");
    var tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco, Rosé):");
    var safra = prompt("Digite a safra do vinho (ano):");
    var quantidade = prompt("Digite a quantidade em estoque:");

    // Comparações

    var tipoValido = tipoVinho === "Tinto" || tipoVinho === "Branco" || tipoVinho === "Rosé";

    var estoqueMaiorQueZero = quantidade > 0;

    var estoqueZerado = quantidade == 0;

    // Aviso que o cadastro foi concluido

    alert("Cadastro realizado! Veja os detalhes no console.");

    // Aviso antes de colocar os dados no console 

    alert("A seguir, veja os detalhes do vinho no console.");

    // Exibição dos dados no console

    console.log("______VINHO CADASTRADO______");
    console.log(`Nome: ${nomeVinho}`);
    console.log(`Tipo: ${tipoVinho}`);
    console.log(`Safra: ${safra}`);
    console.log(`Quantidade em estoque: ${quantidade}`);
    console.log(`O tipo de vinho é válido? ${tipoValido}`);
    console.log(`O estoque é maior que zero? ${estoqueMaiorQueZero}`);
    console.log(`_____________________________`);

};