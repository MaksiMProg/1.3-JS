//1)
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(2, 3));

//2) - var1
function pow1(x, n) {
    if (n > 0) {
        return x ** n;
    } else {
        console.log('Введите корректное значение');
    }
}
console.log(pow1(5, 5));

//2) - var2
function pow2(x, n) {
    let res = x;
    if (n > 0) {
        for (let i = 2; i <= n; i++) {
            res *= x;
        }
    } else {
        console.log('Введите корректное значение');
    }
    return res;
}
console.log(pow2(5, 5));

//3)
function howManyDays(month) {
    let days = 0;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 4:
        case 6:
        case 9:
            days = 30;
            break;
        case 2:
            days = 28;
            break;
        default:
            alert("Число должно быть от 1 до 12");
    }
    return days;

}
console.log(howManyDays(10));

//4)
function multiplicationDivisibleby2(x, y, chetnoe, nechetnoe) {
    let multiple = x * y;
    if (multiple % 2 == 0 || multiple === 0) {
        chetnoe();
    } else {
        nechetnoe();
    }

}

function divisiblyByTwo() {
    console.log('Четное');
}

function unDivisibleByTwo() {
    console.log('Не четное');
}
multiplicationDivisibleby2(5, 10, divisiblyByTwo, unDivisibleByTwo);

//5)
let number = +prompt('Введите число от 1 до 18');
if (number >= 1 && number <= 18) {
    for (let i = 1; i <= number; i++) {

        if (i % 2 == 0 || i === 0) {
            console.log(i);
        }
    }
} else {
    alert('Введите корректное значение');
}