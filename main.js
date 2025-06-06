}

function displayResults(results) {
    const resultsDiv = document.querySelector('#results');
    if (!resultsDiv) return;

    let table = document.createElement('table');
    table.className = 'results-table';
    table.innerHTML = `
        <thead>
            <tr>
                <th>Product</th>
                <th>Store</th>
                <th>Price</th>
                <th>Description</th>
                <th>Rating</th>
                <th>Shipping</th>
                <th>Image</th>
                <th>Buy Link</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;

    let lowestPrice = Infinity;
    let lowestPriceRow = null;

    results.forEach((result, index) => {
        const row = table.insertRow(-1);
        row.innerHTML = `
            <td>${result.name}</td>
            <td>${result.store}</td>
            <td>$${result.price.toFixed(2)}</td>
            <td>${result.description || 'N/A'}</td>
            <td>${result.rating || 'N/A'}</td>
            <td>${result.shipping || 'N/A'}</td>
            <td><img src="${result.image}" alt="${result.name}"></td>
            <td><a href="${result.buyLink}" target="_blank">Buy Now</a></td>
        `;

        if (result.price < lowestPrice) {
            lowestPrice = result.price;
            lowestPriceRow = row;
        }
    });

    if (lowestPriceRow) {
        lowestPriceRow.classList.add('best-price');
    }

    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(table);
}
