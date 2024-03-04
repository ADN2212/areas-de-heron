(function addAndRemoveTrianglesModule() {
  var addTriangleBtn = document.getElementById("add-triangle-btn");
  var trianglesTableBody = document.getElementById("triangles-table-body");
  var rowId = 1;

  addTriangleBtn.addEventListener("click", addRowTotable);

  function addRowTotable() {
    let a = parseValue(document.getElementById("a").value);
    let b = parseValue(document.getElementById("b").value);
    let c = parseValue(document.getElementById("c").value);

    if (isValidTriangle(a, b, c)) {
      trianglesTableBody.innerHTML += `
			<tr id=row-${rowId}>
				<td>
					${rowId}
				</td>
				<td>
					${a}
				</td>
				<td>
					${b}
				</td>
				<td>
					${c}
				</td>
				<td>
					${calcSemiperimeter(a, b, c)}
				</td>
				<td>
					<button id=row-${rowId} class="quitBtns">
						Borrar
					</button>
				</td>
			</tr>
		`;
      //Deberia haber una forma mas eficiente de hacer esto:
      for (let btn of document.getElementsByClassName("quitBtns")) {
        btn.onclick = () => {
          removeRow(btn.id);
        };
      }
      rowId += 1;
    } else {
      alert(
		//Esto se podria mejorar usando elementos del DOM para crear el mensaje.
        "Estas longitudes no cumplen con la desigualdad triangular, por lo que no es posible formar un triángulo con estas."
      );
    }
  }

  function parseValue(val) {
    if (!val) {
      return 0;
    }
    return Number(val);
  }

  function calcSemiperimeter(a, b, c) {
    return (a + b + c) / 2;
  }

  function removeRow(btnId) {
    let row = document.getElementById(btnId);
    row.remove();
  }

  //Ver el teorema de la desigualdad triangular
  function isValidTriangle(a, b, c) {
    return a < b + c && b < a + c && c < a + b;
  }
})();
