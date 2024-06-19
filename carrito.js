let carrito = [];

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio});
    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        const { nombre, precio } = producto;
        const itemCarrito = document.createElement('li');
        itemCarrito.innerHTML = `
            <span>${nombre} - Precio: ${precio}</span>
            <button onclick="eliminarProducto(${index})"><i class="fas fa-minus-circle"></i></button>`;
        listaCarrito.appendChild(itemCarrito);
    });
    mostrarTotal();
}

function mostrarTotal() {
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    const totalElemento = document.getElementById('total');
    totalElemento.textContent = `$${total.toFixed(2)}`;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
}

function toggleCarrito() {
    const carrito = document.getElementById('carrito');
    carrito.style.display = carrito.style.display === 'none' ? 'block' : 'none';
}

function agregarBotonCerrarCarrito() {
    var botonCerrarCarrito = document.createElement("button");
    botonCerrarCarrito.innerHTML = "Cerrar Carrito";
    botonCerrarCarrito.onclick = function() {
        toggleCarrito(); // Oculta el carrito al cerrarlo
    };
    document.getElementById("carrito").appendChild(botonCerrarCarrito);
}