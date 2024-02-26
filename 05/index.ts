const soletrando = (palavra: string): string => {
    let resultado: string = palavra.split('').join('-');
    return resultado;
};

console.log(soletrando('programador'));