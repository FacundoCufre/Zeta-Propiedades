function mostrarPropConFav (x, y){
    
    x.innerHTML =  ` <div class="propiedad__div">
                            <div class="boton--fav" onclick="agregarFav(${y.id})"><i class="fa-solid fa-star"></i></div>
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

const conteiner = document.getElementById("conteiner")


/* MOSTRAR PREMENU                                           --------------------------------------  */

function mostrarPremenu(){
    const todos = document.getElementById("todos")
    const favs = document.getElementById("favs")
    const filtros = document.getElementById("filtros")
    const todasProps = document.getElementById("todas--props")
    const misFavs = document.getElementById("mis--favs")
    const titulo1 = document.getElementById("titulo1")

    todos.addEventListener("click", ()=>{
        filtros.classList.add("show")

        misFavs.classList.remove("show2")

        todasProps.classList.add("show2")

    })

    favs.addEventListener("click", ()=>{
        filtros.classList.remove("show")

        todasProps.classList.remove("show2")

        misFavs.classList.add("show2")

    })
}


/* BOTONES DEL MENU                --------------------------------------  */

function mostrarFiltros(){
    mostrarMenu()
    mostrarMenu2()
    mostrarMenu3()
    
}

        /* MENU TIPOS DE PROPIEDADES */

function mostrarMenu(){
    categorias.forEach((categoria)=>{
        const {id, nombre} = categoria
        const filtro = document.getElementById("propiedades")
        const myBtn = document.createElement("div");
        myBtn.setAttribute("id", `boton--${id}`)
        myBtn.setAttribute("id", `boton--filtro`)
        
        myBtn.innerHTML=`<span>${nombre}</span>`
        myBtn.addEventListener("click", ()=>{
            mostrarPropiedadesFiltradas(id)
        })

        filtro.appendChild(myBtn);})
}


        /* MENU TIPOS DE TRANSACCION */

function mostrarMenu2(){
    transacciones.forEach((transaccion)=>{
        const {id, nombre} = transaccion
        const filtro = document.getElementById("transacciones")
        const myBtn = document.createElement("div");
            myBtn.setAttribute("id", `boton--${id}`)
            myBtn.setAttribute("id", `boton--filtro`)
    
            myBtn.innerHTML=`<span>${nombre}</span>`
            myBtn.addEventListener("click", ()=>{mostrarPropiedadesFiltradas2(id)})
        
        filtro.appendChild(myBtn);})
}


        /* MENU PRECIOS */

function mostrarMenu3(){
        
        const filtro = document.getElementById("ingresar--precio")

        let precio = document.getElementById("precio") 

        const myBtn = document.createElement("div");
            myBtn.setAttribute("id", `boton--precio`)
            myBtn.innerHTML=`<span>FILTRAR</span>`
            myBtn.addEventListener("click", ()=>{
                !isNaN(precio) ? mostrarPropiedadesFiltradas3(precio.value) : noValido()
                precio < 6000 && noValido()
            })

        filtro.appendChild(myBtn);

    function noValido(){
        Toastify({
            text: "Precio no válido",
            duration: 3000,
            style: {
                background: "rgb(225, 225, 225)",
                color: "rgb(97, 30, 30)",
            }
        }).showToast()
    }
}



/* MOSTRAR TODAS LAS PROPIEDADES SIN FILTRAR                 --------------------------------------  */

function mostrarPropiedades (){
    propiedades.forEach(element => {
        const {id} = element
        const prop = document.createElement("div")
        prop.setAttribute("class", "propiedad")
        prop.setAttribute("id", `propiedad--${id}`)
       
        mostrarPropConFav(prop, element)

        conteiner.appendChild(prop);
    });
}


/* MOSTRAR LAS PROPIEDADES FILTRADAS POR TIPO               --------------------------------------  */

function mostrarPropiedadesFiltradas(x){
    const propiedadesFiltradas = filtrarPropiedades(x)
    conteiner.innerHTML = ``
    propiedadesFiltradas.forEach(element => {
        const {id} = element
        const prop = document.createElement("div")
        prop.setAttribute("class", "propiedad")
        prop.setAttribute("id", `propiedad--${id}`)

        mostrarPropConFav(prop, element)

        conteiner.appendChild(prop);
    });
}

function filtrarPropiedades(x){
    return propiedades.filter(propiedad=>propiedad.tipo===x)
}



/* MOSTRAR LAS PROPIEDADES FILTRADAS POR TRANSACCION               --------------------------------------  */

function mostrarPropiedadesFiltradas2(x){
    const propiedadesFiltradas = filtrarPropiedades2(x)
    conteiner.innerHTML = ``
    propiedadesFiltradas.forEach(element => {
        const {id} = element
        const prop = document.createElement(`div`)
        prop.setAttribute("class", "propiedad")
        prop.setAttribute("id", `propiedad--${id}`)

        mostrarPropConFav(prop, element)

        conteiner.appendChild(prop);
    });
}

function filtrarPropiedades2(x){
    return propiedades.filter(propiedad=>propiedad.accion===x)
}

/* MOSTRAR LAS PROPIEDADES FILTRADAS POR PRECIO               --------------------------------------  */

function mostrarPropiedadesFiltradas3(x){
    const propiedadesFiltradas = propiedadesFiltradas3(x)
    conteiner.innerHTML = ``
    propiedadesFiltradas.forEach(element => {
        const {id} = element
        const prop = document.createElement(`div`)
        prop.setAttribute("class", "propiedad")
        prop.setAttribute("id", `propiedad--${id}`)

        mostrarPropConFav(prop, element)

        conteiner.appendChild(prop);
    });
}

function propiedadesFiltradas3(x){
    const propiedadesFiltradas = []
    propiedades.forEach(element => {
        element.valor <= x && propiedadesFiltradas.push(element)
    })
    return propiedadesFiltradas
}



/* AGREGAR A FAVORITOS                                   --------------------------------------  */

const data = JSON.parse(localStorage.getItem("MIS_FAVS")) || []
misFavs = new Favs(data);

function agregarFav(x){
    let props = propiedades.map(el=>el.id)
    let index = props.find(el=>el===x)
    let fav = propiedades[index]
    misFavs.addProducto(fav);
    actualizarFavs()
    Toastify({
        text: "Propiedad agregada a favoritos",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#a27116",
            color: "white",
        }
    }).showToast()
}

function actualizarFavs(){
    let contenedor2 = document.getElementById("conteiner2");
    contenedor2.innerHTML=``;
    let prods = misFavs.propiedades;

    prods.forEach(element => {
        const {propiedad:{id}} = element
        const prop = document.createElement(`div`)
        prop.setAttribute("class", "propiedad")
        prop.setAttribute("id", `propiedad--${id}`)

        mostrarPropSinFav(prop, element)

        contenedor2.appendChild(prop);
    });
    misFavs.guardar();
}

/* ELIMINAR FAVORITOS                                   --------------------------------------  */

function eliminarFav(x){
    let props = propiedades.map(el=>el.id)
    let index = props.find(el=>el===x)
    let fav = propiedades[index]
    misFavs.elimProducto(fav);
    actualizarFavs()
    Toastify({
        text: "Propiedad eliminada de favoritos",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "rgb(97, 30, 30)",
            color: "white",
        }
    }).showToast()
}
