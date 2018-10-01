class Cell {
    constructor(options) {
        this.cellConstructor = options.cellConstructor || Cell;
        this.numberOfRows = options.numberOfRows;
        this.numberOfColumns = options.numberOfColumns;
        this.targetElement = options.targetelement || document.body;
        this.cellClasses = options.cellClasses || [];
        this.gridElement. this.createGridElement();
        this.rows = [];
        thi.createRows();


}

    createRows() {

    }

    createrowElement() {

    }

    createCells() {

    }
    findCellByIndexes() {

    }
}

class Cell {
    constructor(rowIndex, colIndex, cellClasses) {
        console.log(rowIndex)
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.cellClasses || [];
        this.element = this.createElement();

    }
}
