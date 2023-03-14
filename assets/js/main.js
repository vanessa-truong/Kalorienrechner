const weiblich = document.querySelector('#weiblich');
const männlich = document.querySelector('#männlich');
console.log("läuft");
let grundumsatz;
let gesamtumsatz;
const PALWert = document.querySelector('#PALWert');
let kiloJoule;
const resultKJ = document.querySelector('#resultKJ')
const resultTotalKJ = document.querySelector('#resultTotalKJ')


const change = () => {
    console.log("works");
    const größe = document.querySelector('#größe').value;
    const alter = document.querySelector('#alter').value;
    const gewicht = document.querySelector('#gewicht').value;


    if (weiblich.checked) {
        grundumsatz = 655.1 + (9.6 * gewicht) + (1.8 * größe) - (4.7 * alter);
        // resultGrundumsatz.innerHTML = grundumsatz.toFixed(3).concat("kcal")

    } else {
        grundumsatz = 664.7 + (13.7 * gewicht) + (5 * größe) - (6.8 * alter);
        // resultGrundumsatz.innerHTML = grundumsatz.toFixed(3).concat(" kcal")
    }
}


const check = () => {
    if (weiblich.checked) {
        resultGrundumsatz.innerHTML = grundumsatz.toFixed(2).concat("kcal");
        kiloJoule = grundumsatz * 4.184;
        resultKJ.innerHTML = kiloJoule.toFixed(3).concat(" KJ");
        if (PALWert.value == "0") {
            gesamtumsatz = grundumsatz * 0.95;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat(" ").concat("kcal");
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "1") {
            gesamtumsatz = grundumsatz * 1.2;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "2") {
            gesamtumsatz = grundumsatz * 1.5;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "3") {
            gesamtumsatz = grundumsatz * 1.7;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "4") {
            gesamtumsatz = grundumsatz * 1.9;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else {
            gesamtumsatz = grundumsatz * 2.2;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal");
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        }
    }
    else {
        resultGrundumsatz.innerHTML = grundumsatz.toFixed(2).concat(" ").concat("kcal");
        kiloJoule = grundumsatz * 4.184;
        resultKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ");
        if (PALWert.value == "0") {
            gesamtumsatz = grundumsatz * 0.95;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "1") {
            gesamtumsatz = grundumsatz * 1.2;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "2") {
            gesamtumsatz = grundumsatz * 1.5;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "3") {
            gesamtumsatz = grundumsatz * 1.7;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else if (PALWert.value == "4") {
            gesamtumsatz = grundumsatz * 1.9;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal")
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        } else {
            gesamtumsatz = grundumsatz * 2.2;
            resultGesamtumsatz.innerHTML = gesamtumsatz.toFixed(2).concat("kcal");
            kiloJoule = gesamtumsatz * 4.184;
            resultTotalKJ.innerHTML = kiloJoule.toFixed(2).concat(" KJ")
        }
    }
}

