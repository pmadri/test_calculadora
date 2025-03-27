class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    //método de soma, parâmetros n1 e n2
    sum(n1, n2){
        return n1 + n2;
    }
}

//criando o objeto
const cal = new Calculator;

//start nos btns
let buttons = document.querySelectorAll('.btn');
console.log('teste');
