class Autko {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa) {
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    };
}
const autka = [
    new Autko(2010, 200000, 15000, 15000),
    new Autko(2015, 100000, 12000, 20000),
    new Autko(2000, 50000, 18000, 300),
    new Autko(2010, 200000, 15000, 15000),
    new Autko(2015, 80000, 12000, 10000),
    new Autko(2008, 150000, 8000, 6000),
    new Autko(2019, 5000, 25000, 23000),
    new Autko(2006, 180000, 5000, 4000)
]
function createTable() {
    const body = document.body;
    const table = document.createElement("table");

    table.style.width = "100px";
    table.style.border = "1px solid black";
    table.style = "border-collapse: collapse";''

    /* Creates header row with name of each field in class by key propery and its value is accessed by putting key in a object autko [key]  */
    const headerRow = document.createElement("tr");
    for (const key in autka[0]) {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(key));
        th.style.border = "1px solid black";
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);

    for (let i = 0; i < autka.length; i++) {
        const row = document.createElement("tr");

        for (const key in autka[i]) {
            const td = document.createElement("td");
            td.appendChild(document.createTextNode(autka[i][key]));
            td.style.border = "1px solid black";
            row.appendChild(td);
        }

        table.appendChild(row);
    }

    body.appendChild(table);
}
