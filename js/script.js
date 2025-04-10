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

    divide(n1, n2){
        try{
            if(n2 === 0){
                throw new Error("Divisão por zero");
            }
            return n1 / n2;
        } catch (error){
            return `Erro: ${error.mesage}`;        }
    }

    multiplication(n1, n2){
        return n1 * n2;
    }

    //começar aqui
    clearValues(){
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
        this.reset = false;
    }

    resolve(expression){
        //Substitui 'x' por '*' e quebra a expressão em tokens (números e operadores)
        //números decimais e operadores (+, -, *, /).
        const tokens = expression.replace(/x/g, '').match(/(\d+\.?\d|\+|\-|\*|\/)/g);
        alert('teste');
        if (!tokens) {  // Verifica se há algo para calcular
            return 'Erro';
        }
        let stack = [];

        //Primeiro passo: aplicar multiplicação (*) e divisão (/)
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];
    
            if (token === '*' || token === '/') {
                const n1 = parseFloat(stack.pop());      // remove o último número da pilha
                const n2 = parseFloat(tokens[++i]);      // pega o próximo número
                let result = token === '*' ? this.multiplication(n1, n2) : this.divide(n1, n2);
                if (typeof result === 'string') return result; // tratamento de erro (divisão por zero)
                stack.push(result); // insere o resultado de volta na pilha
            } else {
                stack.push(token); // empilha números e operadores '+' ou '-'
            }
        }

        //segundo passo: aplicar soma (+) e subtração (-)
        let result = parseFloat(stack[0]); //começa pelo primeiro número
        for (let i = 1; i <stack.length; i +=2){
            const operator = stack[i];
            const num = parseFloat(stack[i + 1]);
            if (operator === '+') result = this.sum(result, num);
            if (operator === '=') result = this.subtraction(result, num);
        }
        alert(result);
        return result;
    }

    btnPress = (event) => {
        const input = event.target.textContent; //pega o texto dos botões
        let currentExpression = this.upperValue.textContent;

        //limpa
        if(input === 'AC'){
            this.clearValues(); //limpa o visor da calculadora
            return;
        }

        if(input === '='){
            const result = this.resolve(currentExpression); //resolve a conta
            this.resultValue.textContent = result; //mostra o resultado
            this.upperValue.textContent = currentExpression; //mantém a expressão
            this.reset = true; //ativa flag reiniciar em 0
            return;
        }

        //se o botão clicado for um numero inteiro e a calculadora estiver em modo de reiniciar
        if (this.reset && /^\d+$/.test(input)){
            currentExpression = '0';
            this.reset = false;
        }

        //substitui o zero inicial se for numero
        if (currentExpression === '0' && /^\d+$/.test(input)){
            currentExpression = input;
        }else{
            currentExpression += input;
        }

        this.upperValue.textContent = currentExpression;
    }
}

//criando o objeto
const calc = new Calculator();

//start nos btns
let buttons = document.querySelectorAll('.btn');

/*chamando o método de soma
const resultado = calc.sum(1,2);
console.log(resultado);

//chamando o método de subtração
let teste = calc.subtraction(5,4);
console.log(teste);

//chamando o método de divisão
teste = calc.divide(10,5);
console.log(teste);

//chamando o método de divisão
teste = calc.multiplication(2,2);
console.log(teste);*/

let button = document.querySelectorAll('.btn');

for(let i=0; button.length > i; i++){
    button[i].addEventListener('click', calc.btnPress);
}