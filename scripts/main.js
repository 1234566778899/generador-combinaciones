function combinations(elements, length) {
    // Si length es 0, devuelve una array vacía
    if (length === 0) {
        return [[]];
    }

    // Si la array de elementos es vacía, devuelve una array vacía
    if (elements.length === 0) {
        return [];
    }

    // Obtén todas las combinaciones de los elementos sin el primer elemento
    const restCombinations = combinations(elements.slice(1), length - 1);

    // Añade el primer elemento a cada una de las combinaciones obtenidas
    const firstCombinations = restCombinations.map(comb => [elements[0], ...comb]);

    // Obtén todas las combinaciones de los elementos sin el primer elemento
    const rest = combinations(elements.slice(1), length);

    // Concatena las combinaciones obtenidas con y sin el primer elemento
    return [...firstCombinations, ...rest];
}

// Prueba la función con un ejemplo
function resultado() {
    let min = parseInt(document.querySelector('.min').value);
    let max = parseInt(document.querySelector('.max').value);
    let long = parseInt(document.querySelector('.long').value);

    const elements = [];
    for (let i = min; i <= max; i++) {
        elements.push(i);
    }
    let combi = combinations(elements, long);

    $('.resultado').html('');
    $('.resultado').html(`<tr>
    <td style="width: 20px;">N°</td>
    <td colspan="${long}">Combinaciones (${combi.length})</td>
    </tr>`);

    for (let i = 0; i < combi.length; i++) {
        let cadena = `<td>${i + 1}</td>`;
        for (let j = 0; j < combi[i].length; j++) {
            cadena += `<td>${combi[i][j]}</td>`;
        }
        $('.resultado').append(`<tr>${cadena}</tr>`);
    }
}