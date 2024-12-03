interface Movie {
    title: string,
    director: string;
    duration: number;
    description?: string;
    imageUrl?: string;
    budget?: number;
}

export type {Movie};