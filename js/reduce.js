function scalculator(numbers) {
    const sum = () => numbers.reduce ((acc, num) => acc + num);
    const sub = () => numbers.reduce ((acc, num) => acc - num);
    const mult = () => numbers.reduce ((acc, num) => acc * num);
    const div = () => numbers.reduce ((acc, num) => acc / num);
    const pow = () => numbers.map (num =>Math.pow(num,2));
    const sqrt = () => numbers.map (num => Math.sqrt (num));

    return {
        sum: sum(),
        sub: sub(),
        mult: mult(),
        div: div(),
        pow: pow(),
        sqrt: sqrt(),
    }
}

