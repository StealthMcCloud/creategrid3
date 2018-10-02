
 const categoryGrid = new Grid({
     numberOfRows: 5,
     numberOfColumns: 5,
     targetElement: document.querySelector("main"),
     cellClasses: ["topCell"]

 })

 const questionGrid = new Grid({
     numberOfRows: 1,
     numberOfColumns: categoryGrid.length,
     targetElement: document.querySelector("main"),
     cellClasses: ["bottomCell"]

 })


