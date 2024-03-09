/*
Este modulo se encarga de recomputar el area total cada vez que se agrega o quita un triangulo
de la tabla.
Se utiliza una  IIFE para encapsular las variables correspondientes al modulo.
*/
(function computeAreaModule() {
  var areaLabel = document.getElementById("total-area");
  var trianglesTableBody = document.getElementById("triangles-table-body");

  //ver https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
  var tableChangeObserver = new MutationObserver(onTableChange);
  const config = { childList: true };
  tableChangeObserver.observe(trianglesTableBody, config);

  function onTableChange() {
    //console.log("Recalculando Areas...");
    let newArea = 0;
    let currentCells;
    let currentA;
    let currentB;
    let currentC;
    let currentS;

    for (let row of trianglesTableBody.rows) {
      currentCells = row.cells;
      currentA = Number(currentCells[1].innerHTML);
      currentB = Number(currentCells[2].innerHTML);
      currentC = Number(currentCells[3].innerHTML);
      currentS = Number(currentCells[4].innerHTML);

      //console.log(currentA, currentB, currentC, currentS);

      newArea += formulaHeron(currentA, currentB, currentC, currentS);
    }

    areaLabel.innerHTML = `${newArea.toFixed(3)} u^2`;
  }

  function formulaHeron(a, b, c, s) {
    let area = Math.pow(s * (s - a) * (s - b) * (s - c), 1 / 2);
    return area;
  }
})();
