const fs = require("fs");

function importar(marca){
    const data1 =fs.readFileSync(`./datos/figuras1.json`, "utf-8"); 
    const data2 =fs.readFileSync(`./datos/figuras2.json`, "utf-8");
    const data3 =fs.readFileSync(`./datos/figuras3.json`, "utf-8");

    const collectibles1 = JSON.parse(data1);
  const collectibles2 = JSON.parse(data2);
  const collectibles3 = JSON.parse(data3);

  const collectibles = [
    ...collectibles1,
    ...collectibles2,
    ...collectibles3
];
    const filteredCollectibles = collectibles.filter(collectible => collectible.marca === marca);
  
    return filteredCollectibles;

} 


module.exports = importar;
