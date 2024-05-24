const barcelonaPlayers = [
    {
        "name": "Marc-André ter Stegen",
        "team": "FC Barcelona",
        "number": 1,
        "age": 32,
        "position": "Arquero",
        "height": "1.87 m",
        "weight": "85 kg",
        "birthDate": "30/04/1992",
        "countryFlag": "../BANDERAS/alemania.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcxlY8XPGe4QCdkeBh2WXNzo97KN0kjytQg&usqp=CAU",
        "info": "Marc-André ter Stegen firma como portero del FC Barcelona en verano de 2014 procedente del Borussia Mönchengladbach. Nacido el día 30 de abril de 1992 en la localidad de Mönchengladbach, el alemán despuntaba desde muy joven como uno de los porteros más prometedores del continente europeo."
    },
    {
        "name": "Iñaki Peña",
        "team": "FC Barcelona",
        "number": 13,
        "age": 25,
        "position": "Arquero",
        "height": "1.84 m",
        "weight": "78 kg",
        "birthDate": "02/03/1999",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFKb7d7SPxaKRWP2GtnhK1LU1am48Wqn9_A&usqp=CAU",
        "info": "Nacido en Alicante en 1999, Iñaki Peña llegó al Barça procedente del Villarreal en la categoría de Infantil en 2012. Durante su primera temporada ya ganó la Liga con el equipo azulgrana y lo repitió durante sus ascensos de categorías, destacando la Youth League de la temporada 2017/18."
    },
    {
        "name": "João Cancelo",
        "team": "FC Barcelona",
        "number": 2,
        "age": 30,
        "position": "Defensa",
        "height": "1.82 m",
        "weight": "74 kg",
        "birthDate": "27/05/1994",
        "countryFlag": "../BANDERAS/portugal.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxZ7b13Sv433U36NgWCzim4TSNaAkvuaEXA&usqp=CAU",
        "info": "Natural de Barreiro, Portugal, João Cancelo nació el 27 de mayo de 1994. En su misma localidad natal tuvo sus inicios en el mundo del fútbol, pero tres años más tarde dio un salto cualitativo al incorporarse a la cantera de Benfica."
    },
    {
        "name": "Alejandro Balde",
        "team": "FC Barcelona",
        "number": 3,
        "age": 20,
        "position": "Defensa",
        "height": "1.75 m",
        "weight": "69 kg",
        "birthDate": "18/10/2003",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ0O-QUcmVuKiABfWBYkDqG4p23NNAoLbgw&usqp=CAU",
        "info": "Alejandro Balde llega al Barça en 2011, con ocho años, procedente del fútbol base del Espanyol. El lateral debuta con el primer equipo la temporada 2021/22 en la penúltima jornada liguera. Y, posteriormente, a base de encadenar buenas actuaciones durante el curso 2022/23, se convierte en el lateral titular. Finalmente, pasa a tener ficha del primer equipo la temporada 2023/24."
    },
    {
        "name": "Iñigo Martinez",
        "team": "FC Barcelona",
        "number": 5,
        "age": 33,
        "position": "Defensa",
        "height": "1.82 m",
        "weight": "76 kg",
        "birthDate": "17/05/1991",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7FO7tN2zwFFPzbe-gY-tvBdA7Uu6G5sMWA&usqp=CAU",
        "info": "Iñigo Martinez Berridi (17 de mayo de 1991) es natural de la localidad vizcaína de Ondarroa, prácticamente en la frontera con la provincia de Gipuzkoa. Y la localización de su lugar de origen puede parecer anecdótica, pero hasta su llegada a Can Barça podía explicar exactamente el transcurso de su carrera."
    },
    {
        "name": "Ronald Araujo",
        "team": "FC Barcelona",
        "number": 4,
        "age": 24,
        "position": "Defensa",
        "height": "1.88 m",
        "weight": "79 kg",
        "birthDate": "07/03/1999",
        "countryFlag": "../BANDERAS/uruguay.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C2g-UQyiAuhc_YCN7WAfiwg-flYSF58B2Q&usqp=CAU",
        "info": "Ronald Araujo nació en Rivera, Uruguay, el 7 de marzo de 1999. El joven defensa central da sus primeros pasos como profesional en el equipo de su ciudad, y luego ingresa a las categorías inferiores del Rentistas, equipo de la Segunda División de Uruguay."
    },
    {
        "name": "Andreas Christensen",
        "team": "FC Barcelona",
        "number": 15,
        "age": 28,
        "position": "Defensa",
        "height": "1.87 m",
        "weight": "82 kg",
        "birthDate": "10/04/1996",
        "countryFlag": "../BANDERAS/dinamarca.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SR3tpfShv-i-W2camLoErA7cL0f46JyQZWqXUwOle1ivnv7Y96kykPM6qtsufz3OL9c&usqp=CAU",
        "info": "Andreas Christensen (10 de abril de 1996) nació en Allerød (Dinamarca) donde empezó a jugar a fútbol en el IF Skjold Birkerød. Su progresión y buen rendimiento hizo que se fijara en él el Brøndby IF."
    },
    {
        "name": "Marcos Alonso",
        "team": "FC Barcelona",
        "number": 17,
        "age": 33,
        "position": "Defensa",
        "height": "1.88 m",
        "weight": "84 kg",
        "birthDate": "28/12/1990",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoudiDzhlKyLMUntq_VTLQC5FKyyq-Iwa7Q&usqp=CAU",
        "info": "Natural de Madrid (28 de diciembre de 1990), Marcos Alonso nació en el seno de una familia de gran tradición futbolística. Su bisabuelo, Luís Zabala; su abuelo, Marcos Alonso Imaz, \"Marquitos\"; y su padre, Marcos Alonso Peña; jugaron de forma profesional. Además, tanto padre como bisabuelo lo hicieron defendiendo la camiseta azulgrana en alguna ocasión."
    },
    {
        "name": "Jules Kounde",
        "team": "FC Barcelona",
        "number": 23,
        "age": 25,
        "position": "Defensa",
        "height": "1.80 m",
        "weight": "75 kg",
        "birthDate": "12/11/1998",
        "countryFlag": "../BANDERAS/francia.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nXKf7UzCFndw_7VBs1rHVYMRhr37qswYjA&usqp=CAU",
        "info": "Jules Kounde nació en París el 12 de noviembre de 1998, en una familia de origen beninés. Aunque empezó a practicar fútbol en clubes pequeños de los alrededores de la ciudad de Burdeos, en el suroeste de Francia, no fue hasta los 14 años que pasó las pruebas y se incorporó a la cantera de un equipo profesional, en este caso, del Girondins de Burdeos."
    },
    {
        "name": "Gavi",
        "team": "FC Barcelona",
        "number": 6,
        "age": 20,
        "position": "Centrocampista",
        "height": "1.73 m",
        "weight": "70 kg",
        "birthDate": "05/08/2004",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJflBmFOCWQRLnVeMl3EiEGid45ivJfBdYvg&usqp=CAU",
        "info": "Pablo Páez Gavira, conocido como 'Gavi' (5 de agosto de 2004, Los Palacios y Villafranca) comienza a jugar a fútbol en diferentes equipos hasta que, finalmente, el Real Betis lo incorpora a su plantel. En las categorías inferiores del conjunto hispalense, el pequeño futbolista andaluz destaca como uno de los jugadores más prometedores del país y, tras un torneo nacional, varios equipos, entre ellos el Barça, se acercan a él para tratar de incorporarlo en su academia."
    },
    {
        "name": "Pedri",
        "team": "FC Barcelona",
        "number": 8,
        "age": 21,
        "position": "Centrocampista",
        "height": "1.74 m",
        "weight": "60 kg",
        "birthDate": "25/11/2002",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXN8M5btoMq14pJa6qkGwbo3OW_oOjWj5Oew&usqp=CAU",
        "info": "El 2 de septiembre de 2019, el FC Barcelona y Las Palmas llegan a un acuerdo para el traspaso de Pedri. Pero el jugador canario no se incorpora al equipo culé hasta agosto del 2020. Nacido en Tegueste, Tenerife, el 25 de noviembre de 2002, el canario inicia su carrera futbolística en el equipo de su localidad natal."
    },
    {
        "name": "Fermin Lopez",
        "team": "FC Barcelona",
        "number": 16,
        "age": 20,
        "position": "Centrocampista",
        "height": "1.74 m",
        "weight": "64 kg",
        "birthDate": "11/05/2003",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvrLOKQGf9eXXJUR9Lt73MVJpMGJcfvFavg&usqp=CAU",
        "info": "Fermín López Marín se formó en la cantera del Campillo, club de su ciudad natal, hasta que fichó por el Recreativo de Huelva, donde estuvo solamente un año. Posteriormente, la temporada 2011/12, se unió a las filas del Real Betis Balompié. Pero tras cuatro años en Sevilla, el jugador llegó a la Masía para incorporarse al Infantil A."
    },
    {
        "name": "Oriol Romeu",
        "team": "FC Barcelona",
        "number": 18,
        "age": 30,
        "position": "Centrocampista",
        "height": "1.83 m",
        "weight": "83 kg",
        "birthDate": "24/09/1991",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpMTnJHvgEX33-GGj6m3Svthpl9mt2CURGw&usqp=CAU",
        "info": "Oriol Romeu Vidal (24 de septiembre de 1991) empezó a jugar en las categorías inferiores del Espanyol antes de entrar en la Masía del Barça en 2004. En el club azulgrana se fue formando como jugador y pasó por las distintas categorías hasta consolidarse en el Barça Atlètic dirigido por Luis Enrique. Además, en la temporada 2010/11 disputó dos partidos oficiales con el primer equipo del Barça, con Pep Guardiola al frente."
    },
    {
        "name": "Sergi Roberto",
        "team": "FC Barcelona",
        "number": 20,
        "age": 29,
        "position": "Centrocampista",
        "height": "1.78 m",
        "weight": "68 kg",
        "birthDate": "07/02/1992",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6CKSoAmjVPXukAFKtCbC9HnKHQCIDF4FFg&usqp=CAU",
        "info": "Con 14 años Sergi Roberto, nacido el 7 de febrero de 1992, abandona Reus para pisar con fuerza en la Masia del FC Barcelona. Procedente del Nàstic de Tarragona, el centrocampista se va consolidando etapa tras etapa hasta convertirse en una pieza fija en el esquema del filial dirigido por Luis Enrique, equipo con el que debuta la temporada 2009/10."
    },
    {
        "name": "Frenkie de Jong",
        "team": "FC Barcelona",
        "number": 21,
        "age": 27,
        "position": "Centrocampista",
        "height": "1.80 m",
        "weight": "78 kg",
        "birthDate": "12/05/1997",
        "countryFlag": "../BANDERAS/paises-bajos.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlocP1pJGmRlrZaDUtdssdbQ-k0H3QUdLpQ&usqp=CAU",
        "info": "Frenkie de Jong nace en Arkel (Países Bajos) el 12 de mayo de 1997. El holandés llega al Barça en verano de 2019 después de una gran campaña con el Ajax de Amsterdam, consolidándose ya como un centrocampista de presente y futuro."
    },
    {
        "name": "İlkay Gündoğan",
        "team": "FC Barcelona",
        "number": 22,
        "age": 33,
        "position": "Centrocampista",
        "height": "1.92 m",
        "weight": "86 kg",
        "birthDate": "24/10/1990",
        "countryFlag": "../BANDERAS/alemania.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjyE9iOdhCL68mmceuH7swzCvduc33jrHow&usqp=CAU",
        "info": "İlkay Gündoğan (24 de octubre de 1990) es nacido en Gelsenkirchen (Alemania), pero con orígenes turcos. El centrocampista llega al Barça el verano de 2023, tras proclamarse campeón de la Champions con el Manchester City siendo el capitán y una pieza muy importante para el equipo inglés."
    },
    {
        "name": "Ferran Torres",
        "team": "FC Barcelona",
        "number": 7,
        "age": 24,
        "position": "Delantero",
        "height": "1.84 m",
        "weight": "77 kg",
        "birthDate": "29/02/2000",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eK0JuUv68W6VeEf5_a2tgnwjYfb3fmSSNw&usqp=CAU",
        "info": "Nacido el 29 de febrero del 2000 en Foios (Valencia), Ferran Torres empezó con el fútbol sala en la escuela EPLA y llamó la atención de la cantera del Valencia CF. Con sólo siete años, inició su trayectoria vistiendo la elástica valencianista."
    },
    {
        "name": "Robert Lewandowski",
        "team": "FC Barcelona",
        "number": 9,
        "age": 35,
        "position": "Delantero",
        "height": "1.85 m",
        "weight": "81 kg",
        "birthDate": "08/06/1995",
        "countryFlag": "../BANDERAS/polonia.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCLTYhEmCa6v9mEY4Sqq6xmunBMFLgina2g&usqp=CAU",
        "info": "En verano de 2022, Lewandowski decide abandonar la disciplina del Bayern de Múnich, equipo en el que estuvo ocho temporadas, y se incorpora al FC Barcelona. De esta forma, el club azulgrana se hace con un delantero histórico, que tiene unas estadísticas anotadoras de escándalo tanto en Alemania como en Europa."
    },
    {
        "name": "Raphinha",
        "team": "FC Barcelona",
        "number": 11,
        "age": 27,
        "position": "Delantero",
        "height": "1.76 m",
        "weight": "68 kg",
        "birthDate": "07/08/1996",
        "countryFlag": "../BANDERAS/brasil.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlV_K1_stYSNhqpKLzNhzBVICujGy2oK2RiQ&usqp=CAU",
        "info": "Raphael Dias Belloli (Raphinha) nació el 14 de diciembre de 1996 en Porto Alegre, Brasil. El jugador llega al Club en verano de 2022 procedente del Leeds United."
    },
    {
        "name": "João Félix",
        "team": "FC Barcelona",
        "number": 14,
        "age": 24,
        "position": "Delantero",
        "height": "1.81 m",
        "weight": "70 kg",
        "birthDate": "10/11/1999",
        "countryFlag": "../BANDERAS/portugal.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45kVSr1r1d3lvn-aUyluh0kRXwsfOw-Cbhw&usqp=CAU",
        "info": "Joao Félix Sequeira (10 de noviembre de 1999) es natural de la localidad de Viseu, Portugal. A poco más de 80 km de su ciudad natal dio sus primeros pasos en el fútbol en la academia juvenil del Oporto. Pero puede considerarse que su formación hasta profesional la hizo en Benfica, donde debutó la temporada 2018/2019. Entre todas las competiciones, jugó un total de 43 partidos haciendo grandes actuaciones que le otorgaron el Golden Boy de ese curso."
    },
    {
        "name": "Vitor Roque",
        "team": "FC Barcelona",
        "number": 19,
        "age": 19,
        "position": "Delantero",
        "height": "1.74 m",
        "weight": "78 kg",
        "birthDate": "28/02/2005",
        "countryFlag": "../BANDERAS/brasil.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrMsveHRqqmz6MQSW540NmfTdb9VNU_hNpw&usqp=CAU",
        "info": "Vitor Roque (Timóteo, 28 de febrero de 2005) llegó al Barça en el mercado de invierno de la temporada 2023/24, después de que se anunciara su fichaje en verano de 2023. Llegó procedente del Athletico Paranaense, equipo al que llegó en abril del 2022 y con el que debutó tanto en la Serie A brasileña como en la Copa Libertadores. Previamente, con el Cruzeiro, había debutado en la Serie B, la segunda división del país, con sólo 16 años. Sin embargo, Vitor Roque se formó en el América Mineiro."
    }
];

const players = [
    {
        "name": "Marc-André ter Stegen",
        "team": "FC Barcelona",
        "number": 1,
        "age": 32,
        "position": "Arquero",
        "height": "1.87 m",
        "weight": "85 kg",
        "birthDate": "30/04/1992",
        "countryFlag": "../BANDERAS/alemania.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDcxlY8XPGe4QCdkeBh2WXNzo97KN0kjytQg&usqp=CAU",
        "info": "Marc-André ter Stegen firma como portero del FC Barcelona en verano de 2014 procedente del Borussia Mönchengladbach. Nacido el día 30 de abril de 1992 en la localidad de Mönchengladbach, el alemán despuntaba desde muy joven como uno de los porteros más prometedores del continente europeo."
    },
    {
        "name": "Iñaki Peña",
        "team": "FC Barcelona",
        "number": 13,
        "age": 25,
        "position": "Arquero",
        "height": "1.84 m",
        "weight": "78 kg",
        "birthDate": "02/03/1999",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqFKb7d7SPxaKRWP2GtnhK1LU1am48Wqn9_A&usqp=CAU",
        "info": "Nacido en Alicante en 1999, Iñaki Peña llegó al Barça procedente del Villarreal en la categoría de Infantil en 2012. Durante su primera temporada ya ganó la Liga con el equipo azulgrana y lo repitió durante sus ascensos de categorías, destacando la Youth League de la temporada 2017/18."
    },
    {
        "name": "João Cancelo",
        "team": "FC Barcelona",
        "number": 2,
        "age": 30,
        "position": "Defensa",
        "height": "1.82 m",
        "weight": "74 kg",
        "birthDate": "27/05/1994",
        "countryFlag": "../BANDERAS/portugal.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwxZ7b13Sv433U36NgWCzim4TSNaAkvuaEXA&usqp=CAU",
        "info": "Natural de Barreiro, Portugal, João Cancelo nació el 27 de mayo de 1994. En su misma localidad natal tuvo sus inicios en el mundo del fútbol, pero tres años más tarde dio un salto cualitativo al incorporarse a la cantera de Benfica."
    },
    {
        "name": "Alejandro Balde",
        "team": "FC Barcelona",
        "number": 3,
        "age": 20,
        "position": "Defensa",
        "height": "1.75 m",
        "weight": "69 kg",
        "birthDate": "18/10/2003",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoJ0O-QUcmVuKiABfWBYkDqG4p23NNAoLbgw&usqp=CAU",
        "info": "Alejandro Balde llega al Barça en 2011, con ocho años, procedente del fútbol base del Espanyol. El lateral debuta con el primer equipo la temporada 2021/22 en la penúltima jornada liguera. Y, posteriormente, a base de encadenar buenas actuaciones durante el curso 2022/23, se convierte en el lateral titular. Finalmente, pasa a tener ficha del primer equipo la temporada 2023/24."
    },
    {
        "name": "Iñigo Martinez",
        "team": "FC Barcelona",
        "number": 5,
        "age": 33,
        "position": "Defensa",
        "height": "1.82 m",
        "weight": "76 kg",
        "birthDate": "17/05/1991",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7FO7tN2zwFFPzbe-gY-tvBdA7Uu6G5sMWA&usqp=CAU",
        "info": "Iñigo Martinez Berridi (17 de mayo de 1991) es natural de la localidad vizcaína de Ondarroa, prácticamente en la frontera con la provincia de Gipuzkoa. Y la localización de su lugar de origen puede parecer anecdótica, pero hasta su llegada a Can Barça podía explicar exactamente el transcurso de su carrera."
    },
    {
        "name": "Ronald Araujo",
        "team": "FC Barcelona",
        "number": 4,
        "age": 24,
        "position": "Defensa",
        "height": "1.88 m",
        "weight": "79 kg",
        "birthDate": "07/03/1999",
        "countryFlag": "../BANDERAS/uruguay.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C2g-UQyiAuhc_YCN7WAfiwg-flYSF58B2Q&usqp=CAU",
        "info": "Ronald Araujo nació en Rivera, Uruguay, el 7 de marzo de 1999. El joven defensa central da sus primeros pasos como profesional en el equipo de su ciudad, y luego ingresa a las categorías inferiores del Rentistas, equipo de la Segunda División de Uruguay."
    },
    {
        "name": "Andreas Christensen",
        "team": "FC Barcelona",
        "number": 15,
        "age": 28,
        "position": "Defensa",
        "height": "1.87 m",
        "weight": "82 kg",
        "birthDate": "10/04/1996",
        "countryFlag": "../BANDERAS/dinamarca.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_SR3tpfShv-i-W2camLoErA7cL0f46JyQZWqXUwOle1ivnv7Y96kykPM6qtsufz3OL9c&usqp=CAU",
        "info": "Andreas Christensen (10 de abril de 1996) nació en Allerød (Dinamarca) donde empezó a jugar a fútbol en el IF Skjold Birkerød. Su progresión y buen rendimiento hizo que se fijara en él el Brøndby IF."
    },
    {
        "name": "Marcos Alonso",
        "team": "FC Barcelona",
        "number": 17,
        "age": 33,
        "position": "Defensa",
        "height": "1.88 m",
        "weight": "84 kg",
        "birthDate": "28/12/1990",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVoudiDzhlKyLMUntq_VTLQC5FKyyq-Iwa7Q&usqp=CAU",
        "info": "Natural de Madrid (28 de diciembre de 1990), Marcos Alonso nació en el seno de una familia de gran tradición futbolística. Su bisabuelo, Luís Zabala; su abuelo, Marcos Alonso Imaz, \"Marquitos\"; y su padre, Marcos Alonso Peña; jugaron de forma profesional. Además, tanto padre como bisabuelo lo hicieron defendiendo la camiseta azulgrana en alguna ocasión."
    },
    {
        "name": "Jules Kounde",
        "team": "FC Barcelona",
        "number": 23,
        "age": 25,
        "position": "Defensa",
        "height": "1.80 m",
        "weight": "75 kg",
        "birthDate": "12/11/1998",
        "countryFlag": "../BANDERAS/francia.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nXKf7UzCFndw_7VBs1rHVYMRhr37qswYjA&usqp=CAU",
        "info": "Jules Kounde nació en París el 12 de noviembre de 1998, en una familia de origen beninés. Aunque empezó a practicar fútbol en clubes pequeños de los alrededores de la ciudad de Burdeos, en el suroeste de Francia, no fue hasta los 14 años que pasó las pruebas y se incorporó a la cantera de un equipo profesional, en este caso, del Girondins de Burdeos."
    },
    {
        "name": "Gavi",
        "team": "FC Barcelona",
        "number": 6,
        "age": 20,
        "position": "Centrocampista",
        "height": "1.73 m",
        "weight": "70 kg",
        "birthDate": "05/08/2004",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJflBmFOCWQRLnVeMl3EiEGid45ivJfBdYvg&usqp=CAU",
        "info": "Pablo Páez Gavira, conocido como 'Gavi' (5 de agosto de 2004, Los Palacios y Villafranca) comienza a jugar a fútbol en diferentes equipos hasta que, finalmente, el Real Betis lo incorpora a su plantel. En las categorías inferiores del conjunto hispalense, el pequeño futbolista andaluz destaca como uno de los jugadores más prometedores del país y, tras un torneo nacional, varios equipos, entre ellos el Barça, se acercan a él para tratar de incorporarlo en su academia."
    },
    {
        "name": "Pedri",
        "team": "FC Barcelona",
        "number": 8,
        "age": 21,
        "position": "Centrocampista",
        "height": "1.74 m",
        "weight": "60 kg",
        "birthDate": "25/11/2002",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXN8M5btoMq14pJa6qkGwbo3OW_oOjWj5Oew&usqp=CAU",
        "info": "El 2 de septiembre de 2019, el FC Barcelona y Las Palmas llegan a un acuerdo para el traspaso de Pedri. Pero el jugador canario no se incorpora al equipo culé hasta agosto del 2020. Nacido en Tegueste, Tenerife, el 25 de noviembre de 2002, el canario inicia su carrera futbolística en el equipo de su localidad natal."
    },
    {
        "name": "Fermin Lopez",
        "team": "FC Barcelona",
        "number": 16,
        "age": 20,
        "position": "Centrocampista",
        "height": "1.74 m",
        "weight": "64 kg",
        "birthDate": "11/05/2003",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlvrLOKQGf9eXXJUR9Lt73MVJpMGJcfvFavg&usqp=CAU",
        "info": "Fermín López Marín se formó en la cantera del Campillo, club de su ciudad natal, hasta que fichó por el Recreativo de Huelva, donde estuvo solamente un año. Posteriormente, la temporada 2011/12, se unió a las filas del Real Betis Balompié. Pero tras cuatro años en Sevilla, el jugador llegó a la Masía para incorporarse al Infantil A."
    },
    {
        "name": "Oriol Romeu",
        "team": "FC Barcelona",
        "number": 18,
        "age": 30,
        "position": "Centrocampista",
        "height": "1.83 m",
        "weight": "83 kg",
        "birthDate": "24/09/1991",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpMTnJHvgEX33-GGj6m3Svthpl9mt2CURGw&usqp=CAU",
        "info": "Oriol Romeu Vidal (24 de septiembre de 1991) empezó a jugar en las categorías inferiores del Espanyol antes de entrar en la Masía del Barça en 2004. En el club azulgrana se fue formando como jugador y pasó por las distintas categorías hasta consolidarse en el Barça Atlètic dirigido por Luis Enrique. Además, en la temporada 2010/11 disputó dos partidos oficiales con el primer equipo del Barça, con Pep Guardiola al frente."
    },
    {
        "name": "Sergi Roberto",
        "team": "FC Barcelona",
        "number": 20,
        "age": 29,
        "position": "Centrocampista",
        "height": "1.78 m",
        "weight": "68 kg",
        "birthDate": "07/02/1992",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq6CKSoAmjVPXukAFKtCbC9HnKHQCIDF4FFg&usqp=CAU",
        "info": "Con 14 años Sergi Roberto, nacido el 7 de febrero de 1992, abandona Reus para pisar con fuerza en la Masia del FC Barcelona. Procedente del Nàstic de Tarragona, el centrocampista se va consolidando etapa tras etapa hasta convertirse en una pieza fija en el esquema del filial dirigido por Luis Enrique, equipo con el que debuta la temporada 2009/10."
    },
    {
        "name": "Frenkie de Jong",
        "team": "FC Barcelona",
        "number": 21,
        "age": 27,
        "position": "Centrocampista",
        "height": "1.80 m",
        "weight": "78 kg",
        "birthDate": "12/05/1997",
        "countryFlag": "../BANDERAS/paises-bajos.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUlocP1pJGmRlrZaDUtdssdbQ-k0H3QUdLpQ&usqp=CAU",
        "info": "Frenkie de Jong nace en Arkel (Países Bajos) el 12 de mayo de 1997. El holandés llega al Barça en verano de 2019 después de una gran campaña con el Ajax de Amsterdam, consolidándose ya como un centrocampista de presente y futuro."
    },
    {
        "name": "İlkay Gündoğan",
        "team": "FC Barcelona",
        "number": 22,
        "age": 33,
        "position": "Centrocampista",
        "height": "1.92 m",
        "weight": "86 kg",
        "birthDate": "24/10/1990",
        "countryFlag": "../BANDERAS/alemania.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjyE9iOdhCL68mmceuH7swzCvduc33jrHow&usqp=CAU",
        "info": "İlkay Gündoğan (24 de octubre de 1990) es nacido en Gelsenkirchen (Alemania), pero con orígenes turcos. El centrocampista llega al Barça el verano de 2023, tras proclamarse campeón de la Champions con el Manchester City siendo el capitán y una pieza muy importante para el equipo inglés."
    },
    {
        "name": "Ferran Torres",
        "team": "FC Barcelona",
        "number": 7,
        "age": 24,
        "position": "Delantero",
        "height": "1.84 m",
        "weight": "77 kg",
        "birthDate": "29/02/2000",
        "countryFlag": "../BANDERAS/espana.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2eK0JuUv68W6VeEf5_a2tgnwjYfb3fmSSNw&usqp=CAU",
        "info": "Nacido el 29 de febrero del 2000 en Foios (Valencia), Ferran Torres empezó con el fútbol sala en la escuela EPLA y llamó la atención de la cantera del Valencia CF. Con sólo siete años, inició su trayectoria vistiendo la elástica valencianista."
    },
    {
        "name": "Robert Lewandowski",
        "team": "FC Barcelona",
        "number": 9,
        "age": 35,
        "position": "Delantero",
        "height": "1.85 m",
        "weight": "81 kg",
        "birthDate": "08/06/1995",
        "countryFlag": "../BANDERAS/polonia.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpCLTYhEmCa6v9mEY4Sqq6xmunBMFLgina2g&usqp=CAU",
        "info": "En verano de 2022, Lewandowski decide abandonar la disciplina del Bayern de Múnich, equipo en el que estuvo ocho temporadas, y se incorpora al FC Barcelona. De esta forma, el club azulgrana se hace con un delantero histórico, que tiene unas estadísticas anotadoras de escándalo tanto en Alemania como en Europa."
    },
    {
        "name": "Raphinha",
        "team": "FC Barcelona",
        "number": 11,
        "age": 27,
        "position": "Delantero",
        "height": "1.76 m",
        "weight": "68 kg",
        "birthDate": "07/08/1996",
        "countryFlag": "../BANDERAS/brasil.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlV_K1_stYSNhqpKLzNhzBVICujGy2oK2RiQ&usqp=CAU",
        "info": "Raphael Dias Belloli (Raphinha) nació el 14 de diciembre de 1996 en Porto Alegre, Brasil. El jugador llega al Club en verano de 2022 procedente del Leeds United."
    },
    {
        "name": "João Félix",
        "team": "FC Barcelona",
        "number": 14,
        "age": 24,
        "position": "Delantero",
        "height": "1.81 m",
        "weight": "70 kg",
        "birthDate": "10/11/1999",
        "countryFlag": "../BANDERAS/portugal.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ45kVSr1r1d3lvn-aUyluh0kRXwsfOw-Cbhw&usqp=CAU",
        "info": "Joao Félix Sequeira (10 de noviembre de 1999) es natural de la localidad de Viseu, Portugal. A poco más de 80 km de su ciudad natal dio sus primeros pasos en el fútbol en la academia juvenil del Oporto. Pero puede considerarse que su formación hasta profesional la hizo en Benfica, donde debutó la temporada 2018/2019. Entre todas las competiciones, jugó un total de 43 partidos haciendo grandes actuaciones que le otorgaron el Golden Boy de ese curso."
    },
    {
        "name": "Vitor Roque",
        "team": "FC Barcelona",
        "number": 19,
        "age": 19,
        "position": "Delantero",
        "height": "1.74 m",
        "weight": "78 kg",
        "birthDate": "28/02/2005",
        "countryFlag": "../BANDERAS/brasil.png",
        "teamLogo": "../ESCUDOS/barcelona.png",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZrMsveHRqqmz6MQSW540NmfTdb9VNU_hNpw&usqp=CAU",
        "info": "Vitor Roque (Timóteo, 28 de febrero de 2005) llegó al Barça en el mercado de invierno de la temporada 2023/24, después de que se anunciara su fichaje en verano de 2023. Llegó procedente del Athletico Paranaense, equipo al que llegó en abril del 2022 y con el que debutó tanto en la Serie A brasileña como en la Copa Libertadores. Previamente, con el Cruzeiro, había debutado en la Serie B, la segunda división del país, con sólo 16 años. Sin embargo, Vitor Roque se formó en el América Mineiro."
    }
]

// Variables globales
let currentIndex = Math.floor(Math.random() * barcelonaPlayers.length);
let score = 0;
let attempts = 2;
let guessedPlayers = [];
let startTime;
let timerInterval;

// Funciones de utilidad
function normalizeString(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min. ${remainingSeconds} seg.`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Funciones relacionadas con el juego
function displayHint() {
    document.getElementById('team').innerText = barcelonaPlayers[currentIndex].team;
    document.getElementById('number').innerText = barcelonaPlayers[currentIndex].number;
}

function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    const now = new Date();
    const timeElapsed = Math.floor((now - startTime) / 1000);
    document.getElementById('timer').innerText = formatTime(timeElapsed);
}

function startGame() {
    const playerName = document.getElementById('playerName').value.trim();
    if (playerName.length !== 12) {
        alert("Por favor, ingresa un nombre que tenga exactamente 12 caracteres.");
        return;
    }
    const gamePrefix = 'barcelonaGame'; // Prefijo único para este juego
    // Verificar si el nombre ya está en el top 20 del juego del Liverpool
    const topPlayers = JSON.parse(localStorage.getItem(`${gamePrefix}_topPlayers`)) || [];
    const nameExists = topPlayers.some(player => player.name.toUpperCase() === playerName.toUpperCase());
    if (nameExists) {
        alert("Este nombre ya está en el top 20 del juego del Liverpool. Por favor, elige otro nombre.");
        return;
    }

    localStorage.setItem(`${gamePrefix}_playerName`, playerName);

    // Ocultar el contenedor de inicio
    document.getElementById('startContainer').style.display = 'none';

    // Restablecer el juego
    score = 0;
    guessedPlayers = [];
    startTime = null;
    resetGame(); // Restablecer elementos y variables del juego

    // Iniciar el juego
    console.log("Game started");
    startTimer();
    document.getElementById('gameContainer').style.display = 'block';
    displayHint();
    generateOptions();

    // Mostrar la lista actualizada de los 10 mejores jugadores
    showTopPlayers();
}

function generateOptions() {
    const correctName = barcelonaPlayers[currentIndex].name;
    let options = [correctName];

    while (options.length < 3) {
        const randomIndex = Math.floor(Math.random() * barcelonaPlayers.length);
        const randomName = barcelonaPlayers[randomIndex].name;
        if (!options.includes(randomName)) {
            options.push(randomName);
        }
    }

    options = shuffleArray(options);

    document.getElementById('option1').innerText = options[0];
    document.getElementById('option2').innerText = options[1];
    document.getElementById('option3').innerText = options[2];
}

function checkGuess(guess) {
    const playerName = barcelonaPlayers[currentIndex].name;
    if (guess === playerName) {
        document.getElementById('result').innerText = '¡Correcto!';
        displayPlayerInfo();
        updateScore();
        guessedPlayers.push(currentIndex);
        if (score >= 21) {
            stopTimer();
            const endTime = new Date();
            const timeElapsed = Math.floor((endTime - startTime) / 1000);
            const formattedTime = formatTime(timeElapsed);
            document.getElementById('result').innerText = `¡FELICITACIONES HAS ACABADO EL JUEGO!`;
            document.getElementById('timeElapsed').innerText = `TIEMPO: ${formattedTime}`;
            document.getElementById('timer').style.display = 'block';
            document.getElementById('option1').style.display = 'none';
            document.getElementById('option2').style.display = 'none';
            document.getElementById('option3').style.display = 'none';
            document.getElementById('congratulations').style.display = 'block'; // Mostrar contenedor de felicitaciones
            document.getElementById('playAgainButtonEnd').style.display = 'block'; // Mostrar botón de Jugar de Nuevo
            document.getElementById('saveGameButton').style.display = 'block'; // Mostrar botón Salir
            document.getElementById('exitButtonEnd').style.display = 'block'; // Mostrar botón Salir
            console.log("Game finished successfully, playAgainButtonEnd and exitButton displayed");
        } else {
            document.getElementById('nextButton').style.display = 'block';
            document.getElementById('option1').style.display = 'none';
            document.getElementById('option2').style.display = 'none';
            document.getElementById('option3').style.display = 'none';
        }
    } else {
        attempts--; // Reducir intentos
        if (attempts > 0) { // Si quedan intentos
            document.getElementById('result').innerText = `Incorrecto, intenta nuevamente. Te quedan ${attempts} intento(s).`;
        } else if (attempts === 0) { // Si ya no quedan intentos
            stopTimer();
            document.getElementById('result').innerText = `PERDISTE, INTÉNTALO DE NUEVO`;
            document.getElementById('gameOver').style.display = 'block';
            document.getElementById('nextButton').style.display = 'none';
            document.getElementById('option1').disabled = true;
            document.getElementById('option2').disabled = true;
            document.getElementById('option3').disabled = true;
            document.getElementById('playAgainButton').style.display = 'block';
            document.getElementById('exitButton').style.display = 'block'; // Mostrar botón Salir cuando los intentos sean 0
            document.getElementById('exitButton').onclick = goToStart; // Hacer que el botón "Salir" lleve al inicio
        }
    }
}

function displayPlayerInfo() {
    const player = barcelonaPlayers[currentIndex];
    document.getElementById('playerName').innerText = player.name;
    document.getElementById('playerAge').innerText = `Edad: ${player.age} años`;
    document.getElementById('playerPosition').innerText = `Posición: ${player.position}`;
    document.getElementById('playerNumber').innerText = `Número: ${player.number}`;
    document.getElementById('playerHeight').innerText = `Estatura: ${player.height}`;
    document.getElementById('playerWeight').innerText = `Peso: ${player.weight}`;
    document.getElementById('playerBirthDate').innerText = `Fecha de Nacimiento: ${player.birthDate}`;
    document.getElementById('playerInfoText').innerText = player.info;

    document.getElementById('playerCountryFlag').src = player.countryFlag;
    document.getElementById('playerTeamLogo').src = player.teamLogo;
    document.getElementById('playerImage').src = player.image;

    document.getElementById('playerInfo').style.display = 'block';
}

function updateScore() {
    score++;
    document.getElementById('score').innerText = score;
}

function resetAttempts() {
    attempts = 2;
}

function nextPlayer() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * players.length);
    } while (guessedPlayers.includes(newIndex));
    currentIndex = newIndex;
    resetGame();
    generateOptions();
    // Mostrar el botón "Salir" si el jugador ganó
    if (score >= 21) {
        document.getElementById('exitButtonEnd').style.display = 'block';
        document.getElementById('saveGameButton').style.display = 'block'; // Mostrar botón "Guardar Partida"
    }
}

// Modificar la función saveGameAndExit() para usar una clave única para el almacenamiento local de cada juego
function saveGameAndExit() {
    const gamePrefix = 'barcelonaGame'; // Prefijo único para este juego
    const playerName = localStorage.getItem(`${gamePrefix}_playerName`);
    const timeElapsedText = document.getElementById('timer').innerText;

    // Convertir el tiempo transcurrido a segundos
    const timeElapsedParts = timeElapsedText.split(" ");
    const totalSeconds = parseInt(timeElapsedParts[0]) * 60 + parseInt(timeElapsedParts[2]);

    const playerData = { name: playerName, time: totalSeconds }; // Guardar el tiempo en segundos para facilitar la comparación

    let topPlayers = JSON.parse(localStorage.getItem(`${gamePrefix}_topPlayers`)) || [];
    topPlayers.push(playerData); // Agregar el nuevo jugador a la lista de mejores jugadores

    // Ordenar por tiempo ascendente (el jugador más rápido primero)
    topPlayers.sort((a, b) => a.time - b.time);

    // Comprobar si el jugador está en el top 20
    const isInTop20 = topPlayers.indexOf(playerData) < 20;

    topPlayers = topPlayers.slice(0, 20); // Tomar los primeros 20 jugadores

    localStorage.setItem(`${gamePrefix}_topPlayers`, JSON.stringify(topPlayers)); // Guardar la lista actualizada

    // Mostrar la lista actualizada de los mejores jugadores
    showTopPlayers();

    // Si el jugador está en el top 20, mostrar la ventana emergente
    if (isInTop20) {
        showCongratulationsPopup();
    }

    // Volver al inicio
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('startContainer').style.display = 'block';
    resetGame();
}

function showCongratulationsPopup() {
    const popup = document.createElement('div');
    popup.id = 'congratulationsPopup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>¡FELICIDADES!</h2>
            <p>Has entrado al top 20 de los jugadores más rápidos.</p>
            <button id="closePopup">Cerrar</button>
        </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('closePopup').addEventListener('click', () => {
        document.body.removeChild(popup);
    });
}

function resetGame() {
    document.getElementById('playerInfo').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('result').innerText = '';
    document.getElementById('option1').style.display = 'block';
    document.getElementById('option2').style.display = 'block';
    document.getElementById('option3').style.display = 'block';
    document.getElementById('option1').disabled = false;
    document.getElementById('option2').disabled = false;
    document.getElementById('option3').disabled = false;
    resetAttempts();
    displayHint();
    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('congratulations').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'none';
    document.getElementById('playAgainButtonEnd').style.display = 'none';
    document.getElementById('saveGameButton').style.display = 'none'; // Ocultar botón "Guardar Partida" al reiniciar el juego
}

function exitToStart() {
    // Ocultar elementos relacionados con el juego terminado
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('congratulations').style.display = 'none';
    document.getElementById('exitButtonEnd').style.display = 'none';
    document.getElementById('gameOver').style.display = 'none';

    // Mostrar el contenedor de inicio
    document.getElementById('startContainer').style.display = 'block';

    // Restablecer todas las variables del juego
    score = 0;
    guessedPlayers = [];
    startTime = null;
    resetGame(); // Restablecer elementos y variables del juego

    // Ocultar el botón "Salir"
    document.getElementById('exitButton').style.display = 'none';
}

document.getElementById('iniciar').onclick = IniciarNuevo; // Asignar evento al botón "Salir"

function restartGame() {
    console.log("Restarting game");
    score = 0;
    document.getElementById('score').innerText = score;
    guessedPlayers = [];
    startTime = null;
    document.getElementById('timer').style.display = 'none';
    startTimer();
    nextPlayer();

    // Ocultar el botón "Salir" al reiniciar el juego
    document.getElementById('exitButtonEnd').style.display = 'none';
    document.getElementById('exitButton').style.display = 'none';
    document.getElementById('playAgainButton').style.display = 'none';
}

document.getElementById("btnSalir").addEventListener("click", function() {
    window.location.href = "../index.html";
});

function IniciarNuevo() {
    location.reload(); // Recarga la página para reiniciar el juego
}

window.onload = function() {
    document.getElementById('score').innerText = score;
    document.getElementById('startGameButton').onclick = startGame;
    document.getElementById('nextButton').onclick = nextPlayer;
    document.getElementById('playAgainButton').onclick = restartGame;
    document.getElementById('playAgainButtonEnd').onclick = restartGame;
    document.getElementById('saveGameButton').addEventListener('click', saveGameAndExit); // Asignar evento al botón "Guardar Partida"

    console.log("Window loaded, event listeners attached");

    // Mostrar los jugadores que han completado el juego en menos tiempo
    showTopPlayers();
};

function showTopPlayers() {
    const gamePrefix = 'barcelonaGame'; // Prefijo único para este juego
    const topPlayersContainer = document.getElementById('topPlayers');
    topPlayersContainer.innerHTML = ''; // Limpiar contenedor

    // Obtener los jugadores del localStorage usando la clave única
    const playersFromStorage = JSON.parse(localStorage.getItem(`${gamePrefix}_topPlayers`)) || [];

    // Ordenar por tiempo ascendente (el jugador más rápido primero)
    playersFromStorage.sort((a, b) => a.time - b.time);

    // Mostrar hasta los primeros 20 jugadores
    const numPlayersToShow = Math.min(playersFromStorage.length, 20);
    for (let i = 0; i < numPlayersToShow; i++) {
        const player = playersFromStorage[i];
        const playerElement = document.createElement('div');
        playerElement.classList.add('player-item'); // Agregar clase para aplicar estilo
        const index = (i + 1).toString().padStart(2, '0'); // Agregar ceros a la izquierda si es necesario
        const playerName = `<span class="player-name">${player.name.toUpperCase()}</span>`; // Nombre del jugador con estilo

        // Convertir el tiempo de segundos a minutos y segundos
        const formattedTime = formatTime(player.time);

        playerElement.innerHTML = `${index}. ${playerName} - ${formattedTime}`;
        topPlayersContainer.appendChild(playerElement);
    }
}



function clearSavedPlayers() {
    const gamePrefix = 'barcelonaGame'; // Prefijo único para este juego
    localStorage.removeItem(`${gamePrefix}_topPlayers`); // Eliminar los jugadores guardados del localStorage

    // Limpiar el contenedor de los mejores jugadores en la interfaz
    const topPlayersContainer = document.getElementById('topPlayers');
    topPlayersContainer.innerHTML = '';

    // Mostrar mensaje de confirmación (opcional)
    alert('Todos los jugadores guardados han sido eliminados.');
}

// Asignar la función al botón correspondiente
document.getElementById('clearPlayersButton').onclick = clearSavedPlayers;


