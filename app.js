const importar = require('./collectibles.js');
const hotToys = importar("hot Toys");
const bandai = importar("Bandai");
const StarWars = importar("Star Wars");

const unifiedCollectibles =[
    hotToys,
    bandai,
    StarWars,
];
const collectibles = {
    figuras : unifiedCollectibles,
    
    listFigures : function(array = this.figuras.flat()) {
        array.forEach(({marca,nombre,precio,stock}) => {
            console.log(
                `
            -------------------------------
                MARCA: ${marca}
                NOMBRE: ${nombre}
                PRECIO: ${precio}
                STOCK: ${stock}
            --------------------------------
                `)
            }); 
            },
    figuresByBrand : function(nombre) {
        const figurimarca = this.figuras.flat().filter(figurita => figurita.marca == nombre);
        this.listFigures(figurimarca);
            },
        }
/*  console.log(collectibles.figuras);  */
collectibles.figuresByBrand("hot Toys");

module.exports = collectibles; 