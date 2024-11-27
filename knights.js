function checkLimit([i, j]) {
    if(i < 0 || i > 7 || j < 0 || j > 7) return false;
    return [i, j];
};

function moves([i,j]) {
    const totalMoves = [
        [i+1, j-2],
        [i+2, j-1],
        [i+2, j+1],
        [i+1, j+2],
        [i-1, j+2],
        [i-2, j+1],
        [i-2, j-1],
        [i-1, j-2],
    ];

    const possibleMoves = totalMoves.map(checkLimit).filter((data) => data !== false)
    return possibleMoves;

};


function knightMoves([i, j], [k, l]) {
    const limits = [[0,0], [0,7], [7,0], [7,7]]

    if(!checkLimit([i,j])) return "Out of Limit";
    if(!checkLimit([k,l])) return "Out of Limit";

    return "ok"

}

console.log(knightMoves([5, 1], [0, 7]))
console.log(moves([0,0]));