import {CardProps} from "@/app/components/Card";
import dotenv from "dotenv";

dotenv.config();
const baseUrl = process.env.API_POKEMON_URI
console.log(baseUrl);

export const getCards = async (): Promise<CardProps[]> => {
    const response = await fetch(`${baseUrl}/api/set-test/sv09`);
    const data = await response.json();

    return data.map((cardData: CardProps) => {
        return cardData
    })
}