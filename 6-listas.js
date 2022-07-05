console.log("Criando Listas MOTHERFUCKER");

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);
listaDeDestinos.push(`Curitiba`)//pusuh adiciona um elemento na lista
console.log("Destinos posssiveis:")
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1); //O splice serve pra retirar itens da lista dando a posição inicial que começa em 0
console.log(listaDeDestinos); //e a quantidade de elementos 1,2,3 etc

console.log(listaDeDestinos[1], listaDeDestinos[0]); //E dentro da lista da pra escolher um elemento 
