const Alunos = [
    {nome: 'Felipe', nota: 7},
    {nome: 'Lucas', nota: 5},
    {nome: 'Miguel', nota: 3},
    {nome: 'Kelvin', nota: 8},
    {nome: 'João', nota: 10},
]

const Aprovados = Alunos.filter(function(item){
    return item.nota >= 6
});

console.log(Aprovados)