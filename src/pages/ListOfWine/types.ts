export type WineListItemType = {
    name: string;
    categories: string[];
    rating: number;
    description: string;
    country: string;
    image: string;
    id: number;
    docId: string;
}

export type UserData = {
    favourites: number[];
    saved: number[]
}
