/**
 * COMERCIAL VENTURA REYES — script.js
 * Módulo central: productos, carrito, modo oscuro, utilidades compartidas
 */

// ─────────────────────────────────────────────
// PRODUCTOS
// disponible: true/false
// variantes: [{color, img}] — solo en bicicletas, cocinas y refrigeradoras
// ─────────────────────────────────────────────
const PRODUCTS = [
  // ── BICICLETAS ──
  { id:1,   name:"Bicicleta Corsario #12 Cross",                 price:450, category:"Bicicleta", img:"img/bici-cross12.jpg",    desc:"Bicicleta cross aro 12",      disponible:true,
    variantes:[{color:"Rojo",img:"img/bici-cross12-rojo.jpg"},{color:"Azul",img:"img/bici-cross12-azul.jpg"},{color:"Amarillo",img:"img/bici-cross12-amarillo.jpg"}] },
  { id:2,   name:"Bicicleta Corsario #16 Cross",                 price:600, category:"Bicicleta", img:"img/bici-cross16.jpg",    desc:"Bicicleta cross aro 16",      disponible:true,
    variantes:[{color:"Rojo",img:"img/bici-cross16-rojo.jpg"},{color:"Azul",img:"img/bici-cross16-azul.jpg"},{color:"Verde",img:"img/bici-cross16-verde.jpg"}] },
  { id:3,   name:"Bicicleta Corsario #12 Cherry",                price:350, category:"Bicicleta", img:"img/bici-cherry12.jpg",   desc:"Bicicleta cherry aro 12",     disponible:true,
    variantes:[{color:"Rojo",img:"img/bici-cherry12-rojo.jpg"},{color:"Rosado",img:"img/bici-cherry12-rosado.jpg"}] },
  { id:4,   name:"Bicicleta Corsario #16 Cherry",                price:85,  category:"Bicicleta", img:"img/bici-cherry16.jpg",   desc:"Bicicleta cherry aro 16",     disponible:true,
    variantes:[{color:"Rojo",img:"img/bici-cherry16-rojo.jpg"},{color:"Rosado",img:"img/bici-cherry16-rosado.jpg"}] },
  { id:5,   name:"Bicicleta Corsario #16 Princess",              price:450, category:"Bicicleta", img:"img/bici-princess16.jpg", desc:"Bicicleta princess aro 16",   disponible:true,
    variantes:[{color:"Rosado",img:"img/bici-princess16-rosado.jpg"},{color:"Morado",img:"img/bici-princess16-morado.jpg"}] },
  { id:6,   name:"Bicicleta Corsario #20 Scale niño",            price:600, category:"Bicicleta", img:"img/bici-scale20n.jpg",   desc:"Bicicleta scale niño aro 20", disponible:true,
    variantes:[{color:"Azul",img:"img/bici-scale20n-azul.jpg"},{color:"Rojo",img:"img/bici-scale20n-rojo.jpg"},{color:"Negro",img:"img/bici-scale20n-negro.jpg"}] },
  { id:7,   name:"Bicicleta Corsario #20 Scale niña",            price:350, category:"Bicicleta", img:"img/bici-scale20f.jpg",   desc:"Bicicleta scale niña aro 20", disponible:true,
    variantes:[{color:"Rosado",img:"img/bici-scale20f-rosado.jpg"},{color:"Morado",img:"img/bici-scale20f-morado.jpg"}] },
  { id:8,   name:"Bicicleta Corsario #20 Fox",                   price:85,  category:"Bicicleta", img:"img/bici-fox20.jpg",      desc:"Bicicleta fox aro 20",        disponible:true,
    variantes:[{color:"Negro",img:"img/bici-fox20-negro.jpg"},{color:"Rojo",img:"img/bici-fox20-rojo.jpg"}] },
  { id:9,   name:"Bicicleta Corsario #24 Doble suspension",      price:450, category:"Bicicleta", img:"img/bici-ds24.jpg",       desc:"Doble suspensión aro 24",     disponible:true,
    variantes:[{color:"Negro",img:"img/bici-ds24-negro.jpg"},{color:"Azul",img:"img/bici-ds24-azul.jpg"}] },
  { id:10,  name:"Bicicleta Corsario #24 Tracker",               price:600, category:"Bicicleta", img:"img/bici-tracker24.jpg",  desc:"Tracker aro 24",              disponible:true,
    variantes:[{color:"Negro",img:"img/bici-tracker24-negro.jpg"},{color:"Rojo",img:"img/bici-tracker24-rojo.jpg"}] },
  { id:11,  name:"Bicicleta Corsario #26 Tracker",               price:350, category:"Bicicleta", img:"img/bici-tracker26.jpg",  desc:"Tracker aro 26",              disponible:true,
    variantes:[{color:"Negro",img:"img/bici-tracker26-negro.jpg"},{color:"Azul",img:"img/bici-tracker26-azul.jpg"}] },
  { id:12,  name:"Bicicleta Corsario BMX XTC Cromada",           price:85,  category:"Bicicleta", img:"img/bici-bmx-cromada.jpg",desc:"BMX XTC cromada",             disponible:true },
  { id:13,  name:"Bicicleta Corsario BMX XTC Color",             price:450, category:"Bicicleta", img:"img/bici-bmx-color.jpg",  desc:"BMX XTC a color",             disponible:true,
    variantes:[{color:"Rojo",img:"img/bici-bmx-rojo.jpg"},{color:"Azul",img:"img/bici-bmx-azul.jpg"},{color:"Verde",img:"img/bici-bmx-verde.jpg"}] },
  { id:138, name:"Bicicleta Corsario #20 Princess",              price:450, category:"Bicicleta", img:"img/bici-princess20.jpg", desc:"Princess aro 20",             disponible:true,
    variantes:[{color:"Rosado",img:"img/bici-princess20-rosado.jpg"},{color:"Morado",img:"img/bici-princess20-morado.jpg"}] },

  // ── MUEBLES (sin variantes) ──
  { id:14,  name:"Bateria Unique Regina",                        price:450, category:"Muebles", img:"img/tv.jpg", desc:"Batería de cocina Regina",          disponible:true },
  { id:15,  name:"Batidora Hamilton Beach",                      price:600, category:"Muebles", img:"img/tv.jpg", desc:"Batidora Hamilton Beach",           disponible:true },
  { id:16,  name:"Burros plasticos",                             price:350, category:"Muebles", img:"img/tv.jpg", desc:"Burros plásticos multiusos",        disponible:true },
  { id:17,  name:"Carro Mega Cars",                              price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Carro de juguete Mega Cars",        disponible:true },
  { id:18,  name:"Carro Baby Pro 4x4",                           price:600, category:"Muebles", img:"img/tv.jpg", desc:"Carro Baby Pro 4x4",                disponible:true },
  { id:19,  name:"Carro Ride On Car Baby Pro",                   price:350, category:"Muebles", img:"img/tv.jpg", desc:"Ride On Car Baby Pro",              disponible:true },
  { id:20,  name:"Cafetera Black+Decker",                        price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Cafetera Black+Decker",             disponible:true },
  { id:59,  name:"Gabetero madera 7 Gabetas",                    price:350, category:"Muebles", img:"img/tv.jpg", desc:"Gabetero de madera 7 gavetas",      disponible:true },
  { id:60,  name:"Gabetero Sanchia 5 Eterno",                    price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Gabetero Sanchia 5 niveles",        disponible:true },
  { id:61,  name:"Gabetero Sanchia 4 Niveles",                   price:450, category:"Muebles", img:"img/tv.jpg", desc:"Gabetero Sanchia 4 niveles",        disponible:true },
  { id:62,  name:"Gabetero Sanchia Con espejo",                  price:450, category:"Muebles", img:"img/tv.jpg", desc:"Gabetero Sanchia con espejo",       disponible:true },
  { id:63,  name:"Gabetero Lava mano Sanchia",                   price:600, category:"Muebles", img:"img/tv.jpg", desc:"Gabetero lava mano Sanchia",        disponible:true },
  { id:64,  name:"Gabetero Kawaki mini",                         price:350, category:"Muebles", img:"img/tv.jpg", desc:"Gabetero Kawaki mini",              disponible:true },
  { id:65,  name:"Gabetero Kawaki mini Decorado",                price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Gabetero Kawaki mini decorado",     disponible:true },
  { id:66,  name:"Horno Tostador Hamilton Beach",                price:600, category:"Muebles", img:"img/tv.jpg", desc:"Horno tostador Hamilton Beach",     disponible:true },
  { id:70,  name:"Juego de tina #4 30,35,45",                   price:450, category:"Muebles", img:"img/tv.jpg", desc:"Juego de tinas #4",                 disponible:true },
  { id:71,  name:"Juego de tina #8 50,60,70",                   price:600, category:"Muebles", img:"img/tv.jpg", desc:"Juego de tinas #8",                 disponible:true },
  { id:72,  name:"Juego de sartenes Master Cook",                price:350, category:"Muebles", img:"img/tv.jpg", desc:"Juego de sartenes Master Cook",     disponible:true },
  { id:74,  name:"Maquina de Cocer Janome 1008",                 price:600, category:"Muebles", img:"img/tv.jpg", desc:"Máquina de coser Janome 1008",      disponible:true },
  { id:75,  name:"Mesa Plegable Grande",                         price:350, category:"Muebles", img:"img/tv.jpg", desc:"Mesa plegable grande",              disponible:true },
  { id:76,  name:"Microondas RED",                               price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Microondas RED",                    disponible:true },
  { id:77,  name:"Microondas MIDEA",                             price:450, category:"Muebles", img:"img/tv.jpg", desc:"Microondas MIDEA",                  disponible:true },
  { id:78,  name:"Licuadora American",                           price:450, category:"Muebles", img:"img/tv.jpg", desc:"Licuadora American",                disponible:true },
  { id:79,  name:"Licuadora Oster Vidrio WPB",                   price:600, category:"Muebles", img:"img/tv.jpg", desc:"Licuadora Oster vidrio",            disponible:true },
  { id:80,  name:"Licuadora Oster Cromada",                      price:350, category:"Muebles", img:"img/tv.jpg", desc:"Licuadora Oster cromada",           disponible:true },
  { id:81,  name:"Licuadora MAN 7V",                             price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Licuadora MAN 7 velocidades",       disponible:true },
  { id:82,  name:"Licuadora CyL",                                price:600, category:"Muebles", img:"img/tv.jpg", desc:"Licuadora CyL",                     disponible:true },
  { id:83,  name:"Plancha Oster",                                price:350, category:"Muebles", img:"img/tv.jpg", desc:"Plancha Oster",                     disponible:true },
  { id:84,  name:"Plancha Black+Decker",                         price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Plancha Black+Decker",              disponible:true },
  { id:85,  name:"Plancha Sankey",                               price:450, category:"Muebles", img:"img/tv.jpg", desc:"Plancha Sankey",                    disponible:true },
  { id:106, name:"Set multiusos Kawaki 5 niveles",               price:600, category:"Muebles", img:"img/tv.jpg", desc:"Set multiusos Kawaki",              disponible:true },
  { id:107, name:"Silla para niño Globa Price",                  price:350, category:"Muebles", img:"img/tv.jpg", desc:"Silla para niño",                   disponible:true },
  { id:108, name:"Scuter Plastico",                              price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Scúter plástico",                   disponible:true },
  { id:109, name:"Lavadora LG 17Kg",                             price:450, category:"Muebles", img:"img/tv.jpg", desc:"Lavadora LG 17Kg",                  disponible:true },
  { id:110, name:"Lavadora LG 18Kg",                             price:450, category:"Muebles", img:"img/tv.jpg", desc:"Lavadora LG 18Kg",                  disponible:true },
  { id:111, name:"Lavadora Samsung 17Kg",                        price:600, category:"Muebles", img:"img/tv.jpg", desc:"Lavadora Samsung 17Kg",             disponible:true },
  { id:112, name:"Lavadora Samsung 20Kg",                        price:350, category:"Muebles", img:"img/tv.jpg", desc:"Lavadora Samsung 20Kg",             disponible:true },
  { id:113, name:"Lavadora Frigidaire 22Kg",                     price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Lavadora Frigidaire 22Kg",          disponible:true },
  { id:114, name:"Lavadora Whirpool 22Kg",                       price:600, category:"Muebles", img:"img/tv.jpg", desc:"Lavadora Whirlpool 22Kg",           disponible:true },
  { id:115, name:"Ventilador Mini aspa #10 metal",               price:350, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador mini metal",             disponible:true },
  { id:116, name:"Ventilador Full color",                        price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Ventilador full color",             disponible:true },
  { id:117, name:"Ventilador Kawaki 1016",                       price:450, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Kawaki 1016",            disponible:true },
  { id:118, name:"Ventilador Sanchia 1016",                      price:450, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Sanchia 1016",           disponible:true },
  { id:119, name:"Ventilador Sanchia 1601",                      price:600, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Sanchia 1601",           disponible:true },
  { id:120, name:"Ventilador Vortex #18",                        price:350, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Vortex #18",             disponible:true },
  { id:121, name:"Ventilador MAN piso 2020",                     price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Ventilador MAN piso",               disponible:true },
  { id:122, name:"Ventilador MAN pedestal",                      price:600, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador MAN pedestal",           disponible:true },
  { id:123, name:"Ventilador Daytron AG",                        price:350, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Daytron AG",             disponible:true },
  { id:124, name:"Ventilador TMT techo",                         price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Ventilador TMT de techo",           disponible:true },
  { id:125, name:"Ventilador Sankey techo",                      price:450, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Sankey de techo",        disponible:true },
  { id:126, name:"Ventilador Bello techo ny-57",                 price:450, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador Bello de techo",         disponible:true },
  { id:127, name:"Ventilador Hyundai tower",                     price:600, category:"Muebles", img:"img/tv.jpg", desc:"Ventilador torre Hyundai",          disponible:true },
  { id:128, name:"Vajillas Casillini Toscana",                   price:350, category:"Muebles", img:"img/tv.jpg", desc:"Vajilla Casillini Toscana",         disponible:true },
  { id:129, name:"Alfombras",                                    price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Alfombras variadas",                disponible:true },
  { id:130, name:"Set Copas Gibson Home",                        price:600, category:"Muebles", img:"img/tv.jpg", desc:"Set de copas Gibson Home",          disponible:true },
  { id:131, name:"Set Vasos Gibson Home",                        price:350, category:"Muebles", img:"img/tv.jpg", desc:"Set de vasos Gibson Home",          disponible:true },
  { id:132, name:"Palas Sanchia",                                price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Palas Sanchia",                     disponible:true },
  { id:134, name:"Vasos MAN",                                    price:450, category:"Muebles", img:"img/tv.jpg", desc:"Vasos MAN",                         disponible:true },
  { id:135, name:"Registro para vaso man",                       price:600, category:"Muebles", img:"img/tv.jpg", desc:"Registro para vaso MAN",            disponible:true },
  { id:136, name:"Tapa MAN",                                     price:350, category:"Muebles", img:"img/tv.jpg", desc:"Tapa MAN",                          disponible:true },
  { id:137, name:"Andadera 5212",                                price:85,  category:"Muebles", img:"img/tv.jpg", desc:"Andadera 5212",                     disponible:true },

  // ── CAMAS (sin variantes) ──
  { id:21,  name:"Cuna Coral Niño/a",                            price:450, category:"Camas", img:"img/tv.jpg", desc:"Cuna Coral para niño o niña",       disponible:true },
  { id:22,  name:"Cama de madera 1.40 Metros",                   price:450, category:"Camas", img:"img/tv.jpg", desc:"Cama de madera 1.40m",              disponible:true },
  { id:23,  name:"Cama Capri Silver Dream 1.60 Metros",          price:600, category:"Camas", img:"img/tv.jpg", desc:"Cama Capri Silver Dream 1.60m",     disponible:true },
  { id:24,  name:"Cama Capri Exclusiva 2x2 Metros",              price:350, category:"Camas", img:"img/tv.jpg", desc:"Cama Capri Exclusiva 2x2m",         disponible:true },
  { id:25,  name:"Colchoneta 1 Metro x 3 Pulgadas",              price:85,  category:"Camas", img:"img/tv.jpg", desc:"Colchoneta 1m x 3 pulgadas",        disponible:true },
  { id:26,  name:"Colchoneta 1.20 Metro x 3 Pulgadas",           price:600, category:"Camas", img:"img/tv.jpg", desc:"Colchoneta 1.20m x 3 pulgadas",     disponible:true },
  { id:27,  name:"Colchoneta 1.40 Metro x 3 Pulgadas",           price:350, category:"Camas", img:"img/tv.jpg", desc:"Colchoneta 1.40m x 3 pulgadas",     disponible:true },
  { id:28,  name:"Colchoneta 1 Metro x 4 Pulgadas",              price:85,  category:"Camas", img:"img/tv.jpg", desc:"Colchoneta 1m x 4 pulgadas",        disponible:true },
  { id:29,  name:"Colchoneta 1.20 Metro x 4 Pulgadas",           price:450, category:"Camas", img:"img/tv.jpg", desc:"Colchoneta 1.20m x 4 pulgadas",     disponible:true },
  { id:30,  name:"Colchoneta 1.40 Metro x 4 Pulgadas",           price:450, category:"Camas", img:"img/tv.jpg", desc:"Colchoneta 1.40m x 4 pulgadas",     disponible:true },
  { id:31,  name:"Colchoneta Capri 1 Metro",                     price:600, category:"Camas", img:"img/tv.jpg", desc:"Colchoneta Capri 1m",               disponible:true },
  { id:32,  name:"Colchoneta Capri 1.20 Metro",                  price:350, category:"Camas", img:"img/tv.jpg", desc:"Colchoneta Capri 1.20m",            disponible:true },
  { id:33,  name:"Colchoneta Capri 1.40 Metro",                  price:85,  category:"Camas", img:"img/tv.jpg", desc:"Colchoneta Capri 1.40m",            disponible:true },
  { id:133, name:"Almohadas Capri",                              price:450, category:"Camas", img:"img/tv.jpg", desc:"Almohadas Capri",                   disponible:true },

  // ── MUEBLES DE MADERA (sin variantes) ──
  { id:34,  name:"Closet Madera 2 Cuerpos",                      price:600, category:"Muebles de madera", img:"img/tv.jpg", desc:"Closet de madera 2 cuerpos",   disponible:true },
  { id:35,  name:"Closet Madera 3 Cuerpos",                      price:350, category:"Muebles de madera", img:"img/tv.jpg", desc:"Closet de madera 3 cuerpos",   disponible:true },
  { id:36,  name:"Closet Madera 4 Cuerpos",                      price:85,  category:"Muebles de madera", img:"img/tv.jpg", desc:"Closet de madera 4 cuerpos",   disponible:true },
  { id:37,  name:"Closet Madera 5 Cuerpos",                      price:450, category:"Muebles de madera", img:"img/tv.jpg", desc:"Closet de madera 5 cuerpos",   disponible:true },
  { id:67,  name:"Juego de comedor 4 personas Americano",        price:350, category:"Muebles de madera", img:"img/tv.jpg", desc:"Comedor americano 4 personas", disponible:true },
  { id:68,  name:"Juego de comedor 6 personas Americano",        price:85,  category:"Muebles de madera", img:"img/tv.jpg", desc:"Comedor americano 6 personas", disponible:true },
  { id:69,  name:"Juguetera madera",                             price:450, category:"Muebles de madera", img:"img/tv.jpg", desc:"Juguetera de madera",          disponible:true },
  { id:73,  name:"Modulo pequeño",                               price:85,  category:"Muebles de madera", img:"img/tv.jpg", desc:"Módulo pequeño de madera",     disponible:true },

  // ── COCINAS (con variantes) ──
  { id:38,  name:"Cocina de mesa Ecocina 2 Quemadores",          price:450, category:"Cocinas", img:"img/cocina-ecocina2.jpg",   desc:"Cocina mesa Ecocina 2 quemadores", disponible:true,
    variantes:[{color:"Blanco",img:"img/cocina-ecocina2-blanco.jpg"},{color:"Negro",img:"img/cocina-ecocina2-negro.jpg"}] },
  { id:39,  name:"Cocina de mesa Ecocina Acero 2 Quemadores",    price:600, category:"Cocinas", img:"img/cocina-ecocina-acero.jpg",desc:"Ecocina acero 2 quemadores",       disponible:true,
    variantes:[{color:"Plateado",img:"img/cocina-ecocina-acero.jpg"},{color:"Negro",img:"img/cocina-ecocina-acero-negro.jpg"}] },
  { id:40,  name:"Cocina de mesa Ecocina 4 Quemadores",          price:350, category:"Cocinas", img:"img/cocina-ecocina4.jpg",   desc:"Ecocina mesa 4 quemadores",        disponible:true,
    variantes:[{color:"Blanco",img:"img/cocina-ecocina4-blanco.jpg"},{color:"Negro",img:"img/cocina-ecocina4-negro.jpg"}] },
  { id:41,  name:"Cocina de mesa IML 4 Quemadores",              price:85,  category:"Cocinas", img:"img/cocina-iml.jpg",        desc:"Cocina IML 4 quemadores",          disponible:true },
  { id:42,  name:"Cocina de Gabinete IML 4 Quemadores",          price:600, category:"Cocinas", img:"img/cocina-iml-gab.jpg",    desc:"Cocina gabinete IML",              disponible:true },
  { id:43,  name:"Cocina de horno Ferrer 4 Quemadores",          price:350, category:"Cocinas", img:"img/cocina-ferrer.jpg",     desc:"Cocina horno Ferrer",              disponible:true,
    variantes:[{color:"Blanco",img:"img/cocina-ferrer-blanco.jpg"},{color:"Negro",img:"img/cocina-ferrer-negro.jpg"}] },
  { id:44,  name:"Cocina de horno Dale 4 Quemadores",            price:85,  category:"Cocinas", img:"img/cocina-dale.jpg",       desc:"Cocina horno Dale",                disponible:true,
    variantes:[{color:"Blanco",img:"img/cocina-dale-blanco.jpg"},{color:"Gris",img:"img/cocina-dale-gris.jpg"}] },
  { id:45,  name:"Cocina de horno Chellenger 4 Quemadores",      price:450, category:"Cocinas", img:"img/cocina-challenger.jpg", desc:"Cocina horno Challenger",          disponible:true,
    variantes:[{color:"Blanco",img:"img/cocina-challenger-blanco.jpg"},{color:"Negro",img:"img/cocina-challenger-negro.jpg"}] },
  { id:46,  name:"Cocina de horno MABE 4 Quemadores negra/gris", price:450, category:"Cocinas", img:"img/cocina-mabe4.jpg",      desc:"Cocina horno MABE 4 quemadores",   disponible:true,
    variantes:[{color:"Negro",img:"img/cocina-mabe4-negro.jpg"},{color:"Gris",img:"img/cocina-mabe4-gris.jpg"}] },
  { id:47,  name:"Cocina de horno MABE 6 Quemadores",            price:600, category:"Cocinas", img:"img/cocina-mabe6.jpg",      desc:"Cocina horno MABE 6 quemadores",   disponible:true,
    variantes:[{color:"Negro",img:"img/cocina-mabe6-negro.jpg"},{color:"Gris",img:"img/cocina-mabe6-gris.jpg"}] },
  { id:48,  name:"Cocina de horno Cetron 6 Quemadores",          price:350, category:"Cocinas", img:"img/cocina-cetron.jpg",     desc:"Cocina horno Cetron 6 quemadores", disponible:true,
    variantes:[{color:"Blanco",img:"img/cocina-cetron-blanco.jpg"},{color:"Negro",img:"img/cocina-cetron-negro.jpg"}] },
  { id:49,  name:"Cocina de plancha Llama Azul 0.80 Metro",      price:85,  category:"Cocinas", img:"img/cocina-plancha80.jpg",  desc:"Plancha Llama Azul 0.80m",         disponible:true },
  { id:50,  name:"Cocina de plancha Llama Azul 1 Metro",         price:600, category:"Cocinas", img:"img/cocina-plancha1.jpg",   desc:"Plancha Llama Azul 1m",            disponible:true },
  { id:51,  name:"Cocina de plancha Llama Azul 1.30 Metro",      price:350, category:"Cocinas", img:"img/cocina-plancha130.jpg", desc:"Plancha Llama Azul 1.30m",         disponible:true },
  { id:58,  name:"Freidora de papa Llama Azul",                  price:600, category:"Cocinas", img:"img/tv.jpg",                desc:"Freidora Llama Azul",              disponible:true },

  // ── AUDIO (sin variantes) ──
  { id:53,  name:"Equipo de sonido LG CM4360",                   price:450, category:"Audio", img:"img/tv.jpg", desc:"Equipo de sonido LG CM4360", disponible:true },
  { id:54,  name:"Equipo de sonido LG CK43",                     price:450, category:"Audio", img:"img/tv.jpg", desc:"Equipo de sonido LG CK43",   disponible:true },
  { id:55,  name:"Equipo de sonido LG CJ44",                     price:600, category:"Audio", img:"img/tv.jpg", desc:"Equipo de sonido LG CJ44",   disponible:true },

  // ── REFRIGERACIÓN (con variantes) ──
  { id:52,  name:"Dispensador de agua Oster",                    price:85,  category:"Refrigeración", img:"img/tv.jpg", desc:"Dispensador de agua Oster", disponible:true },
  { id:56,  name:"Frezzer MABE 15 Pies",                         price:350, category:"Refrigeración", img:"img/freezer-mabe15.jpg",    desc:"Freezer MABE 15 pies",     disponible:true,
    variantes:[{color:"Blanco",img:"img/freezer-mabe15-blanco.jpg"},{color:"Plateado",img:"img/freezer-mabe15-plateado.jpg"}] },
  { id:57,  name:"Frezzer Frigidaire 9 Pies",                    price:85,  category:"Refrigeración", img:"img/freezer-frig9.jpg",     desc:"Freezer Frigidaire 9 pies", disponible:true,
    variantes:[{color:"Blanco",img:"img/freezer-frig9-blanco.jpg"},{color:"Plateado",img:"img/freezer-frig9-plateado.jpg"}] },
  { id:96,  name:"Refrigeradora LG VT",                          price:350, category:"Refrigeración", img:"img/refri-lg-vt.jpg",       desc:"Refrigeradora LG VT",      disponible:true,
    variantes:[{color:"Plateado",img:"img/refri-lg-vt-plateado.jpg"},{color:"Negro",img:"img/refri-lg-vt-negro.jpg"}] },
  { id:97,  name:"Refrigeradora LG GT",                          price:85,  category:"Refrigeración", img:"img/refri-lg-gt.jpg",       desc:"Refrigeradora LG GT",      disponible:true,
    variantes:[{color:"Plateado",img:"img/refri-lg-gt-plateado.jpg"},{color:"Negro",img:"img/refri-lg-gt-negro.jpg"}] },
  { id:98,  name:"Refrigeradora MIDEA",                          price:600, category:"Refrigeración", img:"img/refri-midea.jpg",       desc:"Refrigeradora MIDEA",      disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-midea-blanco.jpg"},{color:"Plateado",img:"img/refri-midea-plateado.jpg"}] },
  { id:99,  name:"Refrigeradora CyL CL-200",                     price:350, category:"Refrigeración", img:"img/refri-cyl200.jpg",      desc:"Refrigeradora CyL CL-200", disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-cyl200-blanco.jpg"},{color:"Plateado",img:"img/refri-cyl200-plateado.jpg"}] },
  { id:100, name:"Refrigeradora CyL CL-89",                      price:85,  category:"Refrigeración", img:"img/refri-cyl89.jpg",       desc:"Refrigeradora CyL CL-89",  disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-cyl89-blanco.jpg"},{color:"Plateado",img:"img/refri-cyl89-plateado.jpg"}] },
  { id:101, name:"Refrigeradora MABE",                           price:450, category:"Refrigeración", img:"img/refri-mabe.jpg",        desc:"Refrigeradora MABE",       disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-mabe-blanco.jpg"},{color:"Plateado",img:"img/refri-mabe-plateado.jpg"}] },
  { id:102, name:"Refrigeradora Oster",                          price:450, category:"Refrigeración", img:"img/refri-oster.jpg",       desc:"Refrigeradora Oster",      disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-oster-blanco.jpg"},{color:"Plateado",img:"img/refri-oster-plateado.jpg"}] },
  { id:103, name:"Refrigeradora Indurama",                       price:600, category:"Refrigeración", img:"img/refri-indurama.jpg",    desc:"Refrigeradora Indurama",   disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-indurama-blanco.jpg"},{color:"Plateado",img:"img/refri-indurama-plateado.jpg"}] },
  { id:104, name:"Refrigeradora Cetron",                         price:350, category:"Refrigeración", img:"img/refri-cetron.jpg",      desc:"Refrigeradora Cetron",     disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-cetron-blanco.jpg"},{color:"Plateado",img:"img/refri-cetron-plateado.jpg"}] },
  { id:105, name:"Refrigeradora Frigidaire",                     price:85,  category:"Refrigeración", img:"img/refri-frigidaire.jpg",  desc:"Refrigeradora Frigidaire", disponible:true,
    variantes:[{color:"Blanco",img:"img/refri-frigidaire-blanco.jpg"},{color:"Plateado",img:"img/refri-frigidaire-plateado.jpg"}] },

  // ── TELEVISORES (sin variantes) ──
  { id:86,  name:"Pantalla Coby 32",          price:450, category:"Televisores", img:"IMG/cobyde32pul.png ", desc:"Pantalla Coby 32 pulgadas",        disponible:true },
  { id:87,  name:"Pantalla Hyundai 32 HYLED", price:600, category:"Televisores", img:"IMG/PantallaHyundau32pul.png", desc:"Pantalla Hyundai 32 HYLED",        disponible:true },
  { id:88,  name:"Pantalla Samsung 32 T4300", price:350, category:"Televisores", img:"IMG/PantallaSamsung32T4300.png", desc:"Pantalla Samsung 32 T4300",        disponible:true },
  { id:89,  name:"Pantalla Samsung 32",       price:85,  category:"Televisores", img:"IMG/PantallaSamsung32.png", desc:"Pantalla Samsung 32",              disponible:true },
  { id:90,  name:"Pantalla Panasonic 32",     price:600, category:"Televisores", img:"IMG/PantallaPanasonic32.png", desc:"Pantalla Panasonic 32",            disponible:true },
  { id:91,  name:"Pantalla SONY 43",          price:350, category:"Televisores", img:"IMG/PantallaSONY43.png", desc:"Pantalla SONY 43 pulgadas",        disponible:true },
  { id:92,  name:"Pantalla LG 43",            price:85,  category:"Televisores", img:"IMG/PantallaLG43.png", desc:"Pantalla LG 43 pulgadas",          disponible:true },
  { id:93,  name:"Pantalla Samsung 50",       price:450, category:"Televisores", img:"IMG/PantallaSamsung50.png", desc:"Pantalla Samsung 50 pulgadas",     disponible:true },
  { id:94,  name:"Pantalla Samsung 65",       price:450, category:"Televisores", img:"IMG/PantallaSamsung65.png", desc:"Pantalla Samsung 65 pulgadas",     disponible:true },
  { id:95,  name:"Pantalla Challenger 19",    price:600, category:"Televisores", img:"IMG/PantallaChallenger19.png", desc:"Pantalla Challenger 19 pulgadas",  disponible:true },
];

// ─────────────────────────────────────────────
// CATEGORÍAS
// ─────────────────────────────────────────────
const CATEGORIES = [
  { id: "Bicicleta",         name: "Bicicletas",        icon: "🚲", color: "#96CEB4" },
  { id: "Televisores",       name: "Televisores",        icon: "🖥️", color: "#FF6B6B" },
  { id: "Camas",             name: "Camas",              icon: "🛏️", color: "#4ECDC4" },
  { id: "Muebles",           name: "Muebles",            icon: "🛋️", color: "#45B7D1" },
  { id: "Muebles de madera", name: "Muebles de madera",  icon: "🪑", color: "#FFEAA7" },
  { id: "Cocinas",           name: "Cocinas",            icon: "🍳", color: "#F5820A" },
  { id: "Refrigeración",     name: "Refrigeración",      icon: "❄️", color: "#DDA0DD" },
  { id: "Audio",             name: "Audio",              icon: "🎧", color: "#6C63FF" },
];

const WHATSAPP_NUMBER = "50375699371";

// ─────────────────────────────────────────────
// MODO OSCURO
// ─────────────────────────────────────────────
function initDarkMode() {
  const saved = localStorage.getItem("novaTheme");
  if (saved === "dark") document.documentElement.setAttribute("data-theme", "dark");
  else document.documentElement.removeAttribute("data-theme");
  updateDarkToggle();
}

function toggleDarkMode() {
  const isDark = document.documentElement.hasAttribute("data-theme");
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("novaTheme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("novaTheme", "dark");
  }
  updateDarkToggle();
}

function updateDarkToggle() {
  const btns = document.querySelectorAll(".dark-toggle");
  const isDark = document.documentElement.hasAttribute("data-theme");
  btns.forEach(btn => {
    btn.innerHTML = isDark ? "☀️" : "🌙";
    btn.title = isDark ? "Modo claro" : "Modo oscuro";
  });
}

// ─────────────────────────────────────────────
// CARRITO
// ─────────────────────────────────────────────
function getCart() {
  return JSON.parse(localStorage.getItem("novaCart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("novaCart", JSON.stringify(cart));
}

function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !product.disponible) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  updateCartBadge();
  renderCartPanel();
  showAddedNotification(product.name);
  playAddSound();
}

function removeFromCart(productId) {
  let cart = getCart().filter(i => i.id !== productId);
  saveCart(cart);
  updateCartBadge();
  renderCartPanel();
}

function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(productId);
  saveCart(cart);
  updateCartBadge();
  renderCartPanel();
}

function clearCart() {
  saveCart([]);
  updateCartBadge();
  renderCartPanel();
}

function getCartTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, i) => sum + i.qty, 0);
}

function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll(".cart-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

// ─────────────────────────────────────────────
// BOTÓN AGREGAR
// ─────────────────────────────────────────────
function renderAddButton(product) {
  if (product.disponible) {
    return `<button class="btn-add" onclick="addToCart(${product.id})" title="Agregar al carrito">+</button>`;
  } else {
    return `<span style="font-size:0.75rem;font-weight:700;color:#FF4444;background:#FF44441A;padding:4px 10px;border-radius:50px;white-space:nowrap;">Sin existencia</span>`;
  }
}

// ─────────────────────────────────────────────
// PANEL DEL CARRITO
// ─────────────────────────────────────────────
function renderCartPanel() {
  const panel = document.getElementById("cart-panel");
  if (!panel) return;
  const cart = getCart();
  const body = panel.querySelector(".cart-body");
  const footer = panel.querySelector(".cart-footer");

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Tu carrito está vacío</p></div>`;
    footer.innerHTML = `<p class="cart-total">Total: <strong>$0.00</strong></p>`;
    return;
  }

  body.innerHTML = cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</p>
        <div class="cart-item-qty">
          <button onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">x</button>
    </div>
  `).join("");

  footer.innerHTML = `
    <p class="cart-total">Total: <strong>$${getCartTotal().toFixed(2)}</strong></p>
    <div class="cart-actions">
      <button class="btn-clear" onclick="clearCart()">Vaciar</button>
      <a href="checkout.html" class="btn-checkout">Comprar</a>
    </div>
  `;
}

function toggleCartPanel() {
  const panel = document.getElementById("cart-panel");
  const overlay = document.getElementById("cart-overlay");
  if (!panel) return;
  panel.classList.toggle("open");
  overlay.classList.toggle("open");
}

// ─────────────────────────────────────────────
// NOTIFICACIÓN
// ─────────────────────────────────────────────
function showAddedNotification(name) {
  let notif = document.getElementById("cart-notif");
  if (!notif) {
    notif = document.createElement("div");
    notif.id = "cart-notif";
    document.body.appendChild(notif);
  }
  notif.textContent = 'Añadido: ' + name;
  notif.classList.add("show");
  clearTimeout(notif._timer);
  notif._timer = setTimeout(() => notif.classList.remove("show"), 2500);
}

// ─────────────────────────────────────────────
// SONIDO
// ─────────────────────────────────────────────
function playAddSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.3);
  } catch (_) {}
}

// ─────────────────────────────────────────────
// NAVEGACIÓN ACTIVA
// ─────────────────────────────────────────────
function setActiveNav() {
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === page);
  });
}

// ─────────────────────────────────────────────
// INICIALIZACIÓN GLOBAL
// ─────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  updateCartBadge();
  renderCartPanel();
  setActiveNav();

  document.querySelectorAll(".dark-toggle").forEach(btn =>
    btn.addEventListener("click", toggleDarkMode)
  );

  const cartBtn = document.getElementById("cart-fab");
  if (cartBtn) cartBtn.addEventListener("click", toggleCartPanel);

  const overlay = document.getElementById("cart-overlay");
  if (overlay) overlay.addEventListener("click", toggleCartPanel);

  const closeBtn = document.getElementById("cart-close");
  if (closeBtn) closeBtn.addEventListener("click", toggleCartPanel);
});
