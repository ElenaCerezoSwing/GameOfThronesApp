const express = require("express");
const app = express();


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})

app.get("/api/characters", (req, res) => {
    const characters = [
        {
            id: 1,
            name: "Danerys Targaryen",
            alias: "Dany,Daenerys de la Tormenta, Mhysa, Khaleesi, La Madre de Dragones",
            dob: "284 DC",
            family: {
                name: "Casa Targaryen",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "Daenerys Targaryen es un personaje de ficción de la saga de literatura fantástica Canción de hielo y fuego, escrita por George R. R. Martin. Daenerys es uno de los personajes principales y posee capítulos narrados desde su punto de vista en Juego de tronos, Choque de reyes, Tormenta de espadas y Danza de dragones. \n  Daenerys fue la única hija del rey Aerys II Targaryen y de su hermana-esposa,la reina Rhaella. Tras la muerte de su padre y de su hermano mayor en la Guerra del Usurpador, su madre murió dando a luz a la pequeña Daenerys. De esa manera, su hermano mayor Viserys quedó como legítimo rey Targaryen al Trono de Hierro y ella como su heredera. \n Se ha señalado que el destinador inicial del personaje de Daenerys es el «deseo de venganza».",
            history: "Daenerys fue la hija póstuma del rey Aerys II Targaryen, naciendo en mitad de una gran tormenta en la isla-fortaleza de Rocadragón, el hogar ancestral de la Casa Targaryen. Su madre, la reina Rhaella, murió cuando estaba dando a luz. Apenas siendo una recién nacida, su padre había muerto en Desembarco del Rey durante el saqueo que los Lannister sometieron a la capital y Robert Baratheon se había convertido en el nuevo Rey de los Siete Reinos. Huyendo de él, la pequeña Daenerys y su hermano mayor Viserys fueron trasladados a la ciudad de Braavos por Ser Willem Darry. \n Daenerys y Viserys permanecieron al cuidado de Ser Willem en Braavos hasta la muerte de éste, tras la cual los criados les robaron todas sus posesiones y ambos quedaron en la calle. Daenerys siempre extrañaría mucho el hogar de su infancia, como símbolo de la niñez que nunca tuvo. Viserys y Daenerys vagaron los siguientes años por las Ciudades Libres buscando apoyos para su causa, pero lo único que consiguieron fueron promesas vanas. Arruinados, Viserys se vio obligado a vender todas las menguadas riquezas que poseían, incluyendo la corona de su madre, lo que le valió el apodo de «El Rey Mendigo». Finalmente ambos se establecieron en Pentos, donde fueron acogidos por el rico y poderoso magíster Illyrio Mopatis.",
            actor: "Emilia Clarke"
        },
        {
            id: 2,
            name: "Tyrion Lannister",
            alias: "Gnomo, Mediohombre, El Gigante de Lannister, Yollo, Hugor Colina.",
            dob: "274 DC",
            family: {
                name: "Casa Lannister",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "Tyrion Lannister es un personaje ficticio de la saga Canción de hielo y fuego de George R. R. Martin y de su correspondiente adaptación televisiva, Juego de Tronos. /n    Basado en una idea que vino a Martin al escribir la novela de 1981 Windhaven, Tyrion ha sido considerado como una de las mejores creaciones de autor y uno de los personajes más populares por el New York Times. Martin ha nombrado el personaje como su favorito en la serie. \n Introducido en 1996 en Juego de tronos, Tyrion es un enano y miembro de la Casa Lannister, una de las familias más ricas y poderosas en el reino ficticio de Poniente (Westeros). Posteriormente apareció en sus secuelas Choque de reyes (1998) y Tormenta de espadas (2000). Tyrion fue uno de los pocos personajes prominentes que no aparecieron en Festín de cuervos (2005), pero volvió en la quinta novela, Danza de dragones (2011), y se tiene prevista su aparición en el sexto libro de la saga, Vientos de invierno. La popularidad del personaje llevó a que Martin y Bantam Books publicaran en 2013, 'The Wit and Wisdom of Tyrion Lannister'(El ingenio y la sabiduría de Tyrion Lannister), una colección ilustrada de citas que Tyrion dice en las novelas.",
            history: "Tyrion fue el tercer hijo de Lord Tywin Lannister y de su esposa Joanna Lannister. Durante su parto, su madre murió, descubriéndose que Tyrion era un enano deforme. Por esto, tanto su padre como su hermana lo despreciaron toda su vida y no lo tuvieron en consideración, excepto su hermano Jaime, quien le demostró un amor genuino. \n Tyrion fue el tercer hijo de Lord Tywin Lannister y de su esposa Joanna Lannister. Durante su parto, su madre murió, descubriéndose que Tyrion era un enano deforme. Por esto, tanto su padre como su hermana lo despreciaron toda su vida y no lo tuvieron en consideración, excepto su hermano Jaime, quien le demostró un amor genuino.",
            actor: "Peter Dinklage"

        }, {
            id: 3,
            name: "Jon Snow",
            alias: "Aegon Targaryen, Lord Snow,El Bastardo de Invernalia, Lord Cuervo, El Lobo Blanco (serie), El Príncipe Prometido.",
            dob: "283 DC",
            family: {
                name: "Casa Stark, Casa Targaryen",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "Jon Nieve (en inglés, Jon Snow), es un personaje ficticio de la saga de libros Canción de hielo y fuego del escritor estadounidense George R. R. Martin y de su correspondiente adaptación televisiva, Juego de tronos. Se trata de uno de los personajes principales, teniendo capítulos desde su punto de vista en cuatro de los cinco libros lanzados hasta la fecha. \n Aparecido en el primer volumen de la serie, Juego de tronos, Jon aparece como el hijo bastardo de Eddard Stark, Señor de Invernalia y Guardián del Norte. Debido a que en la obra de Martin los bastardos no poseen ningún derecho hereditario, Jon decidió unirse a la Guardia de la Noche, una hermandad de hombres gobernada por Benjen Stark, el hermano menor de su padre. Ésta hermandad custodia El Muro, la frontera que separa el continente de Poniente de las tierras heladas del norte donde viven los salvajes, liderados por Mance Rayder.",
            history: "Los orígenes de Jon Nieve son hoy una de las incógnitas en la obra de Martin. Según declara Eddard Stark, su declarado padre en la obra, Jon es un hijo bastardo suyo nacido de una relación con una mujer llamada Wylla durante la Rebelión de Robert. Jon nació aproximadamente hacia el fin de estos enfrentamientos, siendo llevado a Invernalia por su padre al volver de la guerra pese al rechazo de su esposa, Catelyn Tully, que siempre trató con desprecio al muchacho al que veía como un recordatorio de la infidelidad de su marido. Jon fue criado como un hijo más de Lord Eddard y desarrolló una relación de amistad-rivalidad con su medio-hermano y heredero de Invernalia, Robb Stark.",
            actor: "Kit Harington"

        }, {
            id: 4,
            name: "Margaery Tyrell",
            alias: "La Joven Reina, La Viuda Negra",
            dob: "283 DC",
            family: {
                name: "Casa Tyrell",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "Margaery Tyrell es un personaje ficticio de la saga Canción de hielo y fuego del escritor George R.R. Martin. Si bien en la obra escrita tiene un rol secundario, el personaje cobra más importancia en la adaptación televisiva de HBO, Juego de Tronos. \n En la saga escrita, apenas se poseen datos sobre la personalidad de Margaery Tyrell debido a que adquiere un rol secundario. Se da a entender que se trata de una mujer de carácter extrovertido y alegre, debido a que siempre se hallaba en compañía de damas, bardos, músicos o malabaristas. Aficionada también a las obras de caridad, se introducía en los barrios pobres y alternaba con la ciudadanía, lo que le hizo ganarse el cariño del pueblo. La reina Cersei Lannister, posiblemente debido a su creciente paranoia sobre Margaery, la definía como «Un lobo con piel de cordero». Se la considera también una mujer perspicaz, pues nada más ser encarcelada supo averiguar que Cersei estaba detrás de las acusaciones contra ella.",
            history: " Margaery contrae matrimonio con Renly Baratheon, el cual con la ayuda de la Casa Tyrell se ha autoproclamado Rey de los Siete Reinos. Margaery se asienta en Puenteamago, el asentamiento de la Casa Caswell, junto a los ejércitos de Renly que se preparan para marchar hacia Bastión de Tormentas para enfrentarse a Stannis Baratheon.2​ Sin embargo,Renly es asesinado en misteriosas circunstancias sin llegar a consumar el matrimonio.\n     Los Tyrell se alían con la Casa Lannister y derrotan a Stannis en la Batalla del Aguasnegras donde un ejército combinado Lannister-Tyrell vence a Stannis cuando estaba a punto de tomar la capital. Para afianzar esta nueva alianza entre el Trono de Hierro y los Tyrell, el rey Joffrey Baratheon rompe su compromiso con Sansa Stark y se promete con Margaery... Por respeto a los lectores no continuaremos con la historia para no hacer spoilers.",
            actor: "Natalie Dormer"

        }, {
            id: 5,
            name: "Sansa Stark",
            alias: "Pajarito, Sansa, Lady Lannister,Alayne Piedra.",
            dob: "286 DC",
            family: {
                name: "Casa Stark",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "Sansa Stark es un personaje ficticio de la saga de libros Canción de hielo y fuego del escritor George R. R. Martin. Es una de las hijas de Eddard Stark, Señor de Invernalia, Guardián del Norte y Mano del Rey de Robert Baratheon. Sansa es uno de los personajes principales de la saga, contando con capítulos desde su punto de vista en cuatro de los cinco libros publicados hasta la fecha. \n    Sansa Stark es representada como la ingenua y soñadora hija mayor de Eddard Stark y Catelyn Tully. Idealizaba a los caballeros y soñaba con casarse con un príncipe guapo y cortés, influenciada por las historias y cuentos que leía. Sansa creció representando el ejemplo de la dama perfecta: hermosa y elegante, sabía cantar, bailar, bordar y tenía unos modales exquisitos. Sansa era la más diferente de todos los hermanos Stark, sobre todo tenía una personalidad completamente opuesta a la de su hermana Arya. \n El personaje de Sansa es de los que más evoluciona a lo largo de la saga, una vez se sumerge en el mundo de la corte y observa que nada es como ella había imaginado, adopta una visión pesimista y trágica de la vida. Sin que ella sea consciente, se convierte en el principal peón de la Guerra de los Cinco Reyes. Tras su estancia en el Nido de Águilas con Petyr Baelish, Sansa adopta el nombre de «Alayne Piedra» y comienza a comprender cómo se practica el «juego de tronos».",
            history: "Cuando el rey Robert Baratheon visita Invernalia, el rey y su padre comprometen a Sansa con el príncipe Joffrey Baratheon, heredero del Trono de Hierro. Sansa cayó rendida ante el joven y apuesto príncipe, al que idealizaba y con el que estaba ansiosa por casarse; incluso llegó a mentir para protegerle, lo que causó la muerte de su loba huargo, Dama.\n Sansa llega a Desembarco del Rey junto a su hermana Arya y su mejor amiga, Jeyne Poole. Sansa cada día estaba más entusiasmada con su compromiso, pero se decepciona al saber que su padre ha renunciado al cargo de Mano del Rey y quiere regresar a Invernalia con ellas.​ Creyendo que si se lo decía a la reina podría quedarse con Joffrey, le cuenta a la reina Cersei los planes de su padre, ayudando que la reina elucubrase el arresto de Ned Stark. \n Tras el arresto de su padre, Sansa le pide al rey Joffrey misericordia por él. El rey le promete que si declara su traición, será clemente. Pero finalmente Joffrey ordena decapitar a Ned Stark pese a las súplicas de Sansa y las advertencias de su madre. ",
            actor: "Sophie Turner"

        }, {
            id: 6,
            name: "Cersei Lannister",
            alias: "Reina Cersei, La Primera de su Nombre,Reina de los Ándalos, los Rhoynar y los Primeros Hombres, Protectora de los 7 Reinos",
            dob: "266 DC",
            family: {
                name: "",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "Cersei Lannister es un personaje ficticio de la saga Canción de hielo y fuego de George R.R.Martin.Se caracteriza por ser la intrigante y ambiciosa esposa del rey Robert Baratheon, reina consorte de los Siete Reinos.Es uno de los personajes principales de la saga y cuenta con capítulos propios en el cuarto libro, Festín de Cuervos.Por sus actos y actitud es considerada una de las principales antagonistas de la serie.\n Cersei es representada como una mujer de carácter narcisista y ambicioso, no se detiene ante nada para cumplir sus objetivos y ella misma admite no amar a ninguna otra persona que no sea ella o sus hijos, pues cree que el amor hace a las personas débiles.\n Ya desde su juventud, Cersei admiraba a su padre y sus dotes de mando, deseando probar que era tan buen gobernante como su progenitor, pero cuando consigue el mando no es capaz de manejarlo, ya que no posee la dedicación y prudencia suficientes para la política y evita enfrentarse a situaciones delicadas, prefiriendo rodearse de leales y aduladores.Tampoco es capaz de tolerar las opiniones disidentes y confunde el desacuerdo con rebeldía.",
            history: " Cersei fue la primera hija de Lord Tywin Lannister, Señor de Roca Casterly y Guardián del Occidente, además de Mano del Rey de Aerys II Targaryen por entonces.Cersei era melliza de su hermano Jaime, el cual nació aferrado a su pie.Desde que eran niños, ambos fueron muy cercanos e inseparables y juntos comenzaron a explorar su sexualidad, incluso su madre Joanna separó sus aposentos cuando los descubrió en actitudes obscenas.\n Siendo todavía una niña, su madre murió en el parto de su hermano Tyrion, resultando ser que Tyrion era un enano deforme.Cersei siempre guardó un gran desprecio por su hermano pequeño, no solo por su actitud hedonista y por provocar la muerte de su madre en el parto, sino también por una profecía que afirmó que su hermano menor la estrangularía.\n Después de que Robert Baratheon se convirtiera en rey, Cersei se casó con él por orden de su padre.En un principio, Cersei estaba entusiasmada por casarse con el aguerrido y apuesto Robert, que era el deseo de cualquier doncella, pero Cersei pronto se dio cuenta de que Robert amaba a otra mujer, Lyanna Stark, la cual ya había fallecido.En su noche de bodas, un borracho Robert llamó a Cersei «Lyanna»: eso hizo que Robert se ganara el eterno rencor y desprecio de Cersei.Ambos tendrían tres hijos: Joffrey, Myrcella y Tommen, que en realidad eran fruto del incesto con su hermano Jaime, aunque esto permaneció desconocido para todos, incluido el rey.",
            actor: "Lena Headey"

        }

    ];



    res.json(characters);
})
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))

