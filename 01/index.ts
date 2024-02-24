const usuarios: Array<{ nome: string, pets: string[] }> = [
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
];

const buscarDonoPet = (lista: Array<{ nome: string, pets: string[] }>, nomePet: string): string => {

    const buscar = lista.find((objeto: { nome: string, pets: string[] }) => {
        return objeto.pets.includes(nomePet)
    })

    if (buscar) {
        return `O dono(a) do(a) ${nomePet} é o(a) ${buscar.nome}`;
    }

    return `Que pena ${nomePet}, não encontramos seu dono(a)`;

}

console.log(buscarDonoPet(usuarios, 'Guido'));