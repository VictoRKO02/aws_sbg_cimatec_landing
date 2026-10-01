// Build a deterministic GitHub-style contribution grid.
const board = document.getElementById("contributionBoard");

if (board) {
  const pattern = [
    0,0,1,0,0,2,0,1,0,3,0,0,1,0,2,0,0,1,
    0,1,1,0,2,3,1,2,0,4,1,0,2,1,3,0,1,2,
    1,2,0,2,3,4,2,1,1,3,2,1,3,2,4,1,2,0,
    0,1,2,1,2,3,4,2,0,2,3,2,2,3,4,2,0,1,
    1,0,1,2,1,2,3,4,1,1,2,3,1,2,3,4,1,0,
    0,1,0,1,2,1,2,3,0,1,1,2,3,1,2,3,2,1,
    0,0,1,0,1,2,1,2,0,0,1,1,2,0,1,2,1,0
  ];

  pattern.forEach((level) => {
    const cell = document.createElement("span");
    cell.className = `contrib-cell${level ? ` level-${level}` : ""}`;
    board.appendChild(cell);
  });
}
