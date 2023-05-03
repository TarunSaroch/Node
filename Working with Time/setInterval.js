const waitTime = 500;
let currentTime = 0;
const IncrementTime = () => {
    currentTime += waitTime;
    console.log( `waiting ${currentTime / 1000} seconds` );
};
setInterval( IncrementTime, waitTime );
