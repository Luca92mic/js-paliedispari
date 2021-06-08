var pariDispari = prompt('Scegli pari o dispari');
var numero = parseInt(prompt('Scegli un numero da 1 a 5'));
var generatore = numeroR(1,5);
var somma = sommaNumeri(numero, generatore);

function numeroR(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sommaNumeri(num1, num2){
    return somma = num1 + num2;
}


function isPari(sum){
    if (sum % 2 == 0){
        return 'pari';
    } else {
        return 'dispari';
    }
}

var risultato = isPari(somma);
console.log('risultato della funzione' + risultato);

/* document.getElementById('pari-dispari').innerHTML = somma; */
console.log('utente' + pariDispari);

if (risultato == pariDispari){
    document.getElementById('pari-dispari').innerHTML = 'L\'utente ha vinto'
}