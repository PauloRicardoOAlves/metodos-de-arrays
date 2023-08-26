const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

//Supondo que estamos buscando o pet Max, ao encontrar, o sistema deverá imprimir a mensagem 'O dono(a) do(a) Max é o(a) João', caso contrário, irá imprimrir 'Que pena Max, não encontramos seu dono(a)'.

usuarios.encontrarDono = function (usuarios, pet) {
const dono = usuarios.filter((pet) => this.pet == pet)
console.log(dono)
}

usuarios.encontrarDono()

