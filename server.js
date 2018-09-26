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
            description: "Daenerys Targaryen es un personaje de ficción de la saga de literatura fantástica Canción de hielo y fuego, escrita por George R. R. Martin. Daenerys es uno de los personajes principales y posee capítulos narrados desde su punto de vista en Juego de tronos, Choque de reyes, Tormenta de espadas y Danza de dragones. /n  Daenerys fue la única hija del rey Aerys II Targaryen y de su hermana-esposa,la reina Rhaella. Tras la muerte de su padre y de su hermano mayor en la Guerra del Usurpador, su madre murió dando a luz a la pequeña Daenerys. De esa manera, su hermano mayor Viserys quedó como legítimo rey Targaryen al Trono de Hierro y ella como su heredera. /n Se ha señalado que el destinador inicial del personaje de Daenerys es el «deseo de venganza».",
            history: "Daenerys fue la hija póstuma del rey Aerys II Targaryen, naciendo en mitad de una gran tormenta en la isla-fortaleza de Rocadragón, el hogar ancestral de la Casa Targaryen. Su madre, la reina Rhaella, murió cuando estaba dando a luz. Apenas siendo una recién nacida, su padre había muerto en Desembarco del Rey durante el saqueo que los Lannister sometieron a la capital y Robert Baratheon se había convertido en el nuevo Rey de los Siete Reinos. Huyendo de él, la pequeña Daenerys y su hermano mayor Viserys fueron trasladados a la ciudad de Braavos por Ser Willem Darry. /n Daenerys y Viserys permanecieron al cuidado de Ser Willem en Braavos hasta la muerte de éste, tras la cual los criados les robaron todas sus posesiones y ambos quedaron en la calle. Daenerys siempre extrañaría mucho el hogar de su infancia, como símbolo de la niñez que nunca tuvo. Viserys y Daenerys vagaron los siguientes años por las Ciudades Libres buscando apoyos para su causa, pero lo único que consiguieron fueron promesas vanas. Arruinados, Viserys se vio obligado a vender todas las menguadas riquezas que poseían, incluyendo la corona de su madre, lo que le valió el apodo de «El Rey Mendigo». Finalmente ambos se establecieron en Pentos, donde fueron acogidos por el rico y poderoso magíster Illyrio Mopatis.",
            actor: "Emilia Clarke"
        },
        {
            id: 2,
            name: "",
            alias: "",
            dob: "",
            family: {
                name: "",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "",
            history: "",
            actor: ""

        }, {
            id: 3,
            name: "",
            alias: "",
            dob: "",
            family: {
                name: "",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "",
            history: "",
            actor: ""

        }, {
            id: 4,
            name: "",
            alias: "",
            dob: "",
            family: {
                name: "",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "",
            history: "",
            actor: ""

        }, {
            id: 5,
            name: "",
            alias: "",
            dob: "",
            family: {
                name: "",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "",
            history: "",
            actor: ""

        }, {
            id: 6,
            name: "",
            alias: "",
            dob: "",
            family: {
                name: "",
                logo: {
                    src: ""
                }
            },
            picture: {
                src: ""
            },
            description: "",
            history: "",
            actor: ""

        }

    ];



    res.json(characters);
})
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`))

