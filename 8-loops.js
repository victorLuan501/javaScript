console.log(" \n Criando Loops MOTHERFUCKER");



const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,

);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";



listaDeDestinos.push(`Curitiba`);
console.log(" \n Destinos posssiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
 
let contador = 0;
let destinoExiste = false;

while(contador <3) {
    if(listaDeDestinos[contador] == destino) {
        console.log("É isso...agelo")
        destinoExiste = true;
        
    }
    contador += 1;
}

console.log("Destina existe", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else {
    console.log('Se fudeu hahhaahhahah')
}


for(let i = 0;i < 3; i++ ) {
    if(listaDeDestinos[contador] == destino) {
        console.log("É isso...agelo")
        destinoExiste = true;
        break;
    }
    
}