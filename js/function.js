// Функции

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

// Замыкание функции.
//Сама функция вместе со всеми переменными которые ей доступны
//Функция ищет переенные внутри себя, если не находит идет на уровень выше


function calc(a, b) {
    return (a + b);    // После return ничего не воспроизводится!
}

console.log(calc(3, 4));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello!")
};

logger();

const calc = (a, b) => {
    console.log('1');
    return (a + b);
};