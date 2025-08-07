import CardSobre from "../../components/sobre/cardsobre/CardSobre";
import { devs } from "../../data/devs";

function Sobre() {
  const equipe = devs;

  return (
    <>
      <h1 className="text-center text-white text-5xl p-4">Sobre nós</h1>
      <div className="mt-auto flex justify-center w-full bg-black my-4 ">
        <div className="container w-[80vw] flex flex-col mt-4">
          <div className="flex flex-wrap flex-row justify-center gap-4 ">
            {equipe.map((sobre) => (
              <CardSobre key={sobre.id} devs={sobre} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;


