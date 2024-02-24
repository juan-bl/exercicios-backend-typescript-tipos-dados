let informacoes: {produto: string, lote: number, ano: number, qtd: number}

informacoes = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
}

const imprimirEtiqueta = (objeto: {produto: string, lote: number, ano: number, qtd: number}): string[]=> {
    const listaProdutos: string[] = []

    for (let i: number = 1; i <= objeto.qtd; i++) {

        let cadastrando: string = `${objeto.lote}-${objeto.ano}`

        if (objeto.qtd < 10) {
            listaProdutos.push(`${cadastrando}-00${i}`)
        } else if (objeto.qtd < 100) {
            listaProdutos.push(`${cadastrando}-0${i}`)
        } else {
            listaProdutos.push(`${cadastrando}-${i}`)
        }
    }

    return listaProdutos
}

console.log(imprimirEtiqueta(informacoes));