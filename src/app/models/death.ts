export interface Death {
    death_id: number;
    death: string;
    cause: string;
    responsible: string;
    last_words: string;
    season: number;
    episode: number;
    number_of_deaths: number;
}

export interface DeathCount {
    name: string;
    deathCount: number;
}