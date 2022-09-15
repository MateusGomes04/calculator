class CalcController {

    constructor(){

        this._displayCalc = "0"
        this._currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalcEL = document.querySelector("#display");
        let dateEL = document.querySelector("#data");
        let timeEL = document.querySelector("#hora");

        displayCalcEL.innerHTML = "1234567";
        dateEL.innerHTML = "15/09/2022";
        timeEL.innerHTML = "08:48";

    }

    get displayCalc(){
        return this._displayCalc;

    }

    set displayCalc(valor){
        this._displayCalc = valor;

    }

    get dataAtual(){
        return this._currentDate;

    }

    set dataAtual(valor){
        this._currentDate = valor;

    }

}