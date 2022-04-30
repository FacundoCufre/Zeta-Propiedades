
const categorias = [
    {id: 1, nombre: "CASA"},
    {id: 2, nombre: "DEPARTAMENTO"},
    {id: 3, nombre: "CABAÑA"},
    {id: 4, nombre: "PENT-HOUSE"},
]

const transacciones = [
    {id: 1, nombre: "ALQUILER"},
    {id: 2, nombre: "COMPRA"},
    {id: 3, nombre: "ALQUILER VACACIONAL"},
]

class Propiedades {
    constructor(nombre, tipo, precio, valor, accion, transaccion, id) {
        this.nombre = nombre.toUpperCase()
        this.tipo = tipo
        this.precio = precio
        this.valor = valor
        this.accion = accion
        this.transaccion = transaccion.toUpperCase()
        this.id = id
    }
}

const propiedades = [];

propiedades.push(new Propiedades("casa dos pisos", 1, "$100.000 mensual", 100000, 1, "alquiler", 0))
propiedades.push(new Propiedades("casa frente al mar", 1, "$7.000 diario", 7000, 3, "alquiler vacacional", 1))
propiedades.push(new Propiedades("casa pequeña", 1, "$60.000 mensual", 60000, 1, "alquiler", 2))
propiedades.push(new Propiedades("casa de tres pisos", 1, "$40.000.000", 40000000, 2, "compra", 3))
propiedades.push(new Propiedades("casa de playa", 1, "$6000 diario", 6000, 3, "alquiler vacional", 4))
propiedades.push(new Propiedades("casa de vecindario", 1, "$20.000.000", 200000000, 2, "compra", 5))
propiedades.push(new Propiedades("casa antigüa", 1, "$28.000.000", 28000000, 2, "compra", 6))

propiedades.push(new Propiedades("departamento monoambiente", 2, "25.000 mensual", 25000, 1, "alquiler", 7))
propiedades.push(new Propiedades("departamento 3 ambientes", 2, "$30.000.000", 30000000, 2, "compra", 8))
propiedades.push(new Propiedades("departamento de estudiantes", 2, "$20.000 mensual", 20000, 1, "alquiler", 9))
propiedades.push(new Propiedades("departamento loft moderno", 2, "$28.000.000", 28000000, 2, "compra", 10))
propiedades.push(new Propiedades("departamento loft industrial", 2, "$35.000 mensual", 35000, 1, "alquiler", 11))

propiedades.push(new Propiedades("cabaña en el bosque", 3, "$40.000 mensual", 40000, 1, "alquiler", 12))
propiedades.push(new Propiedades("cabaña en la nieve", 3, "$30.000.000", 30000000, 2, "compra", 13))
propiedades.push(new Propiedades("cabaña en lago", 3, "$10.000 diario", 10000, 3, "alquiler vacacional", 14))

propiedades.push(new Propiedades("pent-house abierto", 4, "$130.000 mensual", 130000, 1, "alquiler", 15))
propiedades.push(new Propiedades("pent-house dos pisos", 4, "$180.000 mensual", 180000, 1, "alquiler", 16))


class Favs{

    constructor(propiedades){
        this.propiedades=propiedades;
    }

    addProducto(propiedad){   
        let mapped= this.propiedades.map(element=>element.propiedad);
        
        let enFavs = mapped.find(element=>element.id===propiedad.id);

        !enFavs && this.propiedades.push({cantidad:1, propiedad})     
    }
    elimProducto(propiedad){   
        let mapped= this.propiedades.map(element=>element.propiedad);
        
        let enFavs = mapped.find(element=>element.id===propiedad.id);
        let indexed = mapped.map(element=>element.id)
        let index = indexed.indexOf(propiedad.id)

        enFavs && this.propiedades.splice(index,1)   
    }

    guardar(){
        localStorage.setItem("MIS_FAVS",JSON.stringify(this.propiedades));
    }
}
