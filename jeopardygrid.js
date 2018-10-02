class JeopardyGrid extends Grid {
    constructor(options) {
        super(options)
        this.getData(options.categoryIDs)
        
    }
 
    async getData(categoryIDs){
     const categoryPromises = categoryIDs.map(id =>
            fetch("http://jservice.io/api/categor?id=" + id).then(res => res.json()),
     )
        const categories = await Promise.all(categoryPromises)
        this.loopOverCells(categories)
    }

    loopOverCells(categories) {
        let clueIndex = 0;
        for(let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            for (let colIndex = 0; colIndex < this.numberOfColumns; colIndex++) {
                const currentCategory = categories[colIndex];
                let currentClue = currentCategory.clues[clueIndex++];
                while (!this.validateClue(currentClue)) {

                }
                currentClue.value = 100  (rowIndex + 1);
                const currentCell = this.rows[rowIndex][colIndex];
                currentCell.addClue(currentClue);
            }
        }
    }

    onClick (cell) {
        cell.element.innerHTML = '';
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.appendChild(document.createTextNode(cell.question));
        cell.element.appendChild(questionElement);
    }
}

class JeoparyCell extends Cell {
    constructor(options) {
        super(options)
    }

    addClue (clue) {
        this.question = clue.question || 'n/a';
        this.answer = clue.answer || 'n/a';
        this.pointValue = clue.value || 100;

        const valueElement = document.createElement("div");
        valueElement.classList.add('point-value');
        valueElement.appendChild(document.createTextNode(this.pointValue));
        this.element.appendChild(valueElement);
    }
}

    
    
    

