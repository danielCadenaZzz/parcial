document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const productName = document.getElementById('productName').value;
    const category = document.getElementById('category').value;
    const unitPrice = parseFloat(document.getElementById('unitPrice').value);
    const units = parseInt(document.getElementById('units').value);


    const totalPrice = unitPrice * units;


    let discountPercent = 0;

    if (category === 'A') {
        if (units >= 1 && units <= 10) {
            discountPercent = 1;
        } else if (units >= 11 && units <= 20) {
            discountPercent = 1.5;
        } else if (units > 20) {
            discountPercent = 2;
        }
    } else if (category === 'B') {
        if (units >= 1 && units <= 10) {
            discountPercent = 1.2;
        } else if (units >= 11 && units <= 20) {
            discountPercent = 2;
        } else if (units > 20) {
            discountPercent = 3;
        }
    } else if (category === 'C') {
        if (units >= 1 && units <= 10) {
            discountPercent = 0;
        } else if (units >= 11 && units <= 20) {
            discountPercent = 0.5;
        } else if (units > 20) {
            discountPercent = 1;
        }
    }

    
    const discountValue = (totalPrice * discountPercent) / 100;
    const totalWithDiscount = totalPrice - discountValue;

 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Resultado</h2>
        <p><strong>Producto:</strong> ${productName}</p>
        <p><strong>Categoría:</strong> ${category}</p>
        <p><strong>Unidades:</strong> ${units}</p>
        <p><strong>Precio Unitario:</strong> $${unitPrice.toFixed(2)}</p>
        <p><strong>Precio Total:</strong> $${totalPrice.toFixed(2)}</p>
        <p><strong>Descuento:</strong> ${discountPercent}%</p>
        <p><strong>Valor del Descuento:</strong> $${discountValue.toFixed(2)}</p>
        <p><strong>Total con Descuento:</strong> $${totalWithDiscount.toFixed(2)}</p>
    `;

    
    resultDiv.className = `result ${category}`;
    resultDiv.style.display = 'block';
});
