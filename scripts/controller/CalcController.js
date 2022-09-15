class CalcController {

    constructor(){

        this._displayCalcEL = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){

        this._dateEL.innerHTML = "15/09/2022";
        this._timeEL.innerHTML = "08:48";

    }

    get displayCalc(){
        return this._displayCalcEL.innerHTML;

    }

    set displayCalc(valor){
        this._displayCalcEL.innerHTML = valor;

    }

    get currentDate(){
        return this._currentDate;

    }

    set currentDate(valor){
        this._currentDate = valor;

    }

}