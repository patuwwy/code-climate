export type place = {
    lat: number;
    lng: number;
    type: "smog" | "flood";
    confirmed: boolean;
};

export const places: place[] = [
    {
        lat: 50.0421369,
        lng: 22.0028409,
        type: "smog",
        confirmed: true,
    },
    {
        lat: 50.0424369,
        lng: 22.0048409,
        type: "smog",
        confirmed: false,
    },
    {
        lat: 50.0522369,
        lng: 22.0138409,
        type: "flood",
        confirmed: true,
    },
    {
        lat: 50.0552369,
        lng: 22.0168409,
        type: "flood",
        confirmed: false,
    },
];
