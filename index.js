function guessNumber() {
    const randomNum=Math.floor(Math.random()*20)+1;
    // запитання числа користувача
    let userNum=+prompt("Відгадай число від 1 до 20");
    while (randomNum!==userNum) {
        if (randomNum>userNum) {
            alert("Загадане число більше твого");
            userNum=+prompt("Неправильно. Спробуй ще.");
        }else if (userNum>randomNum) {
            alert("Загадане число меньше твого");
            userNum=+prompt("Неправильно. Спробуй ще.");
        }
    }
    if (randomNum==userNum) {
        alert("Ви відгадали число");
    }
}
guessNumber()