class CalcController {

    constructor(){

        this._displayCalcEL = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){

    }

    get displayTime(){
        return this._timeEL.innerHTML;

    }

    set displayTime(value){
        return this._timeEL.innerHTML = value;

    }

    get displayDate(){
        return this._dateEL.innerHTML;

    }

    set displayDate(value) {
        return this._dateEL.innerHTML = value;

    }

    get displayCalc(){
        return this._displayCalcEL.innerHTML;

    }

    set displayCalc(value){
        this._displayCalcEL.innerHTML = value;

    }

    get currentDate(){
        return new Date();

    }

    set currentDate(value){
        this._currentDate = value;

    }

}