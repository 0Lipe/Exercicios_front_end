function Animal(nome, idade){
    this.nome = nome;
    this.idade = idade;

}

function Cachorro(nome, idade, raca, cor){
    this.raca = raca;
    this.cor = cor;

    Animal.call(this, nome, idade);
}

function calopsita(nome, idade, cor){
    this.cor = cor;
    Animal.call(this, nome, idade);
}


const Bernado = new Cachorro('Bernardo', 2, 'shih tzu', 'marrom');
const juca = new calopsita('juca', 1, 'amarelo');
const megan = new Cachorro('megan' ,4,'vira-lata', 'amarela')

console.log(Bernado)
console.log(juca)
console.log(megan)
