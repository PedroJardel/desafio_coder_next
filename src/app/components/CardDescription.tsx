export interface CardDescriptionProps {
    name: string;
    localId: string;
    set: {
        name: string;
        cardCount: string;
    };
}

export enum SET {
    'Amigos de Jornada' = 'JTG'
}

export default function CardDescription({name, localId, set}: CardDescriptionProps) {
    return (
        <>
            <div className="flex flex-row justify-between align-center">
                <h3 className="font-bold text-left m-0">{name}</h3>
                <span className="text-sm text-gray-500 font-normal mt-2 m-0">{SET[set.name as keyof typeof SET] ?? 'Edição desconhecida'}</span>
            </div>
            <span className="text-sm text-gray-500 font-normal">(#{localId}/{set.cardCount})</span>
            <div className=" flex mt-2 text-left text-sm gap-1 justify-between">
                <span className="text-green-800 bg-green-300 rounded-full px-2 py-1 w-fit">R$ 100,00</span>
                <span className="text-red-800 bg-red-300 rounded-full px-2 py-1 w-fit">R$ 250,00</span>
            </div>
        </>
    )
}