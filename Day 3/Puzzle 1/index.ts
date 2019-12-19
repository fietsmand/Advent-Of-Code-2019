const { data1, data2 } = require('./input');


// Central Port
const map = [

    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.'],
];

const getOutput = (startingPoint, index, steps) => {
    if (!map[startingPoint.vertical]) {
        if (startingPoint.vertical >= map.length) {
            map.push(map[0].map(r => '.'));
            
        } else {
            map.unshift(map[0].map(r => '.'))
            startingPoint.vertical++
        }
        // console.table(map);
    }
    
    if (!map[startingPoint.vertical][startingPoint.horizontal]) {
        for (let i = 0; i < map.length; i ++) {
            if (startingPoint.horizontal < 0) {
                map[i].unshift('.');
                startingPoint.horizontal++
            } else {
                map[i].push('.')
            }
        }
    }

    if (map[startingPoint.vertical][startingPoint.horizontal] === '-') {
        map[startingPoint.vertical][startingPoint.horizontal] = 'X'
    } else {
        map[startingPoint.vertical][startingPoint.horizontal] = index === steps ? '+' : '-'
    }
}

const drawLines = (path: string[]) => {
    let o: number;
    map[map.length - 2][1] = 'O';
    const startingPoint = {
        vertical: map.length - 2,
        horizontal: 1,
    };
    
    path.forEach((instruction) => {
        const direction = instruction[0];

        console.log('🚀: drawLines -> startingPoint', startingPoint);
        if (['R', 'U', 'L', 'D'].includes(direction)) {

            const steps = Number(instruction.slice(1, instruction.length));

            if (direction === 'R') {
                for (let index = 0; index <= steps; index++) {
                    startingPoint.horizontal++;
                    getOutput(startingPoint, index, steps);
                }
            }

            if (direction === 'L') {
                for (let index = 0; index <= steps; index++) {
                    startingPoint.horizontal--;
                    getOutput(startingPoint, index, steps);
                }
            }

            if (direction === 'U') {
                for (let index = 0; index <= steps; index++) {
                    startingPoint.vertical--;
                    getOutput(startingPoint, index, steps);
                }
            }

            if (direction === 'D') {
                for (let index = 0; index <= steps; index++) {
                    startingPoint.vertical++;
                    getOutput(startingPoint, index, steps);
                }
            }
        }
    

    });
}

const findDistance = () => {
    const centralPort = {
        vertical: null,
        horizontal: null,
    };
    const intersections = [];
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 'X') {
                intersections.push({
                    vertical: i,
                    horizontal: j,
                })
                console.log('Found Intersection At: ', i, ',', j);
            }
            if (map[i][j] === 'O') {
                centralPort.vertical = i;
                centralPort.horizontal = j;
                console.log('Found Central Port At: ', i, ',', j);
            }
        }
    }


    intersections.map(res => {
        console.log('Distance to intersection from Central Port: ', Math.abs(res.vertical - centralPort.vertical) + Math.abs(res.horizontal - centralPort.horizontal));
    });
}

drawLines(data1);
drawLines(data2);
// drawLines(['R8', 'U5', 'L5', 'D3'])
// drawLines(['U7', 'R6', 'D4', 'L4'])

findDistance()






// const drawLines2 = (path: string[], path2: string[]) => {
//     let o: number;
//     map[map.length - 2][1] = 'O';
//     const startingPoint = {
//         vertical: map.length - 2,
//         horizontal: 1,
//     };

//     path.forEach((instruction) => {
//         const direction = instruction[0];
//         if (['R', 'U', 'L', 'D'].includes(direction)) {
//             console.log(startingPoint);

//             const steps = Number(instruction.slice(1, instruction.length));

//             if (direction === 'R') {
//                 for (let index = 0; index <= steps; index++) {
//                     startingPoint.horizontal++;
//                     console.log(startingPoint);

//                     getOutput(startingPoint, index, steps);
//                 }
//             }

//             if (direction === 'L') {
//                 for (let index = 0; index <= steps; index++) {
//                     startingPoint.horizontal--;
//                     getOutput(startingPoint, index, steps);
//                 }
//             }

//             if (direction === 'U') {
//                 for (let index = 0; index <= steps; index++) {
//                     startingPoint.vertical--;
//                     getOutput(startingPoint, index, steps);
//                 }
//             }

//             if (direction === 'D') {
//                 for (let index = 0; index <= steps; index++) {
//                     startingPoint.vertical++;
//                     getOutput(startingPoint, index, steps);
//                 }
//             }
//         }
//     });

//     console.table(map);
// }

// drawLines2(
//     ['R8', 'U5', 'L5', 'D3'],
//     ['U7', 'R6', 'D4', 'L4']
// );