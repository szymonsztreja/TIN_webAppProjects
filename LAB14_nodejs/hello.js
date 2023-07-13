if (process.argv.length != 3) {
    console.log("You should pass one argument only!");
    process.exit(1);
} else {
    console.log("Witaj, " + process.argv[2] + "!");
}
