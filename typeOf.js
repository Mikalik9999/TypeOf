//1) Необходимо написать функцию возвращающую тип принятого аргумента
const one = (x) => {
    if (typeof x === "number") {
        console.log('Число');
    } else if (typeof x === "string") {
        console.log('Строка');
    } else if (typeof x === "boolean") {
        console.log('True or False');
    } else if (typeof x === "object") {
        console.log('Объект');
    } else {
        console.log('NAN or undefined');
    }
};
one('124');
//2 Написать функцию которая возвращает true для четных чисел, false для нечетных
const two = (q) => {
    if (!(q % 2)) {
        console.log('Четная');
    } else {
        console.log('Нечетные')
    }
}
two(0);
//3