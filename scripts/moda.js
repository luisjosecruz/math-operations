const lista = [1,2,3,5,2,2,1,4,1,4,1,2,2,4];

function calcularModa(lista){
    const listaCount = {};
    lista.map(element => listaCount[element] = (listaCount[element]) ? listaCount[element] += 1 : 1);
    const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => elementoA[1] - elementoB[1]);
    return listaArray[listaArray.length - 1];
}

console.log(calcularModa(lista));