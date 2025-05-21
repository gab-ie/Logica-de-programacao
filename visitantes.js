//Visitantes
// {nome: '', idade:, convite:, vip:},

let visitantes = [
    {nome: 'Sara', idade: 23, convite: true, vip: true},
    {nome: 'Kate', idade: 30, convite: false, vip: true},
    {nome: 'Nick', idade: 17, convite: false, vip: false},
]

visitantes.forEach(visitante => {
    if (visitante.idade >= 18 &&
        visitante.convite === true ||
        visitante.vip == true) {
            console.log (`Bem vindo ${visitante.nome}!`);
            } else (`Entrada não permitida.`)


})