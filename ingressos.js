//Sistema de verificação

let clientes = 
[
    {nome: 'Samuel', idade: 17, ingresso: true},
    {nome: 'Isadora', idade: 18, ingresso: true},
    {nome: 'Sandro', idade: 18, ingresso: false},
    {nome: 'Ester', idade: 17, ingresso: false}
];
 
clientes.forEach(cliente => {
    if (cliente.idade >= 18 &&
        cliente.ingresso === true) {
            console.log (`Entrada de ${cliente.nome} permitida!`)
        } else {
            console.log (`Entrada de ${cliente.nome} negada.`)
        }
})


// for (let i = 0; i < clientes.length; i++){
//     let cli = clientes[i]
// if (cli.idade >= 18 && cli.ingresso == true){
//     console.log (cli.nome + ': Entrada Permitida');
// } else {
//     console.log (cli.nome + ': Entrada Negada');
// }}

