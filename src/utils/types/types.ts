// Типизация для объекта "origin" и "location"
type OriginLocation = {
    name: string;
    url: string;
}

// Типизация для эпизодов (массив строк)
// type Episode = string;

// Типизация для одного персонажа
export type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocation;
    location: OriginLocation;
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}

// Типизация для объекта "info"
type Info = {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

// Типизация для всего ответа


export type Locations = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[]; // Массив URL-адресов
    url: string;
    created: string; // Дата в формате ISO 8601
}

export type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]; // массив ссылок на персонажей
    url: string;
    created: string;
};

// Типизация для всего ответа

export type CharactersResponse = {
    info: Info;
    results: Character[];
}

export type LocationsResponse = {
    info: Info;
    results: Locations[];
}

export type EpisodesResponse = {
    info: Info;
    results: Episode[];
}