import { Pokemon } from "./Pokemon.model";

export interface PokemonRepository {
    get: () => Promise<Pokemon[]>
}