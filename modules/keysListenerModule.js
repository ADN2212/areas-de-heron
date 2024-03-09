/*
Este modulo se encarga de agregar los eventListeners para que se ejecuten
la funciones de agregar y eliminar triangulos.
*/
(function keysListenerModule() {
	var addTriangleBtn = document.getElementById("add-triangle-btn");
	var trianglesTableBody = document.getElementById("triangles-table-body");

	document.addEventListener("keydown", (event) => {
		
		//Ejecutar la funcion de agregar triangulos al pulsar Enter.
		if (event.key === "Enter") {
			addTriangleBtn.click();
		}

		//Obtener el ultimo triangulo y eliminarlo.
		if (event.key === "Delete") {
			let rows = trianglesTableBody.rows;
			if (rows.length !== 0) {
				rows[rows.length - 1].remove()
			}
		}
		//console.log(event.key);
	});
})();
