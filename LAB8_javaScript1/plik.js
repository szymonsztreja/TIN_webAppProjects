function zad1_pithagoras(a, b, c) {
    var biggest;
    let tab = [a, b, c];
    biggest = Math.max(...tab);
    // if(a > b){
    //     if(a > c){
    //         biggest=a;
    //     }
    //     else{
    //         biggest=c;
    //     }
    // }
    // else {
    //     if (b > c){
    //         biggest=b;
    //     }
    //     else {
    //         biggest=c;
    //     }
    // }
    const index = tab.indexOf(biggest);
    tab = tab.filter(index => index !== biggest);
    if (Math.pow(biggest, 2) == Math.pow(tab[0], 2) +
        Math.pow(tab[1], 2)) {
        return true;
    }
    else {
        return false;
    }
}

function zad2_nums_div_c(a, b, c) {
    let tab = [];
    for (var i = 0; i <= b - a; i++) {
        tab[i] = a + i;
        if (tab[i] % c == 0) {
            console.log(tab[i]);
        }
    }
}

function zad3_tabliczka(a) {
    // Create a new two dimensional array; a by a
    let multiplication_tab = new Array(a - 1);
    for (let i = 0; i < a; i++) {
        multiplication_tab[i] = new Array(a - 1);
    }

    // Populate said array like multiplication table
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            multiplication_tab[i][j] = (i + 1) * (j + 1);
        }
    }
    let table = "";

    // Slice removes last comma and space
    // "\n" adds break line in each row
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < a; j++) {
            table += multiplication_tab[i][j] + " ";
        }
        table = table.slice(0, -2) + "\n";
    }

    // This prints simple rows and columns
    console.log(table);

    // This prints table with indexes and x and y axis
    console.table(multiplication_tab);
}

function zad4_fibonacci(seq_length) {

    if (seq_length == 1) {
        return 1;
    }
    if (seq_length == 0) {
        return 0;
    }

    return zad4_fibonacci(seq_length - 1) + zad4_fibonacci(seq_length - 2);
}

function zad5_choinka(height) {
    let output = "";
    if (height < 0) {
        console.log("Podaj poprawne dane!");
    }
    else {
        for (let i = 1; i <= height; i++) {
            output += "*";
            console.log(output);
        }
    }
}

function zad6_choinkaNoca(height) {
    if (height < 3) {
        console.log("Podaj poprawne dane!");
    }
    else {
        let treeHeight = height - 2;
        let treeWidth = 2 * height - 1;
        let treeTop = 1;
        let halfTreeWidth = Math.floor(treeWidth / 2);

        for (let i = 0; i < height; i++) {
            let row = "";

            for (let j = 1; j < halfTreeWidth; j++) {
                row += "*";
            }

            for (let k = 0; k < treeWidth - 2 * halfTreeWidth; k++) {
                if (i == 0 || i == height - 1) {
                    row += "*";
                }
                else {
                    row += " ";
                }

            }

            for (let j = 1; j < halfTreeWidth; j++) {
                row += "*";
            }
            if (i != 0 && i != height - 1) {
                treeTop += 2;
                halfTreeWidth--;
            }
            console.log(row);
            // console.log(halfTreeWidth);
            // console.log(i);
        }
    }

}

function zad8_liczPoleABH(a, b, h, dzialanie) {
    return dzialanie(a, b, h);
}

function zad8_liczPoleAB_AH(a, b, dzialanie) {
    return dzialanie(a, b);
}

function zad7_switch(shape, dimensions){
    let area = 0;
    switch(shape){
        case "rectangle":
            area = zad7_rectangle(dimensions[0], dimensions[1]);
            console.log(area);
            break;
        case "trapeze":
            area = zad7_trapeze(dimensions[0], dimensions[1], dimensions[2]);
            console.log(area);
            break;
        case "parallelogram":
            area = zad7_parallelogram(dimensions[0], dimensions[1]);
            console.log(area);
            break;
        case "triangle":
            area = zad7_triangle(dimensions[0], dimensions[1]);
            console.log(area);
            break;
    }
}

var zad7_rectangle = function (a, b) {
    return a * b;
}

var zad7_trapeze = function (a, b, h) {
    return ((a + b) * h) / 2;
}

var zad7_parallelogram = function (a, h) {
    return a * h;
}

var zad7_triangle = function (a, h) {
    return 1 / 2 * a * h;
}

function zad9_pascalTriangle(height) {

    let pascalArray = new Array(height);
    for (let i = 0; i < pascalArray.length; i++) {
        pascalArray[i] = new Array(i + 1);
        pascalArray[i][0] = 1;
        pascalArray[i][i] = 1;

        for (let j = 0; j < i - 1; j++) {
            pascalArray[i][j + 1] = pascalArray[i - 1][j] + pascalArray[i - 1][j + 1];
        }
    }

    let output = "";

    for (let i = 0; i < height; i++) {
        output = "";
        for (let j = 0; j <= i; j++) {
            output = output.padStart(height - i, " ");
            output += pascalArray[i][j] + " ";
        }
        output += "\n";
        console.log(output);
    }

    console.table(pascalArray);
}

function zad10_Censorship(bannedWords, stringToBeCensored) {
    let censoredString = stringToBeCensored;
    for (let bannedWord of bannedWords) {
        censoredString = censoredString.replaceAll(bannedWord, "*");
    }
    console.log(censoredString);
}
