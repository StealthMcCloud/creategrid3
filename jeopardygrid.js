class JeopardyGrid extends Grid {
    constructor(options) {
        options.numberOfColumns = options.categoryIDs.length
        super(options)
        this.getData(options.categoryIDs)
    }

    async getData(categoryIDs) {
        const categoryPromises = categoryIDs.map(id => {
            return fetch("http://jservice.io/api/category?id=" + id).then(res => res.json())
        })
        const categories = await Promise.all(categoryPromises)
        this.loopOverCells(categories)
    }

    loopOverCells(categories) {
        let clueIndex = 0;
        for (let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            for (let colIndex = 0; colIndex < this.numberOfColumns; colIndex++) {
                const currentCategory = categories[colIndex];
                let currentClue = currentCategory.clues[clueIndex++];
                while (!this.validateClue(currentClue)) {
                    currentClue = currentCategory.clues[clueIndex++];
                }
                currentClue.value = 100 * (rowIndex + 1);
                const currentCell = this.rows[rowIndex][colIndex];
                currentCell.addClue(currentClue);
            }
        }
    }

    validateClue (clue) {
        if (clue && clue.question && clue.answer && clue.question.length > 1) return true

        return false
    }

    onClick(cell) {
        cell.element.innerHTML = '';
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.appendChild(document.createTextNode(cell.question));
        cell.element.appendChild(questionElement);
    }
}

class JeopardyCell extends Cell {
    constructor(options) {
        super(options)
    }

    addClue(clue) {
        this.question = clue.question || 'n/a';
        this.answer = clue.answer || 'n/a';
        this.pointValue = clue.value || 100;

        const valueElement = document.createElement("div");
        valueElement.classList.add('point-value');
        valueElement.appendChild(document.createTextNode(this.pointValue));
        this.element.appendChild(valueElement);
    }
}