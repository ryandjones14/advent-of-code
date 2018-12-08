function calibrate(input) {
    let frequency = 0;
    input.forEach((num) => {
        frequency = frequency + num;
    });
    return frequency;
};