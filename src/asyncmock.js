const productos = [
    {
        id:1,
        nombre:'Chaqueta de invierno',
        precio: 500,
        imagen:'../images/p1.jpg',
        tipo:'sport',
        gender:'mujer',
        inventario:20,
        detalles:'Chaqueta de invierno para mujer',
        descripcion:'Chaqueta especialmente diseñada para hacer deporte, con aislante térmico e impermeabilidad. También tiene cierre y protector anti-robo para los bolsillos'
    },
    {
        id:2,
        nombre:'Tennis para Hombre',
        precio: 125,
        imagen:'../images/p2.jpg',
        tipo:'sport',
        gender:'hombre',
        inventario:10,
        detalles:'Zapatos deportivos para hombre con cámara de aire',
        descripcion:'Zapatos deportivos para hombre con diseño moderno y reflexión nocturna. Tiene cámara de aire y ventilación en la parte delantera.'
    },
    {
        id:3,
        nombre:'Chaqueta de cuero para hombre',
        precio: 700,
        imagen:'../images/p3.jpg',
        tipo:'casual',
        gender:'hombre',
        inventario:30,
        detalles:'Chaqueta de cuero de becerro color marrón',
        descripcion:'Chaqueta de cuero de becerro color marrón con botones metálicos y de alta duración. Refuerzo interno de alta calidad para más comodidad y comfort.'
    },
    {
        id:4,
        nombre:'Jeans clásicos para mujer',
        precio: 120,
        imagen:'../images/p4.jpg',
        tipo:'casual',
        gender:'mujer',
        inventario:5,
        detalles:'Jeans Clásicos para mujer con corte ajustado',
        descripcion:'Jeans clásicos para mujer inspirados en la década del 70. Al mejor estilo del rock de la época, esta prenda tiene un corte clásico y viene en diferentes colores.'
    }
]

export const obtenerProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(productos);
        }, 1000);
    })
}

export const traerProductoPorId = (myId) => {
    return new Promise((res) => {
        setTimeout(() => {
            for(let i = 0; i < productos.length; i++){
                if(productos[i].id === myId){
                    res(productos[i]);
                }
            }
        }, 1000);
    });
}

export const obtenerProductosPorCategoria = (cat) => {
    return new Promise(res => {
        setTimeout(_ => {
            const result = [];
            for(let i = 0; i < productos.length; i++){
                if(productos[i].tipo === cat || productos[i].gender === cat){
                    result.push(productos[i]);
                }
            }
            res(result);
        })
    })
}
