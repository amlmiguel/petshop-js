let petjson = require('./pets-Json.json')

let pets =  petjson.pets

const atenderCliente = (pet, servico) => {
    console.log(`Olá, ${pet.nome}`);
    // servico();
    (servico) ? servico() : console.log("Só vim dá uma olhadinha");
    console.log('Tchau, até mais!');
    console.log('\n');
}


const darBanho = () => {
    console.log('dando banho no pet');
}

const apararUnha = () => {
    console.log('Aparando unhas...');
}
// atenderCliente(pets[0], darBanho);
// atenderCliente(pets[3], apararUnha);
atenderCliente(pets[2]);
