"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoConnection_1 = require("../mongoConnection");
const data = {
    names: [
        'Boieesen Art - PABLO PICASSO -  Cuadro de pintura al óleo con textura pintada a mano (29.9 x 39.4 x 39.4 in), diseño abstracto moderno y rojo',
        'Yelash - GIOTTO DI BONDONE-  Lienzo decorativo para pared con diseño de pavo real con plumas verticales coloridas sobre ramas de flores blancas',
        "YaSheng Art -  LEONARDO DA VINCI - Pintura al óleo pintada a mano sobre lienzo con flores blancas, pintura moderna para decoración interior",
        "Pintura al óleo,  - PAUL CÉZANNE - pintada a mano sobre lienzo, paisaje de lago, arte abstracto para pared, moderno, decoración del hogar.",
        'AMEI - REMBRANDT VAN RIJN - Pinturas de arte, 24.0 x 44.1 in, 3D pintado a mano sobre lienzo colorido fondo blanco abstracto pinturas ',
        'Boieesen Art - DIEGO VELÁZQUEZ  -  Cuadro de pintura al óleo con textura pintada a mano (29.9 x 39.4 x 39.4 in), diseño abstracto moderno y rojo',
        'Yelash - WASSILY KANDINSKY -  Lienzo decorativo para pared con diseño de pavo real con plumas verticales coloridas sobre ramas de flores blancas',
        "YaSheng Art -  Monet - Pintura al óleo pintada a mano sobre lienzo con flores blancas, pintura moderna para decoración interior",
        "Pintura al óleo,  -  BASQUIAT - pintada a mano sobre lienzo, paisaje de lago, arte abstracto para pared, moderno, decoración del hogar.",
        'AMEI - MUNCH - Pinturas de arte, 24.0 x 44.1 in, 3D pintado a mano sobre lienzo colorido fondo blanco abstracto pinturas '
    ],
    brands: [
        'XIN',
        'Yelash',
        'Winpeak Art',
        'ULIANUAN',
        'Diathou',
        "Barbier",
        "pixel",
        "Kazimierz",
        "Van Osdol"
    ],
    productBullets: [
        ["obra de arte", "pintura al óleo", "pintura abstracta", "alta definición ", "lienzo ecológico ", "no se decolora", "antiultravioleta", "impermeable"],
        ["obra de arte", "pintura al óleo", "pintura abstracta", "alta definición ", "lienzo ecológico ", "no se decolora", "antiultravioleta", "impermeable"],
        ["obra de arte", "pintura al óleo", "pintura abstracta", "alta definición ", "lienzo ecológico ", "no se decolora", "antiultravioleta", "impermeable"],
        ["obra de arte", "pintura al óleo", "pintura abstracta", "alta definición ", "lienzo ecológico ", "no se decolora", "antiultravioleta", "impermeable"],
        ["obra de arte", "pintura al óleo", "pintura abstracta", "alta definición ", "lienzo ecológico ", "no se decolora", "antiultravioleta", "impermeable"]
    ],
    productDescription: [
        "una obra de arte bien seleccionada puede ser el punto focal de tu espacio, pinturas al óleo abstractas que cuentan una historia sobre ti e inspiran conversación, motivación y creatividad. Nuestras modernas pinturas abstractas al óleo son meticulosamente curadas y creadas por varios artistas de todo el mundo, proporcionando diversas opciones para cada estilo de decoración y personalidad.",
        "Ideas de diseño: pareja elegante pavo real enamorado. Peacock es un pájaro auspicioso en la mitología, tiene un aspecto hermoso y un estilo noble y rey. Esta imagen inspiradora y motivadora hace que sea un acento ideal para cualquier habitación de la casa.",
        "Pintura al óleo sobre lienzo 100% hecha a mano por nuestros artistas profesionales. Este arte mural abstracto es adecuado para sala de estar, dormitorio, cocina, oficina, hotel, comedor, baño, bar, etc.",
        "Artesanía: 100% pintado a mano por artistas profesionales experimentados. Estirado y enmarcado que están equipados con ganchos negros para colgar e instalar fácilmente.",
        "Esta obra de arte está pintada a mano por nuestros artistas profesionales. Este lienzo hecho a mano es adecuado para sala de estar, dormitorio, cocina, oficina, hotel, comedor, baño, pasillo, bar, etc. y otros espacios para los amantes del arte.",
        "una obra de arte bien seleccionada puede ser el punto focal de tu espacio, pinturas al óleo abstractas que cuentan una historia sobre ti e inspiran conversación, motivación y creatividad. Nuestras modernas pinturas abstractas al óleo son meticulosamente curadas y creadas por varios artistas de todo el mundo, proporcionando diversas opciones para cada estilo de decoración y personalidad."
    ],
    categories: [
        "Chiaroscuro", "Scumbling", "Glazing", "Impasto", "Classic"
    ],
    colors: [
        ["Cadmium Lemon", "Alizarin Crimson", "Cadmium Red Light"],
        ["Cadmium Red Light"],
        ["Alizarin Crimson", "Pareja Peacock"],
        ["Ultramarine Blue", "Dioxazine Purple"],
        ["Dioxazine Purple"],
        ["Cerulean Blue", "Viridian Green", "Black"],
        ["Phthalo Blue"],
        ["Viridian Green", "Alizarin Crimson"],
        ["Black"],
        ["Burnt Umber"],
        ["Marrón (Brown Elephant)"],
        ["Pareja Peacock"],
        ["Multicolor"]
    ],
    materials: [
        "Aceite", "Lona"
    ],
    themes: [
        "Rustic",
        "Animal",
        "Abstract",
        "Landscape",
    ],
    images: [
        {
            main: { large: "https://m.media-amazon.com/images/I/81M5RO9iTML._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51I7FLaIPuL._AC_US40_.jpg" },
            others: [
                { large: "https://m.media-amazon.com/images/I/91VR1webwNL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/41fj4Mi1oRL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/91DoMq3B4QL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/41xHGW9Z6RL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/816+34-pMTL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/31gKmVVP64L._AC_US40_.jpg" }
            ]
        },
        {
            main: { large: "https://m.media-amazon.com/images/I/81s4pGH2kOL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51y7I76l5WL._AC_US40_.jpg" },
            others: [
                { large: "https://m.media-amazon.com/images/I/819yD6BWecL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51r-NTif1GL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/91T-VKaIFZL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/61zwFUn2ivL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/81J2pf+PmHL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/513FyZN0mDL._AC_US40_.jpg" }
            ]
        },
        {
            main: { large: "https://m.media-amazon.com/images/I/710TdMSGpxL._AC_SL1200_.jpg", mini: "https://m.media-amazon.com/images/I/51GJ6WmOnPL._AC_US40_.jpg" },
            others: [
                { large: "https://m.media-amazon.com/images/I/71OgJYbJ-zL._AC_SL1200_.jpg", mini: "https://m.media-amazon.com/images/I/515QgmyfoEL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/71Cr4Ch8eQL._AC_SL1200_.jpg", mini: "https://m.media-amazon.com/images/I/510U03O6myL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/71dgYUQtvDL._AC_SL1200_.jpg", mini: "https://m.media-amazon.com/images/I/51IEuATff2L._AC_US40_.jpg" }
            ]
        },
        {
            main: { large: "https://m.media-amazon.com/images/I/81PZ20ss0KL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51tCKkeu40L._AC_US40_.jpg" },
            others: [
                { large: "https://m.media-amazon.com/images/I/81tT1MOy8TL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/61Kv7JfssvL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/81Gd0RvKUUL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/514+SsRkAiL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/71KlUisU0NL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51LWcsMhZSL._AC_US40_.jpg" }
            ]
        },
        {
            main: { large: "https://m.media-amazon.com/images/I/91dCsZ4tV2L._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/5144gNEnNYL._AC_US40_.jpg" },
            others: [
                { large: "https://m.media-amazon.com/images/I/81iH3ZnyCUL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51jmPrjmIWL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/918TWtZmyxL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/51u1Nye4VVL._AC_US40_.jpg" },
                { large: "https://m.media-amazon.com/images/I/81KbcLFHJxL._AC_SL1500_.jpg", mini: "https://m.media-amazon.com/images/I/510yCXFEjQL._AC_US40_.jpg" }
            ]
        }
    ],
    prices: [
        29.99, 39.99, 49.99, 59.99, 69.99, 79.99, 89.99, 99.99, 109.99, 119.99, 129.99, 1339.99, 139.99, 149.99, 259.99, 359.99, 459.99, 559.99, 659.99, 719.99, 89.99, 99.99, 169.99
    ],
    heights: [
        50, 45, 40, 35, 30, 25, 20, 48, 46, 44, 42, 31, 33, 34, 37, 39
    ],
    lengths: [
        29, 31, 30, 28, 22, 23, 28.5, 23.5, 22.5, 21.8, 20, 31.5, 40, 35, 45, 50
    ],
    widths: [
        1.5, 2.5, 3.5, 2, 3, 1.8, 2.25, 3, 2.6, 1.8, 1.9, 2.6, 2.3
    ],
    weigths: [
        4.5, 5.5, 3.5, 2.8, 3.8, 2.8, 2.85, 3.2, 2.6, 3.8, 5.9, 6.6, 4.3
    ],
};
const getRandom = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
const getRandomBetweenNumbers = () => {
    return Math.floor(Math.random() * (91)) + 10;
};
const generateProduct = (obj, index) => {
    const { main, others } = getRandom(obj.images);
    const [image1, image2, image3] = others;
    const newObj = {
        name: getRandom(obj.names),
        code: "P-" + index.toString().padStart(8, '0'),
        brand: getRandom(obj.brands),
        price: getRandom(obj.prices),
        currency: 'USD',
        productBullets: getRandom(obj.productBullets),
        productDescription: getRandom(obj.productDescription),
        category: getRandom(obj.categories),
        colors: getRandom(obj.colors),
        material: getRandom(obj.materials),
        theme: getRandom(obj.themes),
        productWeight: getRandom(obj.weigths),
        weightUnit: "pounds",
        productLength: getRandom(obj.lengths),
        lengthUnit: "pulgadas",
        ProductWidth: getRandom(obj.widths),
        ProductHeight: getRandom(obj.heights),
        stock: getRandomBetweenNumbers(),
        imageMain: main.large,
        image1: image1.large,
        image2: image2.large,
        image3: image3.large,
        imageMainMini: main.mini,
        image1Mini: image1.mini,
        image2Mini: image2.mini,
        image3Mini: image3.mini,
    };
    return newObj;
};
const populate = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mongoConnection_1.connectDb)();
    const database = (0, mongoConnection_1.getDatabase)();
    const products = database.collection("products");
    yield products.deleteMany({});
    for (let i = 0; i <= 25000; i++) {
        const newProduct = generateProduct(data, 1);
        yield products.insertOne(newProduct);
    }
    yield (0, mongoConnection_1.closeConnectionDb)();
});
populate().then(() => {
    console.log("end of all");
}).catch(err => {
    console.log(err);
});
