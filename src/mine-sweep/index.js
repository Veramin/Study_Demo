
const stepCounter = document.getElementById('step-count');
const mineCounter = document.getElementById('mine-count');
const markedCounter = document.getElementById('marked-count');
const minefield = document.getElementById('minefield');
const gradeSelector = document.getElementById('grade');
const resetor = document.getElementById('resetor');

// 重置
resetor.onclick = () => {
    start();
};

// 变换难度
gradeSelector.onchange = () => {
    start();
};

// 右键点击
minefield.oncontextmenu = (e) => {
    const coords = getGridCoords(e.target);
    if (coords) {
        mark(coords.x, coords.y);
    }
    e.preventDefault();
};

// 左键点击
minefield.onclick = (e) => {
    const coords = getGridCoords(e.target);
    if (coords) {
        dig(coords.x, coords.y);
    }
};

// 获得某个雷区方块的坐标
const getGridCoords = (target) => {
    const id = target.dataset.id;
    if (id) {
        const [x, y] = id.split('-');
        return { x: Number(x), y: Number(y) };
    }
    return null;
};

// 获得某个雷区方块元素
const getGridElem = (gridX, gridY) => {
    return document.querySelector(`.grid[data-id="${gridX}-${gridY}"]`);
};


// 难度配置映射表
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

/**
 * 获取初始状态
 */
const getResetState = () => {
    return {
        detectedCount: 0,
        gridCount: 0,
        mineCount: 0,
        grids: [],
        matrix: [[]],
        markedCount: 0,
        stepCount: 0,
        failed: false,
    };
};


// 状态
let state = null;

/**
 * 更新状态
 */
const updateStatistics = () => {
    stepCounter.textContent = state.stepCount;
    mineCounter.textContent = state.mineCount;
    markedCounter.textContent = state.markedCount;
};

/**
 * 初始化
 */
const start = () => {
    const grade =  gradeSelector.value;
    state = getResetState();
    minefield.style.pointerEvents = 'all';
    const config = gradeMap[grade];
    const gridCount = config.x * config.y;
    const mineConnt = config.count;
    const grids = [];
    for (let i = 0; i < gridCount; i++) {
        const grid = {
            mine: i < mineConnt,
            status: 'initial',
            rnd: Math.random(),
        };
        grids.push(grid);
    }
    grids.sort((a, b) => {
        return a.rnd > b.rnd ? -1 : 1;
    }).forEach((grid, index) => {
        grid.y = Math.floor(index / config.x);
        grid.x = index % config.x;
    });
    state.grids = grids;
    state.matrix = [];
    for (let i = 0; i < config.y; i++) {
        state.matrix[i] = grids.slice(i * config.x, (i + 1) * config.x);
    }

    let html = '';
    grids.forEach(grid => {
        html += `<div class='grid' data-id="${grid.x}-${grid.y}"></div>`;
    });
    minefield.innerHTML = html;
    state.mineCount = mineConnt;
    state.gridCount = gridCount;
    state.detectedCount = 0;
    minefield.style.width = (22 * config.x) + 'px';
    updateStatistics();
};


/**
 * 挖
 * @param {*} gridX 
 * @param {*} gridY 
 */
const dig = (gridX, gridY) => {
    state.stepCount += 1;
    const grid = state.matrix[gridY][gridX];
    if (grid.status !== 'initial') {
        return;
    }
    if (grid.mine === true) {
        const elem = getGridElem(gridX, gridY);
        state.failed = true;
        showResult();
        grid.status === 'doom';
        elem.classList.add('doom');
        elem.textContent = '炸';
        alert('你被炸啦!');
        minefield.style.pointerEvents = 'none';
    } else {
        detect(gridX, gridY);
    }
    updateStatistics();
};

/**
 * 探测
 * @param {*} gridX 
 * @param {*} gridY 
 */
const detect = (gridX, gridY) => {
    const grid = state.matrix[gridY][gridX];
    if (grid.status === 'detected') {
        return;
    }
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
        const column = state.matrix[neighbor[1]];
        if (column) {
            const grid = column[neighbor[0]];
            if (grid && grid.mine === true) {
                count += 1;
            }
        }
    });

    grid.status = 'detected';
    state.detectedCount++;

    const win = !state.failed &&
        state.detectedCount === state.gridCount - state.mineCount;
    const gridElem = getGridElem(gridX, gridY);
    gridElem.textContent = count || '';
    gridElem.classList.add('detected');
    if (win) {
        alert('你赢了');
        showResult();
    } else if (count === 0) {
        neighbors.forEach(neighbor => {
            const [x, y] = neighbor;
            const row = state.matrix[y];
            if (row) {
                const grid = row[x];
                if (grid && grid.status === 'initial') {
                    detect(x, y);
                }
            }
        });
    }

    return count;
};

/**
 * 标记
 * @param {*} gridX 
 * @param {*} gridY 
 */
const mark = (gridX, gridY) => {
    const grid = state.matrix[gridY][gridX];
    if (grid.status === 'detected') {
        return;
    }
    const gridElem = getGridElem(gridX, gridY);
    if (grid.status === 'initial') {
        gridElem.textContent = '雷';
        gridElem.classList.add('marked');
        grid.status = 'marked';
        state.markedCount += 1;
    } else if (grid.status === 'marked') {
        gridElem.textContent = '疑';
        gridElem.classList.replace('marked', 'doubt');
        grid.status = 'doubt';
        state.markedCount -= 1;
    } else if (grid.status === 'doubt') {
        gridElem.textContent = '';
        gridElem.classList.remove('doubt');
        grid.status = 'initial';
    }
    state.stepCount += 1;
    updateStatistics();
};

/**
 * 收尾
 */
const showResult = () => {
    state.grids.forEach(grid => {
        if (grid.mine) {
            if (grid.status === 'initial') {
                const elem = getGridElem(grid.x, grid.y);
                elem.textContent = '雷';
                elem.classList.add('marked');
            }
        } else {
            if (grid.status === 'initial') {
                detect(grid.x, grid.y);
            } else if (grid.status === 'marked') {
                const elem = getGridElem(grid.x, grid.y);
                elem.textContent = '错';
                elem.classList.replace('marked', 'mistake');
            }

        }
    });
};


start();