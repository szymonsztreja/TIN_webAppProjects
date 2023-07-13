function count() {
    var outcome;
    var first_num = parseFloat(document.getElementById("first_num").value);
    var second_num = parseFloat(document.getElementById("second_num").value);
    var operation = document.getElementById("operation").value;
    var outcomeElement = document.getElementById("outcome");

    switch (operation) {
        case "add":
            outcome = first_num + second_num;
            outcomeElement.value = outcome.toPrecision(4);
            break;
        case "sub":
            outcome = first_num - second_num;
            outcomeElement.value = outcome.toPrecision(4);
            break;
        case "mul":
            outcome = first_num * second_num;
            outcomeElement.value = outcome.toPrecision(4);
            break;
        case "div":
            if (second_num !== 0) {
                outcome = first_num / second_num;
                outcomeElement.value = outcome.toPrecision(4);
            } else {
                window.alert("Nie można dzielić przez 0!");
                outcomeElement.value = ":////"
            }
            break;
        default:
            outcomeElement.value = "Wrong inputs!";
    }
}

function numbersOnly(input) {
    if (input.value.match(/[^0-9.]/g)) {
        window.alert("Możesz tylko użyć wartości numerycznych!");
        input.value = input.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    }
}