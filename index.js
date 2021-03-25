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
    servicos: ['tosa','Aparar unha']
},
{
    nome: 'Ajudante de papai noel',
    tipo: 'Cachorro',
    idade: 10,
    raca: 'Galgo',
    peso: 15,
    tutor: 'Homer',
    contato: '(81) 99999-9999',
    vacinado: false,
    servicos: ['banho']
}];

const listarPets = () => {
    for(let pet of pets){
    // console.log(pets[i].nome);
    // console.log(pets[i].raca);
    console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

// listarPets();
// console.log(pet);

const vacinarPet = () => {
    for(let pet of pets){
        if(pet.vacinado == false){
            pet.vacinado = true;
            console.log(`O pet ${pet.nome} foi vacinado com sucesso !`);
        }else{
            console.log(`Ops, ${pet.nome} já foi vacinado`)
        }
        
    }
}

// vacinarPet();

const CampanhaVacina = () => {
    var soma = 0;
    for(let pet of pets){
        if (pet.vacinado == false){
            soma++;
        }
    }
    console.log(`${soma} foram vacinados!`)
}

console.log("\n")

// CampanhaVacina();

const adicionarPet = (nome, tipo,idade,raca,peso,tutor,contato,vacinado,servicos) => {
    pets.push({
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        servicos: servicos
    });
}

adicionarPet('Brian','Cachorro',15,'Beagle',12,'Peter','9999-9999',true,['tosa']);

for(let pet of pets){
    console.log(`${pet.nome} recebeu os seguintes cuidados: ${pet.servicos}`)
}

const DarBanhoPet = () => {
    for(let pet of pets){
        for(let servico of pet.servicos){
            if(!(pet.servicos.includes('banho')
            )){
            pet.servicos.push('banho');
            }
        }
        
    }
 }
        
 

DarBanhoPet();


const TosarPet = () => {
    for(let pet of pets){
        for(let servico of pet.servicos){
            if(!(pet.servicos.includes('tosa')
            )){
            pet.servicos.push('tosa');
            }
        }
        
    }
 }
        
 

TosarPet();

const ApararUnha = () => {
    for(let pet of pets){
        for(let servico of pet.servicos){
            if(!(pet.servicos.includes('Aparar unha')
            )){
            pet.servicos.push('Aparar unha');
            }
        }
        
    }
 }
        
 

ApararUnha();

console.log('\n')

console.log("Após as aplicação das funções...")

console.log('\n')
for(let pet of pets){
    console.log(`${pet.nome} recebeu os seguintes cuidados: ${pet.servicos}`)
}

 