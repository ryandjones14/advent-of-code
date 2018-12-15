const fs = require('fs')
const input = fs.readFileSync('/Users/ryanjones/code/advent-of-code/day2/input.txt', 'utf-8').trim().split('\n');
// const testInput = ["ababab",
//     "abcdef",
//     "abcdaa",
// ];

function checkId(id) {
    let key = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    };

    let arr = id.split('');
    arr.forEach((letter) => {
        key[letter]++;
    });
    const keyArray = Object.values(key);
    return keyArray.includes(3) && keyArray.includes(2) ? 'both' :
        keyArray.includes(3) ? 'triple' :
        keyArray.includes(2) ? 'double' :
        false;
}

function checkIds(ids) {
    let double = 0;
    let triple = 0;

    for (id of ids) {
        // console.log(id);
        let result = checkId(id);

        if (result === 'double') {
            console.log('double');
            double++;
        } else if (result === 'triple') {
            console.log('triple');            
            triple++;
        } else if (result === 'both') {
            console.log('both');            
            double++;
            triple++;
        }
    }

    console.log(double * triple);
}

checkIds(input);