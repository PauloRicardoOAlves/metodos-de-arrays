const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 2;

function encontrarCarro(posicao, array) {
    for (i = 0; i < array.length; i++){
        if(i == posicao){
            console.log(`${array[i]} - ${array[i+1]} - ${array[i+2]}`)
        }
    }
}

encontrarCarro(posicao, nomes)