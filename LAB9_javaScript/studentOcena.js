class Ocena {
    constructor(przedmiot, wartosc) {
        this.przedmiot = przedmiot;
        this.wartosc = wartosc;
    }
}



class Student {
    constructor(imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this._oceny = [];
        this.sredniaOcen = 0;
    }

    set oceny(ocena) {
        if (ocena instanceof Ocena) {
            this._oceny.push(ocena);
            this.countSrednia();
        }
    }

    get ocenySummary() {
        let ocenySummary = "";
        for (const ocena of this._oceny) {
            ocenySummary += `Przedmiot: ${ocena.przedmiot} - ocena ${ocena.wartosc}. `;
        }
        return ocenySummary;
    }

    countSrednia() {
        let counter = 0;
        this.sredniaOcen = 0;
        for (const ocena of this._oceny) {
            this.sredniaOcen += ocena.wartosc;
            counter++
        }
        this.sredniaOcen = this.sredniaOcen / counter;
    }

    hello() {
        return `Witaj ${this.imie} ${this.nazwisko}, Twoja średnia ocen to: ${this.sredniaOcen}`;
    }
}

const stud = new Student("Jan", "Kowalski");
console.log(stud.hello());

const ocena1 = new Ocena("Wpr", 4);
const ocena2 = new Ocena("TIN", 3);
const ocena3 = new Ocena("POJ", 2);

stud.oceny = ocena1;
stud.oceny = ocena2;
stud.oceny = ocena3;

let ocenyToString = stud.ocenySummary;
console.log(ocenyToString);
console.log(stud.hello());
