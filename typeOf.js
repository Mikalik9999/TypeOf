//1) Необходимо написать функцию возвращающую тип принятого аргумента
//const one = (x) => {
//    if (typeof x === "number") {
//        console.log('Число');
//    } else if (typeof x === "string") {
//        console.log('Строка');
//    } else if (typeof x === "boolean") {
//        console.log('True or False');
//    } else if (typeof x === "object") {
//        console.log('Объект');
//    } else {
//        console.log('NAN or undefined');
//    }
//};
//one('124');
//2 Написать функцию которая возвращает true для четных чисел, false для нечетных
const two = (w) => {
    if (!(w % 2)) {
        console.log('Четная');
    } else {
        console.log('Нечетные')
    }
}
//two(0);
//2.1 Необходимо написать функцию принимаю 1 аргумент, если аргумент строка -
// вывести эту строку в консоль, если аргумент число - вывести в консоль четное оно или нечетное.
// Для определения четности использовать функцию из п.2 . Для определения типа использовать функцию из п.1 .
//const qwe = (w) => {
//    return (typeof w);
//}
//qwe(2);

const twoOne = (w) => {
 if (typeof w === "string") {
     console.log(w);
 } else if (typeof w === "number") {
     two(w);
   } else {
     console.log('Ошибка');
     }
}
  twoOne('qwrq');

