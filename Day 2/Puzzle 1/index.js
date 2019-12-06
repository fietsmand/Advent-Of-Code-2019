const data = [
    1, 12, 2, 3,
    1, 1, 2, 3,
    1, 3, 4, 3,
    1, 5, 0, 3,
    2, 13, 1, 19,
    1, 19, 10, 23,
    2, 10, 23, 27,
    1, 27, 6, 31,
    1,
    13,
    31,
    35,
    1,
    13,
    35,
    39,
    1,
    39,
    10,
    43,
    2,
    43,
    13,
    47,
    1,
    47,
    9,
    51,
    2,
    51,
    13,
    55,
    1,
    5,
    55,
    59,
    2,
    59,
    9,
    63,
    1,
    13,
    63,
    67,
    2,
    13,
    67,
    71,
    1,
    71,
    5,
    75,
    2,
    75,
    13,
    79,
    1,
    79,
    6,
    83,
    1,
    83,
    5,
    87,
    2,
    87,
    6,
    91,
    1,
    5,
    91,
    95,
    1,
    95,
    13,
    99,
    2,
    99,
    6,
    103,
    1,
    5,
    103,
    107,
    1,
    107,
    9,
    111,
    2,
    6,
    111,
    115,
    1,
    5,
    115,
    119,
    1,
    119,
    2,
    123,
    1,
    6,
    123,
    0,
    99,
    2,
    14,
    0,
    0

];

const success = 99;

const Intcode = (code) => {
    getAnswer = (opcode) => {

        if (code[opcode] === 99) return code;
        if (code[opcode] === 1) {
            console.log(`
                Position ${code[opcode + 3]} has been changed from ${code[code[opcode + 3]]} to ${code[code[opcode + 1]] + code[code[opcode + 2]]}
                by adding ${code[code[opcode + 1]]} to ${code[code[opcode + 2]]}
            `);
            return code[code[opcode + 3]] = code[code[opcode + 1]] + code[code[opcode + 2]];

        }
        if (code[opcode] === 2) {
            console.log(`
                Position ${code[code[opcode + 3]]} has been changed from ${code[code[opcode + 3]]} to ${code[code[opcode + 1]] * code[code[opcode + 2]]}
                by multiplying ${code[code[opcode + 1]]} with ${code[code[opcode + 2]]}
            `);
            return code[code[opcode + 3]] = code[code[opcode + 1]] * code[code[opcode + 2]];
        }
    }


    for (let i = 0; i < code.length; i += 1) {
        if (i % 4 === 0) {
            getAnswer(i)
        }
    }
};

console.log(Intcode(data));
