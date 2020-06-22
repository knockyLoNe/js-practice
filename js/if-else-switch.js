// Условие

if (4 == 9) {
    console.log('ok');
} else {
    console.log('not ok');
}

const num = 50;
if (num < 49) {
    console.log('error');
} else if (num > 100) {
    console.log('a lot');
} else {
    console.log('ok');
} 

// Тернарный оператор
const num = 50;
(num === 50) ? console.log('ok') : console.log('error');

const num = 50;
switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Неверно');
        break;
    case 51:
        console.log('Верно');
        break;
    default:
        console.log('Не в этот раз');
        break;
}