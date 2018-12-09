function calibrate(input, frequency = 0, frequencyList = []) {
    let repeat = null;
    input.forEach((num) => {
        frequency += num;
        if (frequencyList.includes(frequency) && repeat === null) {
            repeat = frequency;
        }
        frequencyList.push(frequency);
    });

    if (repeat === null) {
        return calibrate(input, frequency, frequencyList);
    } else {
        return repeat;
    }
};