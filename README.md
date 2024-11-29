# Knight's Shortest Path Finder

This project finds the **shortest path** a knight must take to move from one position to another on a chessboard using **Breadth-First Search (BFS)**.

## Functions

### `checkLimit([i, j])`
Checks if the position `[i, j]` is within the 8x8 chessboard bounds.

#### Returns:
- `true` if inside bounds, `false` otherwise.

### `movesAvailable([i, j])`
Returns all valid moves a knight can make from position `[i, j]`.

#### Returns:
- An array of valid moves as `[x, y]` coordinates.

### `knightMoves([i, j], [k, l])`
Finds the **shortest path** for a knight to move from `[i, j]` to `[k, l]`.

#### Returns:
- An array of positions representing the shortest path.

## Example Usage

```javascript
console.log(knightMoves([0, 0], [7, 7]));
// Output: [ [0, 0], [2, 1], [4, 0], [6, 1], [7, 3], [6, 5], [7, 7] ]
console.log(knightMoves([0, 0], [3, 3]));
// Output: [ [0, 0], [2, 1], [3, 3] ]
```

## How It Works

- `knightMoves` uses **BFS** to explore all possible knight moves from the start position.
- It tracks the shortest path using a `Node` class for backtracking.
- It returns the shortest path once the destination is reached.

## License

MIT License.