const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function calculate (num1, num2, operator){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;   
            
        case '*':
            return num1 * num2;

        case '/':
            if (num2 === 0) {
                return "Tak Terhingga ∞"
            } else {
            return num1 / num2;
            }

            default:
                return "Bukan Sebuah Operator Hitung";
    }
}

function startCalculator() {
    rl.question('Masukkan Angka Pertama: ', (num1) => {
        rl.question('Masukkan Operator Hitung (+, -, *, /): ', (operator) => {
            rl.question('Masukkan Angka Kedua: ', (num2) =>{
                const result = calculate(num1, num2, operator);
                console.log("Hasil: ", result);
                rl.close()
            })
        })
    })
}

startCalculator();