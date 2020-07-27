function Products(data) {
    //llena todo lo de la lista
        var dataProduct = data[0].dataProduct;
    this.dataProduct = [];

    this.init = function(dataProduct) {
        this.dataProduct = dataProduct;
    }

    this.getById = function(id) {
        return this.dataProduct.filter(product=> product.id === id);
    }

    this.buildHtmlProduct = function(product) {

        return `
        <article class="articulo" data-aos="slide-up" data-aos-duration="${product.dataAos}" data-aos-offset="400" data-aos-easing="ease-in-sine" >
        <img src="${product.imagen}" alt="">
        <h6>${product.nombre}</h6>
        <p>$${product.precio}</p>
        <button value="agregar al carrito" onclick="addToCart(${product.id})" class="agregar">
            <span class="icon-carro-lleno boton"></span> Agregar
        </button>
        </article>
        `
    }

    this.buildList = function(containerId, sourceProduct) {
        var container = document.getElementById(containerId);
        container.innerHTML = "";
        var html = '';

        this[sourceProduct].forEach(product => {
            html = html + this.buildHtmlProduct(product); 
        });
        
        container.innerHTML = html;
    }



}
