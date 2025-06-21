import Card, {CardProps} from "./components/Card";
import {getCards} from "./api/set/routes";
import Header from "@/app/components/Header";

export default async function Home() {
    const cards = await getCards();
    return (
        <div className="min-h-screen">
            <Header/>
            <main className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 items-baseline my-12">
                    {cards.map((cardData: CardProps) => (
                        <Card key={cardData.localId}
                              localId={cardData.localId}
                              name={cardData.name}
                              image={cardData.image}
                              rarity={cardData.rarity}
                              type={cardData.type}
                              set= {
                                  {
                                    name: cardData.set.name,
                                    cardCount: cardData.set.cardCount,
                                  }
                              }
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}