class CalcController {

    constructor(){

         
        this._operation = [];
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

    clearALL(){

        this._operation = [];
    }

    clearEntry(){

        this._operation.pop();
    }

    getLastOperation(){

       return this._operation[this._operation.length-1];


    }

    setLastOperation(value){

        this._operation[this._operation.length -1] = value;

    }


    isOperator(value){

       return (["+", "-", "*", "%", "/"].indexOf(value) > -1);

    }

    setError(){

        this.displayCalc = "Error"
    }

    pushOperation(value){

        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();

        }

    }

    calc(){

        let last = this._operation.pop();
        let result = eval(this._operation.join(""));

        if (last == "%") {

            result/= 100;
            this._operation = [result];


        } else {

           
            this._operation = [result, last];

        }

      
        this.setLastNumberToDisplay();
                

    }

    setLastNumberToDisplay(){

        let LastNumber;

        for (let i = this._operation.length-1; i >= 0; i--){

            if (!this.isOperator(this._operation[i])) {

                LastNumber = this._operation[i];
                break;
            }

        }


        this.displayCalc = LastNumber;
    }

    addOperation(value){

        if (isNaN(this.getLastOperation())) {
            
            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if(isNaN(value)) {

                console.log("Outra coisa", value);

            } else {

                this.pushOperation(value);
                this.setLastNumberToDisplay();
                 

            }

        } else {

            if (this.isOperator(value)) {

                this.pushOperation(value);

            } else {

                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();
                

            }
           
        }
            
    
    }


    execBtn(value){

        switch (value) {

            case "ac":
                this.clearALL();
            break;

            case "ce":
                this.clearEntry();
            break;

            case "soma":
                this.addOperation("+");
            break;

            case "subtracao":
                this.addOperation("-");
            break;

            case "divisao":
                this.addOperation("/");
            break;

            case "multiplicacao":
                this.addOperation("*");
            break;

            case "porcento":
                this.addOperation("%");
            break;

            case "igual":
                
            break;

            case "ponto":
                this.addOperation(".");
            break;

            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.addOperation(parseInt(value));
            break;

            default:
                this.setError();
                break;

    
        }

    }

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{

            this.addEventListenerALL(btn, "click drag", e => { 

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);
            
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