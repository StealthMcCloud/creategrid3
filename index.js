//two grids one on top of the other
//data.js grid.js index.js html, styles,
//grid.js
class Cell {


    createrow
}

//we need 67, 780, 227, 223, 184, 680 in fetch
//in jeopardygrid.js
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
                this.addClueToCell(currentCell, currentClue)
            }
        }
    }
    addClueToCell (cell, clue) {
        cell.question = clue.question,
        cell.answer = clue.answer,
        cell.pointValue = clue.value || 100,

       
    }
 }




 //in index.js
 const categoryGrid = new Grid({
     numberofrows: 1,
     numberofcolumns: 6,
     targetelement: document.querySelector("main"),
     cellClasses: ["topCell"]

 })

 const questionGrid = new Grid({
     numberofrows: 5,
     numberofcolumns:categories.length,
     targetelement: document.querySelector("main"),
     cellClasses: ["bottomCell"]

 })


