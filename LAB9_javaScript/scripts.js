class Autko() {
    constructor(rok, przebieg, cena_wyjsciowa, cena_koncowa){
        this.rok = rok;
        this.przebieg = przebieg;
        this.cena_wyjsciowa = cena_wyjsciowa;
        this.cena_koncowa = cena_koncowa;
    }

    this.addThousandToPrice = function(){
        this.cena_wyjsciowa += 1000;
    }

    this.discountBasedOnAge = function(){
        let multiplayer = this.rok - 2023;
        this.cena_koncowa -= multiplayer * 1000;
    }

    this.discountBasedOnMileage = function(){
        let multiplayer = this.przebieg / 100000;
        this.cena_koncowa -= multiplayer * 1000;
    }

    this
}