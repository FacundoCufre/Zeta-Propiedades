function mostrarPropConFav (x, y){
    
    x.innerHTML =  ` <div class="propiedad__div">
                            <div class="boton--fav" onclick="agregarFav(${y.id})"><i class="fa-solid fa-star"></i></div>
                            <div class="boton--comp" onclick="evaluarCompar(${y.id})"><i class="fa-solid fa-scale-balanced"></i></i></div>
                            <div class="imagen">
                                <img width=100% src="img/${y.id}.jpg" alt="${y.nombre}">
                            </div>
                            <div class="texto">
                                <div class="nombre"><span>${y.nombre}</span></div>
                                <div class="transaccion">
                                    <div class="tipo"><span>${y.transaccion} </span></div>
                                    <div class="precio"><span>${y.precio}</span></div>
                                </div>
                            </div>
                        </div>`
}

function mostrarPropSinFav (x, y){
    x.innerHTML =  ` <div class="propiedad__div">
                            <div class="boton--elim" onclick="eliminarFav(${y.propiedad.id})"><i class="fa-solid fa-trash-can"></i></div>
                            <div class="imagen">
                                <img width=100% src="img/${y.propiedad.id}.jpg" alt="${y.propiedad.nombre}">
                            </div>
                            <div class="texto">
                                <div class="nombre"><span>${y.propiedad.nombre}</span></div>
                                <div class="transaccion">
                                    <div class="tipo"><span>${y.propiedad.transaccion} </span></div>
                                    <div class="precio"><span>${y.propiedad.precio}</span></div>
                                </div>
                            </div>
                        </div>`
}

function mostrarPropComparada(x, y){
    x.innerHTML =  ` 
                            
                            <div class="imagen">
                                <div class="boton--fav" onclick="agregarFav(${y.propiedad.id})"><i class="fa-solid fa-star"></i></div>
                                <div class="boton--elim2" onclick="eliminarComp(${y.propiedad.id})"><i class="fa-solid fa-trash-can"></i></div>
                                <img width=100% src="img/${y.propiedad.id}.jpg" alt="${y.propiedad.nombre}">
                            </div>
                            <div>
                                <span>${y.propiedad.nombre}</span>
                            </div>
                            <div>
                                <span>${y.propiedad.precio}</span>
                            </div>
                            <div id="ambs--${y.propiedad.id}">
                                <span>Ambientes: ${y.propiedad.ambs}</span>
                            </div>
                            <div id="habits--${y.propiedad.id}">
                                <span>Habitaciones: ${y.propiedad.habits}</span>
                            </div>
                            <div id="baños--${y.propiedad.id}">
                                <span>Baños: ${y.propiedad.baños}</span>
                            </div>
                            <div>
                                <span>Balcón: ${y.propiedad.balcon}</span>
                            </div>
                            <div>
                                <span>Patio: ${y.propiedad.patio}</span>
                            </div>
                            <div>
                                <span>Garaje: ${y.propiedad.garaje}</span>
                            </div>`
}