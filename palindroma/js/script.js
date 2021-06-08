var parola = prompt('Inserisci una parola');
parola = parola.toLowerCase();


var parolaInversa = inverti(parola);

if(parola == parolainversa){
    console.log('palindroma');
} else {
    console.log('non palindroma');
}

function inverti(stringaTesto){
    var inversa = '';
    var lunghezzaStringa = stringaTesto.length;

    for (var i = lunghezzaStringa - 1; i >= 0; i--){
    console.log(stringaTesto[i]);
    inversa += stringaTesto[i];
    }

    return inversa;
}