import CardSobre from "../../components/sobre/cardsobre/CardSobre";
import { devs } from "../../data/devs";


function Sobre() {

  const equipe = devs

 return (
        <>
            <div className="mt-auto flex justify-center w-full bg-black my-4 ">
                <div className="container flex flex-col mt-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                       {equipe.map((sobre) => (
                            <CardSobre key={sobre.id} devs={sobre} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sobre;

