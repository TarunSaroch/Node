const waitTime = 5000;
console.log( `Setting ${waitTime} seconds delay` );
const timerFinished = () => {
    console.log( "Completed" );
};
setTimeout( timerFinished, waitTime );
