(function computeAreaModule() {
  var areaLabel = document.getElementById("total-area");
  var trianglesTableBody = document.getElementById("triangles-table-body");

  var tableChangeObserver = new MutationObserver(onTableChange);

  const config = { attributes: true, childList: true, subtree: true };
  tableChangeObserver.observe(trianglesTableBody, config);

  function onTableChange() {
    console.log("Recalculando Areas...");

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

      console.log(currentA, currentB, currentC, currentS);

      newArea += formulaHeron(currentA, currentB, currentC, currentS);
    }

    areaLabel.innerHTML = `${newArea.toFixed(3)} u^2`;
  }

  function formulaHeron(a, b, c, s) {
    //var s = (a + b + c) / 2;
    let area = Math.pow(s * (s - a) * (s - b) * (s - c), 1 / 2);
    return area;
  }
})();
