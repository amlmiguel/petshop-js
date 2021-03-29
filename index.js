const moment = require('moment');
const nomePetshop = "PETSHOP AVANADE";
const fs = require('fs');
// const petsJSON = require('./pets-Json');
let petsJSON = fs.readFileSync('./pets-Json.json');

// Função para atualizar banco:

const atualizarBanco = () => {
    // converssao de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(petsJSON);

    // atualização do arquivo pets-Json.json
    fs.writeFileSync('pets-Json.json', petsAtualizado, 'utf-8', null,2); 

}

petsJSON = JSON.parse(petsJSON);


// Funçõa para listar o pets e os serviços realizados

const listarPets = () => {
    for(let pet of petsJSON.pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
        pet.vacinado ? console.log(`${pet.nome} está vaciando(a)`) : console.log(`${pet.nome} não está vaciando(a)`)
        console.log('\n')
        for(const servico of pet.servicos){
            console.log(`${servico.tipo} - ${servico.data}`)
        }
    }
}

// listarPets();

// Função para vacinar os pets

const vacinarPet = pet =>{
    if(!pet.vacinado){
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado(a) com sucesso !`);
    }else{
        console.log(`Ops, o ${pet.nome} já está vacinado(a)`)
    }
}

// vacinarPet(pets[1])


// Função para campanha de vacinação

const CampanhaVacina = () => {
    console.log("Campanha de vacinação 2021");
    console.log('===========================');
    console.log("Vacinando...")
    console.log('\n');

    let petVacinados = 0;
    for(let pet of petsJSON.pets){
        if(!pet.vacinado){
            vacinarPet(pet);
            console.log(`${pet.nome} aderiu a campanha !`)
            console.log('\n');
            petVacinados++;
        }
    }
    console.log(`Nessa campanha foram vacinados ${petVacinados}`)
}

// CampanhaVacina();

//Criando função adicionar pet

const adicionarPet = (nome, tipo,idade,raca,peso,tutor,contato,vacinado,servicos) => {
    petsJSON.pets.push({
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
    atualizarBanco();
}

// adicionarPet('Brian','Cachorro',15,'Beagle',12,'Peter','9999-9999',true,[]);

//Criando função dar banho

const darBanhoPet = pet =>{
    pet.servicos.push({
        'tipo':'banho',
        'data': moment().format('DD-MM-YYYY')

    });
    console.log(`${pet.nome} está de banho tomado !`)
    atualizarBanco();
}

// darBanhoPet(pets[0])
// darBanhoPet(pets[3])


//criando função para tosar o pet

const tosarPet = pet => {
    pet.servicos.push({
        'tipo':'tosar',
        'data':moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está tosado(a) !`)
    atualizarBanco();

}

// tosarPet(pets[1]);

// Criando função aparar unhas

const apararUnha = pet =>{
    pet.servicos.push({
        'tipo':'aparar unha',
        'data': moment().format('DD-MM-YYYY')
    })
    console.log(`${pet.nome} teve as unhas aparadas !`)
    atualizarBanco();
}

// apararUnha(pets[2])

// listarPets()

// AtenderCliente usando callback
const AtenderCliente = (pet, servico) =>{
    console.log(`Olá, ${pet.nome}`);
    (servico) ? servico(pet) : console.log("Só vim dá uma olhadinha");
    console.log('Tchau, até mais!');
    console.log('\n');
}

// AtenderCliente usando switch case

const AtenderCliente2 = (pet, servico) =>{
    let disponiveis = ['banho','tosa','aparar unha'];
   switch(servico.toLowerCase()){
       case 'banho':
           darBanhoPet(pet);
        break;
        case 'tosa':
            tosarPet(pet);
         break;

         case 'aparar unha':
            apararUnha(pet);
         break;

         default:
             console.log("Lamento, não oferecemos esse serviço")
             


   }
    
}


// AtenderCliente(pets[0], darBanhoPet)

AtenderCliente(petsJSON.pets[0])
// adicionarPet('Brian','Cachorro',15,'Labrador',12,'Peter','9999-9999',true,[]);
listarPets();
