class Autko {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    addThousandToPrice() {
        this.cena_wyjsciowa += 1000;
    }

    discountBasedOnAge = function () {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        let multiplayer = currentYear - this.rok;
        this.cena_koncowa -= multiplayer * 1000;
        this.cena_koncowa = Autko.checkMinPrice(this.cena_koncowa);
    }

    discountBasedOnMileage = function () {
        let multiplayer = this.przebieg / 100000;
        this.cena_koncowa -= multiplayer * 1000;
        this.cena_koncowa = Autko.checkMinPrice(this.cena_koncowa);
    }

    updatePrice(newPrzebieg, newAge) {
        this.przebieg = newPrzebieg;
        this.rok = newAge;
        this.discountBasedOnAge();
        this.discountBasedOnMileage();
    }

    static checkMinPrice(price) {
        const minPrice = 1000;
        return Math.max(price, minPrice);
    }
}

var autka = [];

function addAutkoIfPriceGreaterThan1000(autko) {
    if (autko.cena_koncowa > 10000) {
        autka.push(autko);
    }
}

function incrementYearByOne(autkaArray) {
    var incrementedAutka = [];
    for (prop in autkaArray) {
        incrementedAutka[prop] = autkaArray[prop];
    }
    for (let i = 0; i < incrementedAutka.length; i++){
        incrementedAutka[i].rok++;
    }
    // for (let i = 0; i < autkaArray.length; i++) {
    //     let tmpAutko = autkaArray[i];
    //     let incAutko = new Autko(tmpAutko.rok + 1, tmpAutko.przebieg, tmpAutko.cena_wyjsciowa, tmpAutko.cena_koncowa);
    //     incrementedAutka.push(incAutko);
    // }
    return incrementedAutka;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const autko1 = new Autko(2010, 200000, 15000, 15000);
const autko2 = new Autko(2015, 100000, 12000, 20000);
const autko3 = new Autko(2000, 50000, 18000, 300);
autko1.updatePrice(20000, 2020)
console.log(autko1.cena_koncowa);

addAutkoIfPriceGreaterThan1000(autko1);
addAutkoIfPriceGreaterThan1000(autko2);
addAutkoIfPriceGreaterThan1000(autko3);


console.log(autka);
var incrAutka = incrementYearByOne(autka);

console.log(incrAutka);
// console.log(autka);