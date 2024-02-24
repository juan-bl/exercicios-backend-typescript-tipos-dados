const usuariosProf: Array<{ nome: string, idade: number, status: boolean }> = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]

const procurarUsuarios = ((pesquisa: string) => {
    const buscar = usuariosProf.filter((usuario: { nome: string, idade: number, status: boolean })  => {
        return usuario.nome.toLowerCase().includes(pesquisa)
    })
    return buscar
})

console.log(procurarUsuarios('jo'));
