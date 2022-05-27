import { Model, belongsTo, createServer, hasMany } from 'miragejs';

import { sendResponse } from 'next/dist/server/image-optimizer';

export function makeServer() {
  const server = createServer({
    models: {
      continent: Model.extend({
        cities: hasMany(),
      }),
      city: Model.extend({
        continent: belongsTo(),
      })
    },
    seeds(server) {
      server.db.loadData({
        continents: [
          {
            id: 1,
            name: 'Europa',
            slug: 'europa',
            continentPhrase: "O continente mais antigo.",
            slideImage: "/Europa.png",
            bannerImage: '/EuropaBanner.png',
            continentBio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            countrys: 50,
            rankCitiesVisited: 27,
            languages: 60,
          },
          {
            id: 2,
            name: 'Ásia',
            slug: 'asia',
            continentPhrase: "O continente multicultural.",
            slideImage: "https://images.unsplash.com/photo-1512575217141-64978dcac41c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            bannerImage: "https://images.unsplash.com/photo-1600891964743-7bd0b11b2789?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974",
            continentBio: "Sed sed ante tortor. Curabitur pellentesque neque vitae mauris dictum laoreet fermentum ac nibh. Etiam in metus auctor augue tristique congue. Proin nec purus ac purus fringilla placerat. Nulla vel egestas massa, ac iaculis libero. Mauris vestibulum, lorem eu pellentesque pulvinar, mi felis imperdiet diam.",
            countrys: 50,
            rankCitiesVisited: 28,
            languages: 72,
          },
          {
            id: 3,
            name: 'América do Sul',
            slug: 'america-do-sul',
            continentPhrase: "Neque porro quisquam.",
            slideImage: "https://images.unsplash.com/photo-1552428386-840770ff7588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80",
            bannerImage: "https://images.unsplash.com/photo-1560455974-f8f8d2927175?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633",
            continentBio: "Sed sed ante tortor. Curabitur pellentesque neque vitae mauris dictum laoreet fermentum ac nibh. Etiam in metus auctor augue tristique congue. Proin nec purus ac purus fringilla placerat. Nulla vel egestas massa, ac iaculis libero. Mauris vestibulum, lorem eu pellentesque pulvinar, mi felis imperdiet diam.",
            countrys: 12,
            rankCitiesVisited: 3,
            languages: 9,
          },
          {
            id: 4,
            name: 'América do Norte',
            slug: 'america-do-norte',
            continentPhrase: 'Neque porro quisquam',
            slideImage: 'https://images.unsplash.com/photo-1619013971011-f901cfa5397b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470',
            bannerImage: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
            continentBio: "Sed sed ante tortor. Curabitur pellentesque neque vitae mauris dictum laoreet fermentum ac nibh. Etiam in metus auctor augue tristique congue. Proin nec purus ac purus fringilla placerat. Nulla vel egestas massa, ac iaculis libero. Mauris vestibulum, lorem eu pellentesque pulvinar, mi felis imperdiet diam.",
            countrys: 24,
            rankCitiesVisited: 10,
            languages: 6,
          },
          {
            id: 5,
            name: 'África',
            slug: 'africa',
            continentPhrase: "Integer viverra felis.",
            slideImage: "https://images.unsplash.com/photo-1591516051467-22161cd13281?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2161&q=80",
            bannerImage: "https://images.unsplash.com/photo-1527085118757-67fcf1304546?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1668",
            continentBio: "Sed sed ante tortor. Curabitur pellentesque neque vitae mauris dictum laoreet fermentum ac nibh. Etiam in metus auctor augue tristique congue. Proin nec purus ac purus fringilla placerat. Nulla vel egestas massa, ac iaculis libero. Mauris vestibulum, lorem eu pellentesque pulvinar, mi felis imperdiet diam.",
            countrys: 55,
            rankCitiesVisited: 9,
            languages: 500,
          },
          {
            id: 6,
            name: 'Oceania',
            slug: 'oceania',
            continentPhrase: "Vestibulum ante ipsum.",
            slideImage: "https://images.unsplash.com/photo-1496285705189-c290050257f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1564&q=80",
            bannerImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2130",
            continentBio: "Sed sed ante tortor. Curabitur pellentesque neque vitae mauris dictum laoreet fermentum ac nibh. Etiam in metus auctor augue tristique congue. Proin nec purus ac purus fringilla placerat. Nulla vel egestas massa, ac iaculis libero. Mauris vestibulum, lorem eu pellentesque pulvinar, mi felis imperdiet diam.",
            countrys: 14,
            rankCitiesVisited: 7,
            languages: 800,
          }
        ],
        cities: [
          {
            id: 1,
            city: "Londres",
            country: "Reino Unido",
            continentId: 1,
            image: "https://cdn.pixabay.com/photo/2010/12/13/10/21/bridge-2715__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/16/14/union-jack-26119__480.png",
          },
          {
            id: 2,
            city: "Paris",
            country: "França",
            continentId: 1,
            image: "https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/france-162295__480.png",
          },
          {
            id: 3,
            city: "Roma",
            country: "Itália",
            continentId: 1,
            image: "https://cdn.pixabay.com/photo/2015/07/23/16/23/san-pietro-857151__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/italy-162326__480.png",
          },
          {
            id: 4,
            city: "Praga",
            country: "República Tcheca",
            continentId: 1,
            image: "https://cdn.pixabay.com/photo/2016/11/21/14/02/prague-1845560__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/czech-republic-162276__340.png",
          },
          {
            id: 5,
            city: "Amsterdã",
            country: "Holanda",
            continentId: 1,
            image: "https://cdn.pixabay.com/photo/2019/08/06/11/58/city-4388160__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/12/51/holland-160486__480.png",
          },
          {
            id: 6,
            city: "Hong Kong",
            country: "Hong Kong",
            continentId: 2,
            image: "https://cdn.pixabay.com/photo/2020/12/17/00/43/skyscrapers-5838029__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/15/hong-kong-162316__480.png",
          },
          {
            id: 7,
            city: "Tokyo",
            country: "Japão",
            continentId: 2,
            image: "https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/22/59/japan-26803__340.png",
          },
          {
            id: 8,
            city: "Déli",
            country: "Índia",
            continentId: 2,
            image: "https://cdn.pixabay.com/photo/2019/07/17/17/30/boat-4344483__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/23/03/india-26828__340.png",
          },
          {
            id: 9,
            city: "Buenos Aires",
            country: "Argentina",
            continentId: 3,
            image: "https://cdn.pixabay.com/photo/2014/10/30/00/15/buenos-aires-508790__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/14/argentina-162229__480.png",
          },
          {
            id: 10,
            city: "Rio de Janeiro",
            country: "Brasil",
            continentId: 3,
            image: "https://cdn.pixabay.com/photo/2019/10/21/15/05/rio-de-janeiro-4566312__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2020/02/24/01/45/brazil-4875000__340.png",
          },
          {
            id: 11,
            city: "Santiago",
            country: "Chile",
            continentId: 3,
            image: "https://cdn.pixabay.com/photo/2020/01/07/18/10/santiago-4748280__340.jpg",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/14/chile-162264__340.png",
          },
          {
            id: 12,
            city: "Nova York",
            country: "EUA",
            continentId: 4,
            image: "https://images.unsplash.com/photo-1553605607-21e496a1c865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV3JTIweW9ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/16/22/united-26177__340.png",
          },
          {
            id: 13,
            city: "Miami",
            country: "EUA",
            continentId: 4,
            image: "https://media.istockphoto.com/photos/miami-florida-usa-downtown-skyline-over-macaurther-causeway-picture-id1346227684?b=1&k=20&m=1346227684&s=170667a&w=0&h=I2jm65rfULyoUKtGTYpx-Z34cyNCD6L7959dut32DA8=",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/16/22/united-26177__340.png",
          },
          {
            id: 14,
            city: "Toronto",
            country: "Canadá",
            continentId: 4,
            image: "https://media.istockphoto.com/photos/toronto-ontario-canada-aerial-view-of-toronto-cityscape-showing-in-picture-id1296846817?b=1&k=20&m=1296846817&s=170667a&w=0&h=J-t4xBn4Ypd6S5PYsv37njG9JRxeSRcWVwwE2KmvWys=",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/23/27/canada-27003__480.png",
          },
          {
            id: 15,
            city: "Cancun",
            country: "México",
            continentId: 4,
            image: "https://media.istockphoto.com/photos/cancun-beach-with-boat-picture-id956105474?b=1&k=20&m=956105474&s=170667a&w=0&h=M5a0Ns9bX64W0Zg9CyO9SK8qjF9vb9QOV2uL7C9hZRk=",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/23/24/mexico-26989__480.png",
          },
          {
            id: 16,
            city: "Johannesburg",
            country: "África do Sul",
            continentId: 5,
            image: "https://media.istockphoto.com/photos/johannesburg-sunset-cityscape-with-hillbrow-tower-picture-id900786810?b=1&k=20&m=900786810&s=170667a&w=0&h=zAzAnGnvLPyjmk9TgMIPjR6lTlaV8ZES4Dpt3CsZZMc=",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/17/south-africa-162425__340.png",
          },
          {
            id: 17,
            city: "Cairo",
            country: "Egito",
            continentId: 5,
            image: "https://images.unsplash.com/photo-1626622036405-66f0d91bf4b0?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fpcm98ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/23/13/egypt-26909__480.png",
          },
          {
            id: 18,
            city: "Dubai",
            country: "Emirados Árabes",
            continentId: 5,
            image: "https://images.unsplash.com/photo-1583499882110-688e720b025e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZHViYWl8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            flag: "https://cdn.pixabay.com/photo/2012/04/10/23/01/united-arab-emirates-26815_960_720.png",
          },
          {
            id: 19,
            city: "Sydney",
            country: "Austrália",
            continentId: 6,
            image: "https://images.unsplash.com/photo-1521512477127-5b3c1de1202d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
            flag: "https://cdn.pixabay.com/photo/2012/04/11/15/43/australia-28586_960_720.png"
          },
          {
            id: 20,
            city: "Auckland",
            country: "Nova Zelãndia",
            continentId: 6,
            image: "https://images.unsplash.com/photo-1595125990323-885cec5217ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            flag: "https://cdn.pixabay.com/photo/2013/07/13/14/16/new-zealand-162373_960_720.png"
          }
        ]
      })
    },
    routes() {
      this.namespace = 'api';

      this.get('/continents', () => {
        return this.schema.all('continent')
      });

      this.get('/continents/:slug', (schema, request) => {
        const slug = request.params.slug;

        console.log("SLUG:", slug)

        return schema.db.continents.findBy({ slug: slug});
      })

      this.get('/cities/:continentId', (schema, request) => {
        const continentId = request.params.continentId;

        console.log("ContinentID:", continentId)

        return schema.db.cities.where({continentId: continentId})
      })

      this.namespace = '';

      this.passthrough()
    }
  })

  return server
}