
const productos =[
    {
        id: '1',
        nombre: 'Esperanza',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/5.jpg',
        categoria: 'comunes',
        descripcion: 'La variedad INIAP-Esperanza es una papa para consumo en fresco (puré y tortillas). Los tubérculos son grandes, redondos y algo aplanados. La piel es blanco-crema, con pigmentación rosada en las cejas, con ojos superficiales. La pulpa es crema',
        stock: 17,
        precio: 42
    },   
    {
        id: '2',
        nombre: 'María',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/2.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-María es una papa para procesamiento en forma de hojuelas (chips) y papa frita de tipo francesa. Los tubérculos son grandes, ligeramente aplanados en su cara inferior y superior. De piel lisa anaranjada-cremosa, con ojos grandes de profundidad media y color de pulpa blanca',
        stock: 12,
        precio: 62
    },
    {
        id: '3',
        nombre: 'Chiwila',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/25.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Chiwila es conocida localmente también como: pata de perro, pata de lobo, papa uva, chimbe, y bonga mishque. Es apta para consumo en fresco (cocida, horneada) y para fritura. La piel del tubérculo es roja con ojos muy profundos. La pulpa es crema ',
        stock: 23,
        precio: 59
    },       
    {
        id: '4',
        nombre: 'Gabriela',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/4.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Gabriela es una papa para consumo en fresco (puré y tortillas). El tamaño del tubérculo es de mediano a grande, de forma oval. La piel es rosada intensa y crema alrededor de las yemas, con ojos superficiales. La pulpa es crema.',
        stock: 11,
        precio: 58
    },
    {
        id: '5',
        nombre: 'Santa Catalina',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/1.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Santa Catalina es una papa para consumo en fresco (sopas y puré). El tamaño del tubérculo es de mediano a grande, de forma redondo-ovalada. La piel es crema con ojos superficiales. La pulpa es amarilla',
        stock: 10,
        precio: 60
    },    
    {
        id: '6',
        nombre: 'Fripapa 99',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/6.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Fripapa 99 es una papa para procesamiento (papa frita en forma de hojuelas y de tipo francesa) y consumo en fresco (sopas y puré). Los tubérculos son grandes, de forma oblonga de color rosado intenso, con ojos superficiales y bien distribuidos. La pulpa es amarilla. LLEGUE HASTA ACA',
        stock: 12,
        precio: 61
    },    
    {
        id: '7',
        nombre: 'Rosita',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/7.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Rosita es una papa para consumo en fresco. Los tubérculos son grandes, redondos con ambas caras aplanadas. Piel roja pálida, con ojos superficiales y pulpa amarilla',
        stock: 18,
        precio: 48
    },    
    {
        id: '8',
        nombre: 'Santa Isabel',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/8.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Santa Isabel, es una papa para consumo en fresco. Los tubérculos son medianos a grandes, de forma redonda-ovalada. De piel roja y lisa, con ojos superficiales y pulpa amarilla',
        stock: 22,
        precio: 57
    },    
    {
        id: '9',
        nombre: 'Soledad Cañari',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/9.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Soledad Cañari es una papa para consumo en fresco (sopas y puré). Los tubérculos son de forma oblonga, grandes, lisos. De piel blanca-crema amarilla, con ojos de profundidad mediana y pulpa amarillo-clara',
        stock: 26,
        precio: 49
    },    
    {
        id: '10',
        nombre: 'Raymipapa',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/10.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Raymipapa es una papa para consumo en fresco (sopas, puré y tortillas). Los tubérculos son de forma redonda comprimida. De piel crema, con ojos de profundidad mediana y pulpa amarillo-clara',
        stock: 64,
        precio: 39
    },    
    {
        id: '11',
        nombre: 'Suprema',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/11.jpg',
        categoria: 'comunes',
        descripcion: 'La variedad INIAP-Suprema es una papa para consumo en fresco (sopas, tortillas y puré). Los tubérculos son de forma oblonga, grandes. Piel crema, con ojos superficiales y pulpa blanca',
        stock: 141,
        precio: 29
    },    
    {
        id: '12',
        nombre: 'Papa Pan',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/12.jpg',
        categoria: 'comunes',
        descripcion: 'La variedad INIAP-Papa Pan es una papa para consumo en fresco (sopas y puré) y para papa frita tipo francés. Los tubérculos son de forma oblonga y alargada con ambas caras aplanadas. De piel blanco-crema amarilla, con ojos superficiales y pulpa blanca',
        stock: 186,
        precio: 28
    },    
    {
        id: '13',
        nombre: 'Estela',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/13.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Estela es una papa para consumo en fresco (sopas, tortillas y puré). Los tubérculos son redondos, de piel morada, con ojos de profundidad mediana y pulpa amarillo-clara',
        stock: 54,
        precio: 45
    },    
    {
        id: '14',
        nombre: 'Natividad',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/14.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Natividad es una papa para consumo en fresco (sopas, tortillas y puré) y para fritura tipo francés. Los tubérculos son oblongos, de piel amarilla con manchas rosadas, ojos de profundidad mediana y pulpa amarilla',
        stock: 47,
        precio: 66
    },    
    {
        id: '15',
        nombre: 'Santa Ana',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/15.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Santa Ana es una papa para consumo en fresco (sopas, tortillas y puré) y para fritura tipo francés. Los tubérculos son redondos. De piel amarilla con ojos y cejas de color rosado. Los ojos son superficiales y la pulpa amarilla',
        stock: 44,
        precio: 62
    },    
    {
        id: '16',
        nombre: 'Puca Shungo',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/16.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP Puca Shungo es apta para consumo en fresco (cocida y purés) y para fritura. Los tubérculos son comprimidos, con ojos profundos. El color de la piel es rojo-morado. El color predominante de la pulpa es rojo y el color secundario es crema',
        stock: 25,
        precio: 74
    },    
    {
        id: '17',
        nombre: 'Yana Shungo',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/17.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Yana Shungo es apta para consumo en fresco (cocida, cremas y purés) y para fritura. Los tubérculos son de forma oblonga, con ojos profundos. El color de la piel es marrón-intenso. El color predominante de la pulpa es morado y el color secundario es crema',
        stock: 26,
        precio: 70
    },    
    {
        id: '18',
        nombre: 'Victoria',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/18.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Victoria es apta para consumo en fresco (cocida, sopas y puré) y para fritura (hojuelas y tipo bastón). Los tubérculos son ovalados, con ojos superficiales. El color de la piel es rojo-morado-claro. El color de la pulpa es amarillo sin color secundario',
        stock: 47,
        precio: 54
    },    
    {
        id: '19',
        nombre: 'Superchola',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/19.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad Superchola es una papa para consumo fresco (sopas y puré) y para procesamiento (papa frita en forma de hojuelas y de tipo francesa). Los tubérculos son medianos, elípticos a ovalados. De piel rosada y lisa, con ojos superficiales y pulpa amarilla pálida',
        stock: 61,
        precio: 48
    },    
    {
        id: '20',
        nombre: 'Diamante',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/20.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad Diamante es una papa para consumo en fresco y para fritura en bastones. Los tubérculos son redondos, de piel crema, con ojos rosados de profundidad mediana y pulpa crema. La superficie de siembra de esta variedad ha disminuido notablemente y es casi imposible encontrar cultivo en campo.',
        stock: 12,
        precio: 80
    },    
    {
        id: '21',
        nombre: 'Clon C8 Carolina',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/21.jpg',
        categoria: 'mejoradas',
        descripcion: 'El clon C8 comúnmente conocido como “Carolina” fue generado por el CIP, seleccionado por Pedro Oyarzún, Ricardo Rodríguez y colaboradores, y todavía no ha sido liberado oficialmente. Es una papa para consumo en fresco (cocida) y para fritura tipo francés, Los tubérculos son oblongos. De piel y pulpa crema y ojos superficiales',
        stock: 15,
        precio: 65
    },    
    {
        id: '22',
        nombre: 'Clon C11 Libertad',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/22.jpg',
        categoria: 'mejoradas',
        descripcion: 'El clon C11 comúnmente conocido como “Libertad” fue generado por el CIP, seleccionado por Pedro Oyarzún, Ricardo Rodríguez y colaboradores, y todavía no ha sido liberado oficialmente. Es una papa para consumo en fresco (cocida) y para fritura tipo francés. Los tubérculos son ovalados. De piel y pulpa crema y ojos superficiales',
        stock: 17,
        precio: 62
    },    
    {
        id: '23',
        nombre: 'ICA Única',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/23.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad ICA Única es una variedad colombiana generada por el Instituto Colombiano Agropecuario (ICA). Esta papa es apta para consumo en fresco (sopas y caldos) y para fritura tipo bastón. Los tubérculos son redondos. La piel es crema con presencia de color morado en los ojos, los mismos que son superficiales. La pulpa es amarillo-claro',
        stock: 45,
        precio: 45
    },    
    {
        id: '24',
        nombre: 'Diacol Capiro',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/24.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad Diacol Capiro es una variedad colombiana generada por el Instituto Colombiano Agropecuario (ICA). Esta papa es apta para consumo en fresco (sopas y cocida con cáscara). En Colombia es la principal variedad para procesamiento tanto en hojuela como en bastón pero sus costos de producción son muy altos. Los tubérculos son redondos ligeramente aplanados. De piel roja con ojos superficiales. La pulpa es crema',
        stock: 68,
        precio: 46
    },
    {
        id: '25',
        nombre: 'Cecilia',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/3.jpg',
        categoria: 'mejoradas',
        descripcion: 'La variedad INIAP-Cecilia es una papa para consumo en fresco (sopas, tortillas y puré) y para procesamiento en forma de hojuelas. Los tubérculos son medianos, de forma elíptica. La piel es amarilla clara, con ojos superficiales. La pulpa es amarilla',
        stock: 8,
        precio: 55
    },           
    {
        id: '26',
        nombre: 'Dolores',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/26.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Dolores es conocida localmente también como: papa dura, sabrosa, nombre de mujer y pequeña. Es apta para consumo en fresco (sopas, locros y puré) y para fritura. Los tubérculos son redondos y algo aplanados. La piel es roja, con ojos muy profundos. La pulpa es amarillo-clara',
        stock: 43,
        precio: 51
    },    
    {
        id: '27',
        nombre: 'Calvache',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/27.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Calvache (papa delgada abundante). Es apta para consumo en fresco (cocida, horneada) y para fritura. Los tubérculos son alargados. La piel es de color rosado intenso, con ojos poco profundos. La pulpa es blanca',
        stock: 76,
        precio: 39
    },    
    {
        id: '28',
        nombre: 'Tushpa',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/28.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Tushpa (negra como ceniza). Es apta para consumo en fresco (cocida con cáscara, puré, cremas y al vapor) y para fritura. Los tubérculos son redondos y comprimidos. La piel es de color púrpura con pequeñas manchas amarillas. Con ojos profundos y pulpa violeta',
        stock: 61,
        precio: 53
    },    
    {
        id: '29',
        nombre: 'Coneja negra',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/29.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Coneja negra es conocida localmente también como orejas de conejo negro. Es apta para consumo en fresco (cocida con cáscara) y para fritura. Los tubérculos son elípticos con ojos superficiales. La piel es de color morado intenso y la pulpa es crema.',
        stock: 85,
        precio: 40
    },    
    {
        id: '30',
        nombre: 'Yema de huevo',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/30.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Yema de huevo es apta para consumo en fresco (cocida y al vapor) y para fritura. Los tubérculos son redondos con ojos de profundidad mediana. De piel amarilla. y pulpa amarillo-crema.',
        stock: 126,
        precio: 38
    },    
    {
        id: '31',
        nombre: 'Leona negra',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/31.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Leona negra es apta para consumo en fresco (cocida y al vapor) y para fritura. Los tubérculos son ovalados con ojos de profundidad mediana. De piel rojo-morado y pulpa amarilla con escasas manchas rojas',
        stock: 88,
        precio: 42
    },    
    {
        id: '32',
        nombre: 'Chaucha colorada',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/32.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Chaucha Colorada es apta para consumo en fresco (cocida, horneada, purés y al vapor) y para fritura. Los tubérculos son de forma elíptica, con ojos de profundidad mediana. El color de la piel es rojo-tenue. La pulpa es amarilla',
        stock: 69,
        precio: 45
    },    
    {
        id: '33',
        nombre: 'Uvilla',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/33.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Uvilla es apta para consumo en fresco (cocida, purés y locros) y para fritura. Los tubérculos son redondos, con ojos superficiales. El color de la piel es amarillo con manchas de color morado. La pulpa es crema ',
        stock: 31,
        precio: 52
    },    
    {
        id: '34',
        nombre: 'Bolona',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/34.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Bolona, es una papa para consumo en fresco ideal para sopas y puré por su consistencia harinosa. Los tubérculos son redondos-ovales presentan ligeramente aplanada la parte apical y basal. De piel crema-violácea, con ojos superficiales y pulpa crema con pigmentación en el cilindro vascular',
        stock: 25,
        precio: 57
    },    
      
    {
        id: '35',
        nombre: 'Chola',
        imagen: 'https://cipotato.org/papaenecuador/wp-content/uploads/sites/6/2017/10/35.jpg',
        categoria: 'nativas',
        descripcion: 'La variedad Chola, es una papa para consumo en fresco ideal para sopas y puré por su consistencia harinosa. Los tubérculos medianos de forma oval-elíptica, levemente aplanados en su cara superior e inferior. De piel rosada áspera, y amarilla alrededor de los ojos. Los ojos son grandes y superficiales y pulpa amarilla ',
        stock: 78,
        precio: 36
    },    
      
]


export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(productos)
    }, 500)
  })
}

export const getProductoById = (productoId) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
           resolve(productos.find(prod => prod.id === productoId)) 
        }, 500);
    })
}

export const getProductosByCategoria = (categoriaId) => {
    return new Promise( (resolve) => {
        setTimeout(() => {
           resolve(productos.filter(prod => prod.categoria === categoriaId)) 
        }, 500);
    })
}
