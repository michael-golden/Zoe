const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var question = function(q: any) {
    return new Promise( (res, rej) => {
        rl.question( q, (answer: unknown) => {
            res(answer);
        })
    });
};

/* ignore above - this is just example code */

(async function main() {

    const secret = 'i am gay'

    let answer = null;

    while( answer !== secret ) {
        answer = await question('guess the secret');

        if (secret === answer) {
            console.log('Congrats')
        } else {
            console.log('You suck!')
        }
    }

    console.log('Done!')
})()
