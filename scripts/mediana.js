const mediaCalc = (numbers) => {
    const sumNumbers = numbers.reduce(function(values = 0, element){
        return values + element;
    });
    return sumNumbers / numbers.length;
}

function esPar(numero){
    return (numero % 2 === 0) ? true : false;
}

const lista = [100, 400000, 200, 500];

const calcularMediana = (lista) => {
    lista.sort((a,b) => a - b );
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)) {
        const element1 = lista[mitadLista];
        const element2 = lista[mitadLista - 1];
        const mediaElement1and2 = mediaCalc([element1, element2]);
        mediana = mediaElement1and2;
    }else{
        mediana = lista[mitadLista]; 
    }
    return mediana;
};

console.log(calcularMediana(lista));