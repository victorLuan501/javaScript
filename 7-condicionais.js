console.log("Criando Condicionais MOTHERFUCKER");



const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = false;

listaDeDestinos.push(`Curitiba`);
console.log("Destinos posssiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {   //if else padrão

//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1);

// } else if (estaAcompanhada) {
//     console.log("Comprador está acompanhado LMAO");
//     listaDeDestinos.splice(1, 1);
// } else {
//     console.log("Se fudeu não vai viajar");
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {   
    console.log("Boa Viagem DESGRAÇA!!! agelo");
    listaDeDestinos.splice(1, 1);

}  else {
    console.log("Se fudeu não vai viajar");
}

console.log("Embarque DESGRAÇA: \n\n") // o \n serve pra pular linha
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa Viagem MOTHERFUCKER")
} else [
    console.log("IIIIIIIIIII SE FUDEU LMAO HAHHAHAH agelo")
]


console.log(listaDeDestinos);

