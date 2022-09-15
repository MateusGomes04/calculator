class CalcController {

    constructor(){
        this._locale = "pt-BR";
        this._displayCalcEL = document.querySelector("#display");
        this._dateEL = document.querySelector("#data");
        this._timeEL = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){

        this.setDisplayDateTime();

        setInterval(()=>{

            this.setDisplayDateTime();
            
        }, 1000);

    }

    addEventListenerALL(element, event, fn){

        event.split(" ").forEach(event => {

            element.addEventListener(event, fn, false);
        });

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{

            this.addEventListenerALL(btn, "click drag", e => { 

                console.log(btn.className.baseVal.replace("btn-", "s"));
            
            });

            this.addEventListenerALL(btn, "mouseover moseup mousedown", e => {

                btn.style.cursor = "pointer";
            });
       
        });
    }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

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