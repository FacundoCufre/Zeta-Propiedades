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

const conteiner = document.getElementById("conteiner")


/* MOSTRAR PREMENU                                           --------------------------------------  */

function mostrarPremenu(){
    const todos = document.getElementById("todos")
    const favs = document.getElementById("favs")
    const inicio = document.getElementById("inicio")
    const compar = document.getElementById("compar")
    const info = document.getElementById("info")
    const comparar = document.getElementById("comparar")
    const filtros = document.getElementById("filtros")
    const todasProps = document.getElementById("todas--props")
    const misFavs = document.getElementById("mis--favs")

    inicio.addEventListener("click", ()=>{
        info.classList.add("show2")

        filtros.classList.remove("show")

        misFavs.classList.remove("show2")

        todasProps.classList.remove("show2")

        comparar.classList.remove("show2")

        
    })

    todos.addEventListener("click", ()=>{
        info.classList.remove("show2")

        filtros.classList.add("show")

        misFavs.classList.remove("show2")

        todasProps.classList.add("show2")

        comparar.classList.remove("show2")

    })

    favs.addEventListener("click", ()=>{
        info.classList.remove("show2")

        filtros.classList.remove("show")

        todasProps.classList.remove("show2")

        misFavs.classList.add("show2")

        comparar.classList.remove("show2")

    })

    compar.addEventListener("click", ()=>{
        info.classList.remove("show2")

        filtros.classList.remove("show")

        misFavs.classList.remove("show2")

        todasProps.classList.remove("show2")

        comparar.classList.add("show2")

        
    })
}


/* BOTONES DEL MENU                --------------------------------------  */

function mostrarFiltros(){
    mostrarMenuTransacciones()
    mostrarMenuPrecio()
}

        /* MENU TIPOS DE PROPIEDADES */

function mostrarMenuCategorias(x){
    x.forEach((categoria)=>{
        const {id, nombre} = categoria
        const filtro = document.getElementById("propiedades")
        const myBtn = document.createElement("div");
        myBtn.setAttribute("id", `boton--${id}`)
        myBtn.setAttribute("id", `boton--filtro`)
        
        myBtn.innerHTML=`<span>${nombre}</span>`
        myBtn.addEventListener("click", ()=>{
            mostrarPropiedadesFiltradasTipo(id)
        })

        filtro.appendChild(myBtn);})
}


        /* MENU TIPOS DE TRANSACCION */

function mostrarMenuTransacciones(){
    transacciones.forEach((transaccion)=>{
        const {id, nombre} = transaccion
        const filtro = document.getElementById("transacciones")
        const myBtn = document.createElement("div");
            myBtn.setAttribute("id", `boton--${id}`)
            myBtn.setAttribute("id", `boton--filtro`)
    
            myBtn.innerHTML=`<span>${nombre}</span>`
            myBtn.addEventListener("click", ()=>{mostrarPropiedadesFiltradasTransaccion(id)})
        
        filtro.appendChild(myBtn);})
}


        /* MENU PRECIOS */

function mostrarMenuPrecio(){
        
        const filtro = document.getElementById("ingresar--precio")

        let precio = document.getElementById("precio") 

        const myBtn = document.createElement("div");
            myBtn.setAttribute("id", `boton--precio`)
            myBtn.innerHTML=`<span>FILTRAR</span>`
            myBtn.addEventListener("click", ()=>{
                new Promise ((resolve, reject)=>{
                    if(precio.value >= 6000){
                        resolve(mostrarPropiedadesFiltradasPrecio(precio.value))
                    }
                    else{
                        reject(noValido())
                    } 
                })
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

function mostrarPropiedadesFiltradasTipo(x){
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

function mostrarPropiedadesFiltradasTransaccion(x){
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

function mostrarPropiedadesFiltradasPrecio(x){
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

/* AGREGAR COMPARACION                                   --------------------------------------  */

comps = new Comparaciones([]);
let aComparar = 0

function evaluarCompar(x){
    aComparar < 2 ? agregarCompar(x) : Toastify({
        text: "Solo puedes comparar 2 propiedades a la vez",
        duration: 3000,
        gravity: "top",
        style: {
            background: "blue",
            color: "white",
        }
    }).showToast()
}

function agregarCompar(x){
    let props = propiedades.map(el=>el.id)
    let index = props.find(el=>el===x)
    let fav = propiedades[index]
    comps.addComp(fav);
    actualizarComps()
    aComparar++
    aComparar === 2 && compara()
    Toastify({
        text: "Propiedad agradada a comparación",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#364bc2",
            color: "black",
        }
    }).showToast()
}

function actualizarComps(){
    let contenedor3 = document.getElementById("conteinerCompar");
    contenedor3.innerHTML=``;
    let comparacion = comps.propiedades;

    comparacion.forEach(element => {
        const {propiedad:{id}} = element
        const prop = document.createElement(`div`)
        prop.setAttribute("class", "propiedadComparada__div")
        prop.setAttribute("id", `comparada--${id}`)

        mostrarPropComparada(prop, element)

        contenedor3.appendChild(prop);
    });
}

function compara(){
    const ambs1 = comps.propiedades[0].propiedad.ambs
    const habits1 = comps.propiedades[0].propiedad.habits
    const baños1 = comps.propiedades[0].propiedad.baños

    const ambsid1 = document.getElementById(`ambs--${comps.propiedades[0].propiedad.id}`)
    const habitsid1 = document.getElementById(`habits--${comps.propiedades[0].propiedad.id}`)
    const bañoid1 = document.getElementById(`baños--${comps.propiedades[0].propiedad.id}`)

    const ambs2 = comps.propiedades[1].propiedad.ambs
    const habits2 = comps.propiedades[1].propiedad.habits
    const baños2 = comps.propiedades[1].propiedad.baños

    const ambsid2 = document.getElementById(`ambs--${comps.propiedades[1].propiedad.id}`)
    const habitsid2 = document.getElementById(`habits--${comps.propiedades[1].propiedad.id}`)
    const bañoid2 = document.getElementById(`baños--${comps.propiedades[1].propiedad.id}`)

    ambs1 >= ambs2 ? ambsid1.setAttribute("style", "background-color: green;") : ambsid1.setAttribute("style", "background-color: red;")
    ambs2 >= ambs1 ? ambsid2.setAttribute("style", "background-color: green;") : ambsid2.setAttribute("style", "background-color: red;")

    habits1 >= habits2 ? habitsid1.setAttribute("style", "background-color: green;") : habitsid1.setAttribute("style", "background-color: red;")
    habits2 >= habits1 ? habitsid2.setAttribute("style", "background-color: green;") : habitsid2.setAttribute("style", "background-color: red;")

    baños1 >= baños2 ? bañoid1.setAttribute("style", "background-color: green;") : bañoid1.setAttribute("style", "background-color: red;")
    baños2 >= baños1 ? bañoid2.setAttribute("style", "background-color: green;") : bañoid2.setAttribute("style", "background-color: red;")
}

/* ELIMINAR COMPARACION                                   --------------------------------------  */

function eliminarComp(x){
    let props = propiedades.map(el=>el.id)
    let index = props.find(el=>el===x)
    let comp = propiedades[index]
    comps.elimComp(comp);
    actualizarComps()
    Toastify({
        text: "Propiedad eliminada de comparación",
        duration: 3000,
        gravity: "bottom",
        style: {
            background: "#364bc2",
            color: "black",
        }
    }).showToast()
}