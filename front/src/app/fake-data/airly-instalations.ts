export type Installation = {
    id: number;
    location: {
        latitude: number;
        longitude: number;
    };
    locationId: number;
    address: {
        country: string;
        city: string;
        street: string | null;
        number: string | null;
        displayAddress1: string | null;
        displayAddress2: string | null;
    };
    elevation: number;
    airly: boolean;
    sponsor: {
        id: number;
        name: string;
        description: string;
        logo: string;
        link: string | null;
        displayName: string;
    };
};

export const installations: Installation[] = [
    {
        id: 7491,
        location: {
            latitude: 50.040675,
            longitude: 22.004656,
        },
        locationId: 7491,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Aleja Józefa Piłsudskiego",
            number: null,
            displayAddress1: "Rzeszów",
            displayAddress2: "Aleja Józefa Piłsudskiego",
        },
        elevation: 201.61,
        airly: false,
        sponsor: {
            id: 11,
            name: "GIOŚ",
            description: "Żródło",
            logo: "https://cdn.airly.eu/logo/GIOs.jpg",
            link: "http://www.gios.gov.pl",
            displayName: "GIOŚ",
        },
    },
    {
        id: 11611,
        location: {
            latitude: 50.031511,
            longitude: 22.012758,
        },
        locationId: 11611,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Cegielniana",
            number: null,
            displayAddress1: "Rzeszów",
            displayAddress2: "Cegielniana",
        },
        elevation: 197.21,
        airly: true,
        sponsor: {
            id: 605,
            name: "BorgWarner",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/BorgWarner_1573726360822_1948731385.jpeg",
            link: null,
            displayName: "BorgWarner",
        },
    },
    {
        id: 11996,
        location: {
            latitude: 50.048855,
            longitude: 21.981461,
        },
        locationId: 11996,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Majora Henryka Sucharskiego",
            number: "2",
            displayAddress1: "ul. Sucharskiego, Rzeszów",
            displayAddress2: "WSIiZ Rzeszów",
        },
        elevation: 223.96,
        airly: true,
        sponsor: {
            id: 605,
            name: "BorgWarner",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/BorgWarner_1573726360822_1948731385.jpeg",
            link: null,
            displayName: "BorgWarner",
        },
    },
    {
        id: 75,
        location: {
            latitude: 50.024242,
            longitude: 22.010575,
        },
        locationId: 75,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Aleja Tadeusza Rejtana",
            number: "30",
            displayAddress1: "Rzeszów",
            displayAddress2: "Aleja Tadeusza Rejtana",
        },
        elevation: 201.14,
        airly: false,
        sponsor: {
            id: 11,
            name: "GIOŚ",
            description: "Żródło",
            logo: "https://cdn.airly.eu/logo/GIOs.jpg",
            link: "http://www.gios.gov.pl",
            displayName: "GIOŚ",
        },
    },
    {
        id: 11342,
        location: {
            latitude: 50.026522,
            longitude: 21.985252,
        },
        locationId: 11342,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Franciszka Żwirki i Stanisława Wigury",
            number: null,
            displayAddress1: "Rzeszów",
            displayAddress2: "Franciszka Żwirki i Stanisława Wigury",
        },
        elevation: 211.46,
        airly: true,
        sponsor: {
            id: 605,
            name: "BorgWarner",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/BorgWarner_1573726360822_1948731385.jpeg",
            link: null,
            displayName: "BorgWarner",
        },
    },
    {
        id: 32933,
        location: {
            latitude: 50.021711,
            longitude: 21.988161,
        },
        locationId: 32864,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Dominikańska",
            number: null,
            displayAddress1: "Rzeszów",
            displayAddress2: "SP 10 Dominikańska",
        },
        elevation: 212.75,
        airly: true,
        sponsor: {
            id: 646,
            name: "Tefal",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/Tefal_1576751649982_2080034825.jpg",
            link: "https://www.tefal.pl/sklepy-stacjonarne",
            displayName: "Tefal",
        },
    },
    {
        id: 10568,
        location: {
            latitude: 50.018708,
            longitude: 21.982851,
        },
        locationId: 10568,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Poznańska",
            number: "2b",
            displayAddress1: "Rzeszów",
            displayAddress2: "Poznańska",
        },
        elevation: 210.94,
        airly: true,
        sponsor: {
            id: 605,
            name: "BorgWarner",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/BorgWarner_1573726360822_1948731385.jpeg",
            link: null,
            displayName: "BorgWarner",
        },
    },
    {
        id: 11383,
        location: {
            latitude: 50.014461,
            longitude: 22.006316,
        },
        locationId: 11383,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Nowowiejska",
            number: "39",
            displayAddress1: "Rzeszów",
            displayAddress2: "Nowowiejska",
        },
        elevation: 201.66,
        airly: true,
        sponsor: {
            id: 22,
            name: "Aviva",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/Aviva_1538146740542_399306786.jpg",
            link: "https://wiemczymoddycham.pl/",
            displayName: "Aviva",
        },
    },
    {
        id: 86635,
        location: {
            latitude: 50.032151,
            longitude: 22.06621,
        },
        locationId: 2157,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Jana Olbrachta",
            number: "182",
            displayAddress1: "Rzeszów",
            displayAddress2: "Jana Olbrachta",
        },
        elevation: 212.46,
        airly: true,
        sponsor: {
            id: 9,
            name: "RzeszówOddycha",
            description: "Sensor Airly w ramach akcji",
            logo: "https://cdn.airly.eu/logo/RzeszowOddycha.jpg",
            link: "https://www.facebook.com/airlyeu/",
            displayName: "RzeszówOddycha",
        },
    },
    {
        id: 40133,
        location: {
            latitude: 49.976674,
            longitude: 22.032008,
        },
        locationId: 39676,
        address: {
            country: "Poland",
            city: "Rzeszów",
            street: "Stroma",
            number: "12",
            displayAddress1: "Rzeszów",
            displayAddress2: "Stroma",
        },
        elevation: 248.22,
        airly: true,
        sponsor: {
            id: 719,
            name: "Anonimowy SmogFighter",
            description: "",
            logo: "https://cdn.airly.eu/logo/AnonymousSmogfighter_1609285731335_397067556.png",
            link: null,
            displayName: "Anonimowy SmogFighter",
        },
    },
    {
        id: 11965,
        location: {
            latitude: 50.116077,
            longitude: 22.033303,
        },
        locationId: 11965,
        address: {
            country: "Poland",
            city: "Jasionka",
            street: null,
            number: "950",
            displayAddress1: "Jasionka",
            displayAddress2: null,
        },
        elevation: 207.54,
        airly: true,
        sponsor: {
            id: 605,
            name: "BorgWarner",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/BorgWarner_1573726360822_1948731385.jpeg",
            link: null,
            displayName: "BorgWarner",
        },
    },
    {
        id: 41297,
        location: {
            latitude: 50.071394,
            longitude: 21.842508,
        },
        locationId: 3394,
        address: {
            country: "Poland",
            city: "Trzciana",
            street: "94",
            number: null,
            displayAddress1: "Trzciana",
            displayAddress2: "Szkoła Podstawowa w Trzcianie",
        },
        elevation: 237.27,
        airly: true,
        sponsor: {
            id: 933,
            name: "Gmina Świlcza",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/Gminawilcza_1619078176970_1910801968.png",
            link: "https://www.swilcza.com.pl/index.php/pl/",
            displayName: "Gmina Świlcza",
        },
    },
    {
        id: 11900,
        location: {
            latitude: 50.151855,
            longitude: 21.963465,
        },
        locationId: 11900,
        address: {
            country: "Poland",
            city: "Głogów Małopolski",
            street: "Rynek",
            number: "24",
            displayAddress1: "36-060 Głogów Małopolski ul. Rynek",
            displayAddress2: "Rynek",
        },
        elevation: 235.29,
        airly: true,
        sponsor: {
            id: 668,
            name: "Głogów Małopolski",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/GogwMaopolski_1580231796637_1396624961.jpg",
            link: null,
            displayName: "Głogów Małopolski",
        },
    },
    {
        id: 11901,
        location: {
            latitude: 50.158476,
            longitude: 21.965281,
        },
        locationId: 11901,
        address: {
            country: "Poland",
            city: "Głogów Małopolski",
            street: "Jaśminowa",
            number: "9",
            displayAddress1: "36-060 Głogów Małopolski ul. Jaśminowa",
            displayAddress2: "Jaśminowa",
        },
        elevation: 244.95,
        airly: true,
        sponsor: {
            id: 668,
            name: "Głogów Małopolski",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/GogwMaopolski_1580231796637_1396624961.jpg",
            link: null,
            displayName: "Głogów Małopolski",
        },
    },
    {
        id: 86520,
        location: {
            latitude: 49.925533,
            longitude: 21.938176,
        },
        locationId: 44482,
        address: {
            country: "Poland",
            city: "Lubenia",
            street: null,
            number: null,
            displayAddress1: "Lubenia",
            displayAddress2: null,
        },
        elevation: 226.55,
        airly: true,
        sponsor: {
            id: 1036,
            name: "Gmina Lubenia",
            description: "Sponsor sensora Airly",
            logo: "https://cdn.airly.eu/logo/GminaLubenia_1631708415695_1913501809.png",
            link: "http://www.lubenia.pl/",
            displayName: "Gmina Lubenia",
        },
    },
];
