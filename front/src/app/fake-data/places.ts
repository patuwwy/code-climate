export type place = {
    lat: number;
    lng: number;
    type: "air" | "water";
    confirmed: boolean;
    description?: string;
};

export const places: place[] = [
    {
        lat: 50.0421369,
        lng: 22.0028409,
        type: "air",
        confirmed: true,
        description: "W okolicy czuć palony plastik",
    },
    {
        lat: 50.0424369,
        lng: 22.0048409,
        type: "air",
        confirmed: false,
        description: "Dym w okolicy",
    },
    {
        lat: 50.0522369,
        lng: 22.0138409,
        type: "water",
        confirmed: true,
        description: "Woda na ulicy",
    },
    {
        lat: 50.0552369,
        lng: 22.0168409,
        type: "water",
        confirmed: false,
        description: "Potrzebujemy pompy",
    },
];
