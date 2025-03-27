class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    //método soma
    sum(n1, n2){
        return n1 + n2;
    }

    subtraction(n1, n2){
        return n1 - n2;
    }
}

//criando o objeto
const calc = new Calculator;

//start nos btns
let buttons = document.querySelectorAll('.btn');

//chamando o método de soma
const resultado = calc.sum(1,2);
console.log(resultado);

//chamando o método de subtração
let teste = calc.subtraction(5,4);
console.log(teste);