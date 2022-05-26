const productos = [
    {
        id:1,
        nombre:'Chaqueta de Invierno',
        precio: 500,
        imagen:'../images/p1.jpg',
        tipo:'sport',
        inventario:20,
        detalles:'Chaqueta de invierno para mujer'
    },
    {
        id:2,
        nombre:'Tennis para hombres color rojo',
        precio: 125,
        imagen:'../images/p2.jpg',
        tipo:'sport',
        inventario:10,
        detalles:'Zapatos deportivos para hombre con cámara de aire'
    },
    {
        id:3,
        nombre:'Chaqueta de cuero para hombre',
        precio: 700,
        imagen:'../images/p3.jpg',
        tipo:'casual',
        inventario:30,
        detalles:'Chaqueta de cuero de becerro color marrón'
    },
    {
        id:4,
        nombre:'Jeans Clásicos para mujer',
        precio: 120,
        imagen:'../images/p4.jpg',
        tipo:'casual',
        inventario:5,
        detalles:'Jeans Clásicos para mujer con corte ajustado'
    }
]

export const obtenerProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    })
}
