const waitTime = 10000;
console.log( `Setting ${waitTime} seconds delay` );
const timerFinished = () => {
    clearInterval(interval);
    console.log( "\nCompleted" );
};
setTimeout( timerFinished, waitTime );

const waitInterval = 500;
let currentTime = 0;
const IncrementTime = () => {
    currentTime += waitInterval;
    const progress = Math.floor( currentTime / waitTime * 100 );
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write( `Loading ... ${progress}%` );
};
const interval = setInterval( IncrementTime, waitInterval );
