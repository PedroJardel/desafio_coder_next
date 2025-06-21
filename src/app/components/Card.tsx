import Image from "next/image";
import CardDescription from "@/app/components/CardDescription";

export interface CardProps {
    localId: string;
    name: string;
    image: string;
    rarity: string;
    type: string;
    set: {
        name: string;
        cardCount: string;
    };
}

const Card = ({localId, name, image, set}: CardProps) => {
    return (
        <a href={`/${set.name}/${localId}`}
           className="w-58 rounded-2xl bg-blur-xs hover:scale-102 hover:shadow-lg p-2 transition-all duration-300 flex flex-col text-wrap gap-2">
            <Image
                src={image}
                alt={name}
                width={0}
                height={0}
                className="
                        w-50 h-auto
                        object-cover rounded-xl
                        "
            />
            <CardDescription name={name} localId={localId} set={set}/>
        </a>
    )
}

export default Card;