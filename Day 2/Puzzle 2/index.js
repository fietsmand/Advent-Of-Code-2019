const data = [
    1, 0, 0, 3,
    1, 1, 2, 3,
    1, 3, 4, 3,
    1, 5, 0, 3,
    2, 13, 1, 19,
    1, 19, 10, 23,
    2, 10, 23, 27,
    1, 27, 6, 31,
    1, 13, 31, 35,
    1, 13, 35, 39,
    1, 39, 10, 43,
    2, 43, 13, 47,
    1, 47, 9, 51,
    2, 51, 13, 55,
    1, 5, 55, 59,
    2, 59, 9, 63,
    1, 13, 63, 67,
    2, 13, 67, 71,
    1, 71, 5, 75,
    2, 75, 13, 79,
    1, 79, 6, 83,
    1, 83, 5, 87,
    2, 87, 6, 91,
    1, 5, 91, 95,
    1, 95, 13, 99,
    2, 99, 6, 103,
    1, 5, 103, 107,
    1, 107, 9, 111,
    2, 6, 111, 115,
    1, 5, 115, 119,
    1, 119, 2, 123,
    1, 6, 123, 0,
    99, 2, 14, 0,
    0
];

const Intcode = (c, noun, verb) => {

    const code = [c].flat(1);
    code[1] = noun;
    code[2] = verb;

    let i = 0;
    while (i < code.length) {
        const opcode = code[i];
        const op1 = code[code[i + 1]];
        const op2 = code[code[i + 2]];
        const destination = code[i + 3];

        if (opcode === 1 || opcode === 2) {
            code[destination] = opcode === 1 ? op1 + op2 : op1 * op2;
            i += 4;
        } else if (opcode === 99) {
            break;
        } else {
            console.log('unknown opcode: ', opcode, ' at position ', i);
            break;
        }
    }
    return code[0];
};

const puzzle2 = (d, output) => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            if (Intcode(d, noun, verb) === output) {
                console.log('FOUND: ', [2, noun, verb, 1, 99]);
                return 100 * noun + verb;
            } else {
                console.log(`Nope: verb=${verb} and noun=${noun} returned ${Intcode(d, noun, verb)}`);
            }
        }
    }
}

console.log(puzzle2(data, 19690720));
