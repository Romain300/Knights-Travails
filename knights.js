function checkLimit([i, j]) {
    if(i < 0 || i > 7 || j < 0 || j > 7) return false;
    return true;
};

function movesAvailable([i,j]) {
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

    // Node allows to keep track of the data;
    const possibleMoves = totalMoves.filter((data) => checkLimit(data)).map((data) => { 
        data = new Node(data);
        data.previous = null;
        return data;
    });
    return possibleMoves;

};

class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
    }
}



function knightMoves([i, j], [k, l]) {
    if(i === k && j === l) return 0;

    if(!checkLimit([i,j])) return "Out of Limit";
    if(!checkLimit([k,l])) return "Out of Limit";

    let movesVisited = new Set();
    let moves = [];
    const listOfMoves = [];
    moves.push(new Node([i, j]));
   
    while(moves.length > 0) {
        let currentNode = moves.shift();
        let valueString = currentNode.value.toString();

        if (currentNode.value[0] === k && currentNode.value[1] === l) {
            let node = currentNode;
    
            while(node) {
                listOfMoves.unshift(node.value);
                node = node.previous; 
            }

            return listOfMoves;
        };

        movesVisited.add(valueString);

        let newMoves = movesAvailable(currentNode.value);


        for ( let newMove of newMoves) {

            newMove.previous = currentNode;

            if (!movesVisited.has(newMove.value.toString())) {
                
                moves.push(newMove);
            }
        };
    };
};



//     function recursion([i, j], [k, l]) {
//         let moves = movesAvailable([i, j]);
//         let array = [];
//         array.push([i,j]);

//         for (let move of moves) {
//             if(move[0] === k && move[1] === l) {
//                 array.push(move);
//                 return array;
//             };     
//         };

//         for (let move of moves) {
//             return [move].concat(recursion([move[0], move[1]], [k, l]));
//         };
//     };

//    return recursion([i, j], [k, l]);

console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[7, 7]));

