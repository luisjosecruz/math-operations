let numbers = document.getElementById('numbers');
let titleText = document.getElementById('title');
let btnCalc = document.getElementById('btnCalculate');
let result = document.getElementById('result');

btnCalc.addEventListener('click', (e) => {
    e.preventDefault();

    const average = mediaCalc(numbers.value);
    const title = (titleText.value.length > 0) ? ' de '+titleText.value : '';

    result.innerHTML = `<p>El Promedio ${title} es:</p><br>
                        <strong class='badge'>${average}</strong>`; 

    let hoy = new Date();
    let fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();

    sendMeesage({
        "action": "onMessage",
        "numeros": numbers.value,
        "titulo": titleText.value,
        "promedio": average, 
        "fecha": fecha,
        "hora": hora
    });
});

btnClearForm.addEventListener('click', (e) => { 
    e.preventDefault();
    numbers.value = '';
    titleText.value = '';
});

const mediaCalc = (numbers) => {

    if(numbers.trim().length <= 0) return 0;

    const avNumbers = numbers.split(',').map( n => { return parseInt(n) });

    const sumNumbers = avNumbers.reduce(function(values = 0, element){
        return values + element;
    });

    const media = sumNumbers / avNumbers.length;
    return media;
}

// Done :D 
