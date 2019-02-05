

const counter = document.getElementById('count');
const minefield = document.getElementById('minefield');
const gradeSelector = document.getElementById('grade');


const gradeMap = {
    'easy': {
        x: 10,
        y: 10,
        count: 9,
    },
    'normal': {
        x: 16,
        y: 16,
        count: 40,
    },
    'hard': {
        x: 30,
        y: 16,
        count: 99,
    }
};

let dead = false;

let mineMatrix = [[{ mine: false, handled: false }]];


const dig = (gridX, gridY) => {
    const grid = mineMatrix[gridX][gridY];
    if (grid === true) {
        alert('bomb!');
        return -1;
    }
    return detect(gridX, gridY);
};


const detect = (gridX, gridY) => {
    const grid = mineMatrix[gridX][gridY];

    const neighbors = [
        [gridX - 1, gridY - 1],
        [gridX - 1, gridY],
        [gridX - 1, gridY + 1],
        [gridX, gridY - 1],
        [gridX, gridY + 1],
        [gridX + 1, gridY - 1],
        [gridX + 1, gridY],
        [gridX + 1, gridY + 1],
    ];
    let count = 0;
    neighbors.forEach(neighbor => {
        const column = mineMatrix[neighbor[0]];
        // 数组不越界能取到内容才继续
        if (column) {
            const grid = column[neighbor[1]];
            if (grid.mine === true) {
                count += 1;
            }
        }
    });

    grid.handled = true;

    if (count === 0) {
        neighbors.forEach(neighbor => {
            const [x, y] = neighbor;
            const column = mineMatrix[x];
            // 数组不越界能取到内容才继续
            if (column) {
                const grid = column[y];
                if (!grid.handled) {
                    detect(x, y);
                }
            }
        });
    }
    document.querySelector(`.grid[data-id=${gridX}-${gridY}]`)
        .textContent = count;
    return count;
};