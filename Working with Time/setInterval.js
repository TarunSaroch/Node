const waitInterval = 500;
let currentTime = 0;
const IncrementTime = () => {
    currentTime += waitInterval;
    console.log( `waiting ${currentTime / 1000} seconds` );
};
setInterval( IncrementTime, waitInterval );
