
// let mess;

// mess = 2; // модно и так mess= 1_000_000;

// rqr = 1e6;

// tor = num.toString(16);

// let rar = Math.floor(3.4)// округление в меньшие
// let rar2 = Math.ceil(3.4)// округление в большую
// let rar3 = Math.round(3.4)// округление как в матане
// let rar4 = Math.trunc(3.4)// округление до целого

// let less = 1;

// alert(mess + less);
// alert(rqr)
// alert(tor)

// alert (rar)
// alert (rar2)
// alert (rar3)
// alert (rar4)


// let num = 9007199254740992
// let num2 = 9007199254740993
// let num3 = 9007199254740993n // это биг инт это число можно продолжать до бесконечности но при действия с ним можно только с числами биг инт

// result1 = num3 + 1
// result2 = num + 1n

// alert (num)
// alert (num2)
// alert (num3)
// alert(result1)
// alert(result2)


// let question = prompt("Как вас зовут?")

// let helloMessage = `Привет ${question}`

// alert(helloMessage)

// let isTrue = 52 < 6;

// alert(isTrue)

// let false = "ads".length == 3; // а правда ли в строке три символа?

// alert(false)

// let age = prompt("Сколько вам лет?")

// if (age > 18) {
//     alert("Вы можете пройти в клуб.")
// }

// else if (age < 18) {
//     alert("Вы не можете пройти в клуб.")
// }

// else {
//     alert("Вы можете пройти в клуб.")
// }

// == это просто равно ему похуй число или строка а === там если у тебя была строка а ты её с числом спавнил то ничего не будет



let age = prompt("Сколько вам лет?")

// switch(Number(age)) {
//     case 18:
//         alert("Вы проходите в клуб.")
//         break// что бы перестало выполняться
//     case 19:
//         alert("Вы не проходите в клуб.")
// }

let mess = (age >= 18) ? "Вы проходите" : "Вы не проходите"

alert(mess)
