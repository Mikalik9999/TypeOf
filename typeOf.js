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
