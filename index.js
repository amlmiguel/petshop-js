const nomePetshop = "PETSHOP AVANADE";

let pets = [{
    nome: 'Max',
    tipo: 'Cachorro',
    idade: 6,
    raca: 'Boxer',
    peso: 25,
    tutor: 'João',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho','tosa']
},
{
    nome: 'Mel',
    tipo: 'Cachorro',
    idade: 3,
    raca: 'Vira-lata',
    peso: 15,
    tutor: 'João',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho','tosa']
},
{
    nome: 'Ajudante de papai noel',
    tipo: 'Cachorro',
    idade: 10,
    raca: 'Galgo',
    peso: 15,
    tutor: 'Homer',
    contato: '(81) 99999-9999',
    vacinado: true,
    servicos: ['banho']
}];

const listarPets = () => {
    for(let pet of pets){
    // console.log(pets[i].nome);
    // console.log(pets[i].raca);
    console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

listarPets();
// console.log(pet);
