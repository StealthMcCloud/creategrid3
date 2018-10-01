class JeopardyGrid extends Grid {
    constructor(options) {
        super(options)
        this.getData(options.categoryIDs)
        
    }
 

 async getData(){
     const categories = categoryIDs.map(id =>
            fetch("http://jservice.io/api/categor?id=" + id).then(res => res.json()),
     )
        const categoryObjects = await Promise.all(categories)
        this.loopOverCells(categoryObject)
    }

    loopOverCells(categories) {
        for(let rowIndex = 0; rowIndex < this.numberOfRows; rowIndex++) {
            for (let colIndex = 0; colIndex <this.numberOfColumns; colIndex++) {
                const currentCategory = categories[colIndex]
                const currentClue = currentCategory.clues[rowIndex]
                const currentCell = this.rows[rowIndex] [colIndex]
                currentCell.addClueToCell(currentClue)
            }
        }
    }

    onClick (cell) {
        cell.element.innerHTML = ''
        const questionElement = document.createElement('div')
        questionElement.classList.add('question')
        questionElement.appendChild(document.createTextNode(cell.question))
    }
    
    
    addClueToCell (cell, clue) {
        cell.question = clue.question,
        cell.answer = clue.answer,
        cell.pointValue = clue.value || 100,

       
    }
 }

