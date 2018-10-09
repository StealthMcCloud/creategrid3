const categoryGrid = new Grid({
    numberOfRows: 1,
    numberOfColumns: 6,
    targetElement: document.querySelector("main"),
    cellClasses: ["topCell"]

})

const questionGrid = new JeopardyGrid({
    categoryIDs: [275, 240, 195, 130, 105],
    cellConstructor: JeopardyCell,
    numberOfRows: 5,
    targetElement: document.querySelector("main"),
    cellClasses: ["bottomCell"],
})