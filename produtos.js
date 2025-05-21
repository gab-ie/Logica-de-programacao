//Estoque e preços
// {nome:'', quantidade:, preco:},

let produtos = [
    {nome:'Manga', quantidade: 5, preco: 4},
    {nome:'Uva', quantidade: 6, preco: 1},
    {nome:'Laranja', quantidade: 7, preco: 2},
    {nome:'Morango', quantidade: 10, preco:2.50},
    {nome:'Pera', quantidade: 6, preco: 3},
    {nome:'Kiwi', quantidade: 5, preco: 2},
]

produtos.forEach(produto => {
    if (produto.quantidade > 0){
        let valorTotal = produto.quantidade * produto.preco;
        console.log (`${produto.nome} tem: ${produto.quantidade} em estoque`)
        console.log (`O valor total em estoque é: R$${valorTotal.toFixed(2)}`)
        console.log (`-----`)
    }
} )




//  for ( let i = 0; i < produtos.length; i++) {
//     let produto = produtos[i] 
//     if (produto.quantidade > 0) {
//         let valorTotal = produto.quantidade * produto.preco;
//         console.log (`${produto.nome} tem: ${produto.quantidade} em estoque`)
//         console.log (`O valor total em estoque é de: R$ ${valorTotal.toFixed(2)}`)
//         console.log 
//     }
//  }