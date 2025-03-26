class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    //método de soma, parâmetros n1 e n2
    sum(n1, n2){
        return parseFloat(n1) + parseFloat(n2)
    }

    resolution(){
        //nós jogamos para um array uma string
        let upperValueArray = (this.upperValue.textContent). split(" ");
        result = Calc.sum(upperValueArray[i - 1], this.upperValueArray[i + 1]);
    }
}

//start nos btns
let buttons = document.querySelectorAll('.btn');
console.log('teste');