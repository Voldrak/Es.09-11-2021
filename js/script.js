
function calculator(numbers) {
    function sum() {
        let sumTotal = 0;
        for (num of numbers) 
        sumTotal += num;
        return sumTotal
    }

    function sub() {
        let subTotal = numbers[0];
        for (num of numbers)
        subTotal -= num;
        return subTotal + numbers[0]
    }

    function mult() {
        let multTotal = 1;
        for (num of numbers)
        multTotal *= num;
        return multTotal
    }

    function div() {
        let divTotal = numbers[0];
        for (num of numbers)
        divTotal /= num;
        return divTotal * numbers[0]
    }


    return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div(),
    };
    

}



// Math.abs(-4.5); // 4.5
// Math.ceil(3.7); // 4
// Math.floor(3.7); // 3
// Math.max(3,11,67,5); // 67
// Math.min(3,11,67,5); // 3
// Math.pow(3,2); // 9
// Math.random(); // 0.4300545122190121
// Math.sqrt(9); // 3