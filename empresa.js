//Cargos e salários
// {nome:'', cargo:'', salario:},

let funcionarios = [
{nome:'Julia', cargo:'Gerente', salario: 4000},
{nome:'Ester', cargo:'Gerente', salario: 4000},
{nome:'Marcos', cargo:'Secretário', salario: 2500},
{nome:'David', cargo:'Técnico', salario: 1500},
{nome:'Debora', cargo:'Recepcionista', salario: 1500},
{nome:'Joana', cargo:'Analista RH', salario: 3000},
{nome:'Kate', cargo:'Supervisora', salario: 3500},
]

let gerentes = 0
funcionarios.forEach(funcionario => {
    if (funcionario.salario > 2000) {
        console.log (`O salário de ${funcionario.nome} é de R$ ${funcionario.salario.toFixed(2)}`);
    }
    if (funcionario.cargo=== 'Gerente') {
    gerentes ++;
   } 

})

console.log (`Há ${gerentes} Gerentes na empresa.`);

// let gerentes = 0
// for (let i = 0; i < funcionarios.length; i++) {
//     let funcionario = funcionarios[i]
//     if (funcionario.salario > 2.000){
//     console.log (`O salário de ${funcionario.nome} é de R$ ${funcionario.salario.toFixed(4)} reais.`);
//     } 
// if (funcionario.cargo === 'Gerente') { 
//     gerentes ++
// }
// }

// console.log (`Há ${gerentes} Gerentes na empresa.`);
