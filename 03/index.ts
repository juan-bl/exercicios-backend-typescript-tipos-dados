function tabuadas(lista: number[]): string {
    lista.map((num) => {

        let digito: number = 0

        while (digito != 11) {
            console.log(`${num} x ${digito} = ${num * digito}`);
            digito++
        }

        console.log('----------');
        console.log('');
    })
    return ''
}

tabuadas([1, 5, 2])