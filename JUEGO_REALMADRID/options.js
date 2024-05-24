const realPlayers = [
    {
        name: 'Jude Bellingham',
        team: 'Real Madrid',
        number: 5,
        age: 20,
        position: 'Centrocampista',
        height: '1.86 m',
        weight: '75 kg',
        birthDate: '29/06/2003',
        countryFlag: '../BANDERAS/inglaterra.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffXLoQEViaQPbfQTpbUpXcMea0QFsigIu8g&usqp=CAU',
        info: 'Jude Victor William Bellingham es un futbolista británico que juega de centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Federico Valverde',
        team: 'Real Madrid',
        number: 15,
        age: 25,
        position: 'Centrocampista',
        height: '1.82 m',
        weight: '78 kg',
        birthDate: '22/07/1998',
        countryFlag: '../BANDERAS/uruguay.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6s1dG03fuwITBBhFHeRiHYgMBu3KWL7T5g&usqp=CAU',
        info: 'Federico Santiago Valverde Dipetta, conocido deportivamente como Fede Valverde, es un futbolista uruguayo nacionalizado español en 2020 que juega como centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'LuKa Modric',
        team: 'Real Madrid',
        number: 10,
        age: 38,
        position: 'Centrocampista',
        height: '1.72 m',
        weight: '66 kg',
        birthDate: '09/10/1985',
        countryFlag: '../BANDERAS/croacia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-HzN4W_pdecIdL3tZ_n6IqImJsjZ-Wyvcw&usqp=CAU',
        info: 'Luka Modrić es un futbolista croata que desde 2012 juega como centrocampista en el Real Madrid C. F. de la Primera División de España. Fue ganador del Balón de Oro y obtuvo el Premio The Best al mejor jugador del mundo según la FIFA en 2018.'
    },
    {
        name: 'Vinicius Junior',
        team: 'Real Madrid',
        number: 7,
        age: 23,
        position: 'Delantero',
        height: '1.76 m',
        weight: '73 kg',
        birthDate: '12/07/2000',
        countryFlag: '../BANDERAS/brasil.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5af1GNhxeT0CP0CoZxWl5Bm529UxsWafyQ&usqp=CAU',
        info: 'Vinicius José Paixão de Oliveira Júnior, más conocido como Vinicius Jr. o Vini Jr. es un futbolista brasileño. Juega como delantero y su equipo actual es el Real Madrid C. F. de la Primera División de España. Es internacional absoluto con la selección de fútbol de Brasil.'
    },
    {
        name: 'Toni Kroos',
        team: 'Real Madrid',
        number: 8,
        age: 34,
        position: 'Centrocampista',
        height: '1.83 m',
        weight: '76 kg',
        birthDate: '04/01/1990',
        countryFlag: '../BANDERAS/alemania.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5KLyoKk6YAYOc1LZB8TZM4HN0cKqIWCk4g&usqp=CAU',
        info: 'Toni Kroos es un futbolista alemán que juega como centrocampista en el Real Madrid C. F. de la Primera División de España. Por su extraordinaria visión de juego, pase y golpeo de balón, es considerado uno de los jugadores más destacados de su generación, además de ser uno de los más laureados.'
    },
    {
        name: 'Rodrygo Goes',
        team: 'Real Madrid',
        number: 11,
        age: 23,
        position: 'Delantero',
        height: '1.74 m',
        weight: '64 kg',
        birthDate: '09/01/2001',
        countryFlag: '../BANDERAS/brasil.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0jXB6iwtHCD5VLeDq30Gz6XwSisnUQANwQ&usqp=CAU',
        info: 'Rodrygo Silva de Goes, conocido simplemente como Rodrygo, es un futbolista brasileño nacionalizado español que juega como delantero en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Aurélien Tchouaméni',
        team: 'Real Madrid',
        number: 18,
        age: 24,
        position: 'Centrocampista',
        height: '1.87 m',
        weight: '81 kg',
        birthDate: '27/01/2000',
        countryFlag: '../BANDERAS/francia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7Y63KIhKVQ-fIWSIFSHiQi1pCrRsDEhzMQ&usqp=CAU',
        info: 'Aurélien Djani Tchouaméni es un futbolista francés que juega de centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Brahim Diaz',
        team: 'Real Madrid',
        number: 21,
        age: 24,
        position: 'Delantero',
        height: '1.71 m',
        weight: '59 kg',
        birthDate: '03/08/1999',
        countryFlag: '../BANDERAS/marruecos.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0hdaSzLYTzRJHp5_xmnHmNK2O52cnQdwmQ&usqp=CAU',
        info: 'Brahim Abdelkader Díaz es un futbolista hispanomarroquí que juega como centrocampista en el Real Madrid C. F. de la primera división de España. También es internacional con la selección de fútbol de Marruecos.'
    },
    {
        name: 'Eduardo Camavinga',
        team: 'Real Madrid',
        number: 12,
        age: 21,
        position: 'Centrocampista',
        height: '1.82 m',
        weight: '69 kg',
        birthDate: '10/11/2002',
        countryFlag: '../BANDERAS/francia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qFN_Z9EIAKw-fjmts63-CD_7r39-r_3g6g&usqp=CAU',
        info: 'Eduardo Celmi Camavinga es un futbolista francés que juega como centrocampista en el Real Madrid C. F. de la Primera División de España. Además de la francesa, posee la nacionalidad angoleña por nacimiento y la congolesa por ascendencia.'
    },
    {
        name: 'Arda Güler',
        team: 'Real Madrid',
        number: 24,
        age: 19,
        position: 'Centrocampista',
        height: '1.75 m',
        weight: '62 kg',
        birthDate: '25/02/2005',
        countryFlag: '../BANDERAS/turquia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzooNiH1Lsts6SjdwNPzV5vNHMa41Vwb0-A&usqp=CAU',
        info: 'Arda Güler es un futbolista turco que juega de centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Antonio Rüdiger',
        team: 'Real Madrid',
        number: 22,
        age: 31,
        position: 'Defensa',
        height: '1.92 m',
        weight: '85 kg',
        birthDate: '03/03/1993',
        countryFlag: '../BANDERAS/alemania.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4_v1re2WSd7f7wjScCSx5ykvb8VlTeG9rw&usqp=CAU',
        info: 'Antonio Rüdiger es un futbolista alemán que juega como defensa en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Nacho Fernandez',
        team: 'Real Madrid',
        number: 6,
        age: 34,
        position: 'Defensa',
        height: '1.8 m',
        weight: '76 kg',
        birthDate: '18/01/1990',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI426ByqiibyjEQl-So2bf-Vvbdu6uWAeXGw&usqp=CAU',
        info: 'José Ignacio Fernández Iglesias, más conocido como Nacho, es un futbolista español que juega como defensa en el Real Madrid C. F. de la Primera División de España del cual es actualmente primer capitán.'
    },
    {
        name: 'Dani Carvajal',
        team: 'Real Madrid',
        number: 2,
        age: 32,
        position: 'Defensa',
        height: '1.73 m',
        weight: '70 kg',
        birthDate: '11/01/1992',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcEBBZ2_da0e5YEe7Pca1KVcaNSpstEpdMQ&usqp=CAU',
        info: 'Daniel Carvajal Ramos, conocido simplemente como Dani Carvajal, es un futbolista español que juega como defensa en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Éder Militão',
        team: 'Real Madrid',
        number: 3,
        age: 26,
        position: 'Defensa',
        height: '1.86 m',
        weight: '78 kg',
        birthDate: '18/01/1998',
        countryFlag: '../BANDERAS/brasil.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMBLPq_SuVWY5cxdisCxaC-e-y_pOwBwBOw&usqp=CAU',
        info: 'Éder Gabriel Militão Pinheiro es un futbolista brasileño que juega como defensa en el Real Madrid C. F. de la Primera División de España. Es internacional con la selección brasileña de fútbol desde 2018.'
    },
    {
        name: 'David Alaba',
        team: 'Real Madrid',
        number: 4,
        age: 31,
        position: 'Defensa',
        height: '1.80 m',
        weight: '78 kg',
        birthDate: '24/06/1992',
        countryFlag: '../BANDERAS/austria.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ot96qP4OlagmoWxrq1EjY6stlz42BN6E-A&usqp=CAU',
        info: 'David Olatukunbo Alaba es un futbolista austríaco que juega como defensa en el Real Madrid C. F. de la Primera División de España y en la selección de Austria.'
    },
    {
        name: 'Joselu',
        team: 'Real Madrid',
        number: 14,
        age: 34,
        position: 'Delantero',
        height: '1.92 m',
        weight: '86 kg',
        birthDate: '27/03/1990',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD21Uc8U3MF-sd3T3VA_h_xLSz62l8-5u5g&usqp=CAU',
        info: 'José Luis Mato Sanmartín, conocido deportivamente como Joselu, es un futbolista español que juega como delantero en el Real Madrid C. F. de la Primera División de España, cedido por el R. C. D. Espanyol.'
    },
    {
        name: 'Lucas Vázquez',
        team: 'Real Madrid',
        number: 17,
        age: 32,
        position: 'Centrocampista',
        height: '1.73 m',
        weight: '70 kg',
        birthDate: '01/07/1991',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdPjSyrKsKDKFYoZzrGZ1U-EihRqjt7ceRQ&usqp=CAU',
        info: 'Lucas Vázquez Iglesias es un futbolista español que juega de lateral y extremo derecho en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Ferland Mendy',
        team: 'Real Madrid',
        number: 23,
        age: 28,
        position: 'Defensa',
        height: '1.80 m',
        weight: '73 kg',
        birthDate: '08/06/1995',
        countryFlag: '../BANDERAS/francia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMhgBa1H_bLxgJx6_K7tIv93NjEruYdtZRQ&usqp=CAU',
        info: 'Ferland Sinna Mendy es un futbolista francés. Juega como defensa en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Dani Ceballos',
        team: 'Real Madrid',
        number: 19,
        age: 27,
        position: 'Centrocampista',
        height: '1.79 m',
        weight: '70 kg',
        birthDate: '07/08/1996',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTATxzUkl15onEAFNDU7dzXK7XcekWpCtVA&usqp=CAU',
        info: 'Daniel Ceballos Fernández es un futbolista español que juega como centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Fran García',
        team: 'Real Madrid',
        number: 20,
        age: 25,
        position: 'Defensa',
        height: '1.69 m',
        weight: '69 kg',
        birthDate: '14/08/1999',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnh18LdZRRi3Spk0WpYGGNsy3vmuYCkmK37w&usqp=CAU',
        info: 'Francisco José García Torres, más conocido como Fran García, es un futbolista español que juega como lateral izquierdo en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Thibaut Courtois',
        team: 'Real Madrid',
        number: 1,
        age: 32,
        position: 'Arquero',
        height: '2 m',
        weight: '96 kg',
        birthDate: '11/05/1992',
        countryFlag: '../BANDERAS/belgica.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbwI4Hr-6BXKnBcejQkFgA1DvhfBY54qD8A&usqp=CAU',
        info: 'Thibaut Nicolas Marc Courtois, más conocido como Thibaut Courtois, es un futbolista belga que juega como portero en el Real Madrid C.F y en la Selección de Bélgica.'
    },
    {
        name: 'Andriy Lunin',
        team: 'Real Madrid',
        number: 13,
        age: 25,
        position: 'Arquero',
        height: '1.91 m',
        weight: '80 kg',
        birthDate: '11/02/1999',
        countryFlag: '../BANDERAS/ucrania.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w_ksgtnVOTwE-IFMnZli_WJLMvPq9LvFgQ&usqp=CAU',
        info: 'Andriy Oleksíyovych Lunin es un futbolista ucraniano que juega como portero en el Real Madrid C. F. de la Primera División de España. Fue candidato al Golden Boy como mejor jugador del mundo sub-21 en 2019.'
    },
    {
        name: 'Kepa Arrizabalaga',
        team: 'Real Madrid',
        number: 25,
        age: 29,
        position: 'Arquero',
        height: '1.88 m',
        weight: '89 kg',
        birthDate: '03/10/1994',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxAwDAvpWZcIE8ht_lcklUasUJCYYBj-H5A&usqp=CAU',
        info: 'Kepa Arrizabalaga Revuelta, conocido simplemente como Kepa, es un futbolista español, que juega como portero y su equipo actual es el Real Madrid C. F. de la Primera División de España en calidad de cedido por el Chelsea F. C.'
    },
]
const players = [
    {
        name: 'Jude Bellingham',
        team: 'Real Madrid',
        number: 5,
        age: 20,
        position: 'Centrocampista',
        height: '1.86 m',
        weight: '75 kg',
        birthDate: '29/06/2003',
        countryFlag: '../BANDERAS/inglaterra.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffXLoQEViaQPbfQTpbUpXcMea0QFsigIu8g&usqp=CAU',
        info: 'Jude Victor William Bellingham es un futbolista británico que juega de centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Federico Valverde',
        team: 'Real Madrid',
        number: 15,
        age: 25,
        position: 'Centrocampista',
        height: '1.82 m',
        weight: '78 kg',
        birthDate: '22/07/1998',
        countryFlag: '../BANDERAS/uruguay.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP6s1dG03fuwITBBhFHeRiHYgMBu3KWL7T5g&usqp=CAU',
        info: 'Federico Santiago Valverde Dipetta, conocido deportivamente como Fede Valverde, es un futbolista uruguayo nacionalizado español en 2020 que juega como centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'LuKa Modric',
        team: 'Real Madrid',
        number: 10,
        age: 38,
        position: 'Centrocampista',
        height: '1.72 m',
        weight: '66 kg',
        birthDate: '09/10/1985',
        countryFlag: '../BANDERAS/croacia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-HzN4W_pdecIdL3tZ_n6IqImJsjZ-Wyvcw&usqp=CAU',
        info: 'Luka Modrić es un futbolista croata que desde 2012 juega como centrocampista en el Real Madrid C. F. de la Primera División de España. Fue ganador del Balón de Oro y obtuvo el Premio The Best al mejor jugador del mundo según la FIFA en 2018.'
    },
    {
        name: 'Vinicius Junior',
        team: 'Real Madrid',
        number: 7,
        age: 23,
        position: 'Delantero',
        height: '1.76 m',
        weight: '73 kg',
        birthDate: '12/07/2000',
        countryFlag: '../BANDERAS/brasil.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5af1GNhxeT0CP0CoZxWl5Bm529UxsWafyQ&usqp=CAU',
        info: 'Vinicius José Paixão de Oliveira Júnior, más conocido como Vinicius Jr. o Vini Jr. es un futbolista brasileño. Juega como delantero y su equipo actual es el Real Madrid C. F. de la Primera División de España. Es internacional absoluto con la selección de fútbol de Brasil.'
    },
    {
        name: 'Toni Kroos',
        team: 'Real Madrid',
        number: 8,
        age: 34,
        position: 'Centrocampista',
        height: '1.83 m',
        weight: '76 kg',
        birthDate: '04/01/1990',
        countryFlag: '../BANDERAS/alemania.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5KLyoKk6YAYOc1LZB8TZM4HN0cKqIWCk4g&usqp=CAU',
        info: 'Toni Kroos es un futbolista alemán que juega como centrocampista en el Real Madrid C. F. de la Primera División de España. Por su extraordinaria visión de juego, pase y golpeo de balón, es considerado uno de los jugadores más destacados de su generación, además de ser uno de los más laureados.'
    },
    {
        name: 'Rodrygo Goes',
        team: 'Real Madrid',
        number: 11,
        age: 23,
        position: 'Delantero',
        height: '1.74 m',
        weight: '64 kg',
        birthDate: '09/01/2001',
        countryFlag: '../BANDERAS/brasil.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0jXB6iwtHCD5VLeDq30Gz6XwSisnUQANwQ&usqp=CAU',
        info: 'Rodrygo Silva de Goes, conocido simplemente como Rodrygo, es un futbolista brasileño nacionalizado español que juega como delantero en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Aurélien Tchouaméni',
        team: 'Real Madrid',
        number: 18,
        age: 24,
        position: 'Centrocampista',
        height: '1.87 m',
        weight: '81 kg',
        birthDate: '27/01/2000',
        countryFlag: '../BANDERAS/francia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7Y63KIhKVQ-fIWSIFSHiQi1pCrRsDEhzMQ&usqp=CAU',
        info: 'Aurélien Djani Tchouaméni es un futbolista francés que juega de centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Brahim Diaz',
        team: 'Real Madrid',
        number: 21,
        age: 24,
        position: 'Delantero',
        height: '1.71 m',
        weight: '59 kg',
        birthDate: '03/08/1999',
        countryFlag: '../BANDERAS/marruecos.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC0hdaSzLYTzRJHp5_xmnHmNK2O52cnQdwmQ&usqp=CAU',
        info: 'Brahim Abdelkader Díaz es un futbolista hispanomarroquí que juega como centrocampista en el Real Madrid C. F. de la primera división de España. También es internacional con la selección de fútbol de Marruecos.'
    },
    {
        name: 'Eduardo Camavinga',
        team: 'Real Madrid',
        number: 12,
        age: 21,
        position: 'Centrocampista',
        height: '1.82 m',
        weight: '69 kg',
        birthDate: '10/11/2002',
        countryFlag: '../BANDERAS/francia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qFN_Z9EIAKw-fjmts63-CD_7r39-r_3g6g&usqp=CAU',
        info: 'Eduardo Celmi Camavinga es un futbolista francés que juega como centrocampista en el Real Madrid C. F. de la Primera División de España. Además de la francesa, posee la nacionalidad angoleña por nacimiento y la congolesa por ascendencia.'
    },
    {
        name: 'Arda Güler',
        team: 'Real Madrid',
        number: 24,
        age: 19,
        position: 'Centrocampista',
        height: '1.75 m',
        weight: '62 kg',
        birthDate: '25/02/2005',
        countryFlag: '../BANDERAS/turquia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzooNiH1Lsts6SjdwNPzV5vNHMa41Vwb0-A&usqp=CAU',
        info: 'Arda Güler es un futbolista turco que juega de centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Antonio Rüdiger',
        team: 'Real Madrid',
        number: 22,
        age: 31,
        position: 'Defensa',
        height: '1.92 m',
        weight: '85 kg',
        birthDate: '03/03/1993',
        countryFlag: '../BANDERAS/alemania.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo4_v1re2WSd7f7wjScCSx5ykvb8VlTeG9rw&usqp=CAU',
        info: 'Antonio Rüdiger es un futbolista alemán que juega como defensa en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Nacho Fernandez',
        team: 'Real Madrid',
        number: 6,
        age: 34,
        position: 'Defensa',
        height: '1.8 m',
        weight: '76 kg',
        birthDate: '18/01/1990',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI426ByqiibyjEQl-So2bf-Vvbdu6uWAeXGw&usqp=CAU',
        info: 'José Ignacio Fernández Iglesias, más conocido como Nacho, es un futbolista español que juega como defensa en el Real Madrid C. F. de la Primera División de España del cual es actualmente primer capitán.'
    },
    {
        name: 'Dani Carvajal',
        team: 'Real Madrid',
        number: 2,
        age: 32,
        position: 'Defensa',
        height: '1.73 m',
        weight: '70 kg',
        birthDate: '11/01/1992',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcEBBZ2_da0e5YEe7Pca1KVcaNSpstEpdMQ&usqp=CAU',
        info: 'Daniel Carvajal Ramos, conocido simplemente como Dani Carvajal, es un futbolista español que juega como defensa en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Éder Militão',
        team: 'Real Madrid',
        number: 3,
        age: 26,
        position: 'Defensa',
        height: '1.86 m',
        weight: '78 kg',
        birthDate: '18/01/1998',
        countryFlag: '../BANDERAS/brasil.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVMBLPq_SuVWY5cxdisCxaC-e-y_pOwBwBOw&usqp=CAU',
        info: 'Éder Gabriel Militão Pinheiro es un futbolista brasileño que juega como defensa en el Real Madrid C. F. de la Primera División de España. Es internacional con la selección brasileña de fútbol desde 2018.'
    },
    {
        name: 'David Alaba',
        team: 'Real Madrid',
        number: 4,
        age: 31,
        position: 'Defensa',
        height: '1.80 m',
        weight: '78 kg',
        birthDate: '24/06/1992',
        countryFlag: '../BANDERAS/austria.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Ot96qP4OlagmoWxrq1EjY6stlz42BN6E-A&usqp=CAU',
        info: 'David Olatukunbo Alaba es un futbolista austríaco que juega como defensa en el Real Madrid C. F. de la Primera División de España y en la selección de Austria.'
    },
    {
        name: 'Joselu',
        team: 'Real Madrid',
        number: 14,
        age: 34,
        position: 'Delantero',
        height: '1.92 m',
        weight: '86 kg',
        birthDate: '27/03/1990',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHD21Uc8U3MF-sd3T3VA_h_xLSz62l8-5u5g&usqp=CAU',
        info: 'José Luis Mato Sanmartín, conocido deportivamente como Joselu, es un futbolista español que juega como delantero en el Real Madrid C. F. de la Primera División de España, cedido por el R. C. D. Espanyol.'
    },
    {
        name: 'Lucas Vázquez',
        team: 'Real Madrid',
        number: 17,
        age: 32,
        position: 'Centrocampista',
        height: '1.73 m',
        weight: '70 kg',
        birthDate: '01/07/1991',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShdPjSyrKsKDKFYoZzrGZ1U-EihRqjt7ceRQ&usqp=CAU',
        info: 'Lucas Vázquez Iglesias es un futbolista español que juega de lateral y extremo derecho en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Ferland Mendy',
        team: 'Real Madrid',
        number: 23,
        age: 28,
        position: 'Defensa',
        height: '1.80 m',
        weight: '73 kg',
        birthDate: '08/06/1995',
        countryFlag: '../BANDERAS/francia.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMhgBa1H_bLxgJx6_K7tIv93NjEruYdtZRQ&usqp=CAU',
        info: 'Ferland Sinna Mendy es un futbolista francés. Juega como defensa en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Dani Ceballos',
        team: 'Real Madrid',
        number: 19,
        age: 27,
        position: 'Centrocampista',
        height: '1.79 m',
        weight: '70 kg',
        birthDate: '07/08/1996',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTATxzUkl15onEAFNDU7dzXK7XcekWpCtVA&usqp=CAU',
        info: 'Daniel Ceballos Fernández es un futbolista español que juega como centrocampista en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Fran García',
        team: 'Real Madrid',
        number: 20,
        age: 25,
        position: 'Defensa',
        height: '1.69 m',
        weight: '69 kg',
        birthDate: '14/08/1999',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnh18LdZRRi3Spk0WpYGGNsy3vmuYCkmK37w&usqp=CAU',
        info: 'Francisco José García Torres, más conocido como Fran García, es un futbolista español que juega como lateral izquierdo en el Real Madrid C. F. de la Primera División de España.'
    },
    {
        name: 'Thibaut Courtois',
        team: 'Real Madrid',
        number: 1,
        age: 32,
        position: 'Arquero',
        height: '2 m',
        weight: '96 kg',
        birthDate: '11/05/1992',
        countryFlag: '../BANDERAS/belgica.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYbwI4Hr-6BXKnBcejQkFgA1DvhfBY54qD8A&usqp=CAU',
        info: 'Thibaut Nicolas Marc Courtois, más conocido como Thibaut Courtois, es un futbolista belga que juega como portero en el Real Madrid C.F y en la Selección de Bélgica.'
    },
    {
        name: 'Andriy Lunin',
        team: 'Real Madrid',
        number: 13,
        age: 25,
        position: 'Arquero',
        height: '1.91 m',
        weight: '80 kg',
        birthDate: '11/02/1999',
        countryFlag: '../BANDERAS/ucrania.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0w_ksgtnVOTwE-IFMnZli_WJLMvPq9LvFgQ&usqp=CAU',
        info: 'Andriy Oleksíyovych Lunin es un futbolista ucraniano que juega como portero en el Real Madrid C. F. de la Primera División de España. Fue candidato al Golden Boy como mejor jugador del mundo sub-21 en 2019.'
    },
    {
        name: 'Kepa Arrizabalaga',
        team: 'Real Madrid',
        number: 25,
        age: 29,
        position: 'Arquero',
        height: '1.88 m',
        weight: '89 kg',
        birthDate: '03/10/1994',
        countryFlag: '../BANDERAS/espana.png',
        teamLogo: '../ESCUDOS/madrid.png',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxAwDAvpWZcIE8ht_lcklUasUJCYYBj-H5A&usqp=CAU',
        info: 'Kepa Arrizabalaga Revuelta, conocido simplemente como Kepa, es un futbolista español, que juega como portero y su equipo actual es el Real Madrid C. F. de la Primera División de España en calidad de cedido por el Chelsea F. C.'
    },
]


// Variables globales
let currentIndex = Math.floor(Math.random() * realPlayers.length);
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
    document.getElementById('team').innerText = realPlayers[currentIndex].team;
    document.getElementById('number').innerText = realPlayers[currentIndex].number;
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
    const gamePrefix = 'madridGame'; // Prefijo único para este juego
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
    const correctName = realPlayers[currentIndex].name;
    let options = [correctName];

    while (options.length < 3) {
        const randomIndex = Math.floor(Math.random() * realPlayers.length);
        const randomName = realPlayers[randomIndex].name;
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
    const playerName = realPlayers[currentIndex].name;
    if (guess === playerName) {
        document.getElementById('result').innerText = '¡Correcto!';
        displayPlayerInfo();
        updateScore();
        guessedPlayers.push(currentIndex);
        if (score >= 23) {
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
    const player = realPlayers[currentIndex];
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
    if (score >= 23) {
        document.getElementById('exitButtonEnd').style.display = 'block';
        document.getElementById('saveGameButton').style.display = 'block'; // Mostrar botón "Guardar Partida"
    }
}

// Modificar la función saveGameAndExit() para usar una clave única para el almacenamiento local de cada juego
function saveGameAndExit() {
    const gamePrefix = 'madridGame'; // Prefijo único para este juego
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
    const gamePrefix = 'madridGame'; // Prefijo único para este juego
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
    const gamePrefix = 'madridGame'; // Prefijo único para este juego
    localStorage.removeItem(`${gamePrefix}_topPlayers`); // Eliminar los jugadores guardados del localStorage

    // Limpiar el contenedor de los mejores jugadores en la interfaz
    const topPlayersContainer = document.getElementById('topPlayers');
    topPlayersContainer.innerHTML = '';

    // Mostrar mensaje de confirmación (opcional)
    alert('Todos los jugadores guardados han sido eliminados.');
}

// Asignar la función al botón correspondiente
document.getElementById('clearPlayersButton').onclick = clearSavedPlayers;
