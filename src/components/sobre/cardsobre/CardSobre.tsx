import { Link } from "react-router-dom";
import type Devs from "../../../models/Devs";

interface SobreProps {
  devs: Devs;
}

function CardSobre({ devs }: SobreProps) {
  return (
    <>
      <div className="border-3 border-black flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-gray-600">
          <img src={devs.pic} className="rounded-full" />
        </header>

        <p className="p-8 text-3xl bg-gray-200 h-full">{devs.nome}</p>
        <p className="p-8 text-3xl bg-gray-200 h-full">{devs.cargo}</p>

        <div className="flex">
          <Link
            to={devs.linkedin}
            className="w-full font-medium text-black bg-blue-400 hover:bg-blue-700 
                        flex items-center justify-center py-2"
          >
            <button>Linkedin</button>
          </Link>

          <Link
            to={devs.github}
            className="font-medium text-black bg-blue-400 hover:bg-blue-700 w-full 
                    flex items-center justify-center"
          >
            <button>GitHub</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardSobre;
