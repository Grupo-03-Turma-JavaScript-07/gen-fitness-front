import CardSobre from "../../components/sobre/cardsobre/CardSobre";
import { devs } from "../../data/devs";

function Sobre() {
  const equipe = devs;

  return (
    <>
    <section className="w-full min-h-screen gap-4 text-2xl text-white bg-[url('https://ik.imagekit.io/illaoi/gen%20sobre%20m.png?updatedAt=1754585149142')] bg-cover bg-center">
      <h1 className="text-center font-bold text-white text-7xl drop-shadow-[0_0_8px_rgba(0,0,0,1)] p-4">Sobre nós</h1>
       <div className="grid grid-cols-3 justify-items-end gap-4 m-12">
        <div className=" col-span-2"></div>
        <div className="font-bold text-5xl drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Missão</div>
         <div className=" col-span-2"></div>
        <div className=" text-center">Desenvolver soluções tecnológicas que tornem a rotina de personal trainers e academias mais prática, organizada e eficiente, facilitando o acompanhamento e o crescimento profissional no universo fitness.</div>
        </div>

        <div className="grid grid-cols-3 justify-items-start gap-4 mx-12">
        <div className=""></div>
        <div className=""></div>
        <div className="font-bold text-5xl drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Visão</div>
        <div className=" col-span-2"></div>
        <div className=" text-center">Ser reconhecida como uma plataforma referência no apoio digital para profissionais de educação física, unindo tecnologia acessível, personalização e melhoria contínua da experiência de atendimento ao aluno.</div>
        </div>

        <div className="grid grid-cols-3 justify-items-end gap-4 m-12">
        <div className=" col-span-2"></div>
        <div className="font-bold text-5xl drop-shadow-[0_0_8px_rgba(0,0,0,1)]">Valores</div>
         <div className=" col-span-2"></div>
        <div className=" text-center">
            <ul className="list-inside space-y-4">
                <li>
        <span className="text-blue-400 font-bold">Colaboração e aprendizado:</span> Nascemos como um projeto e seguimos evoluindo com base no aprendizado constante.
    </li>
    <li>
        <span className="text-blue-300 font-bold">Inovação com propósito:</span> Criamos para resolver problemas reais do dia a dia <span className="text-blue-400">fitness</span>.
    </li>
    <li>
        <span className="text-blue-400 font-bold">Praticidade e eficiência:</span> Priorizamos soluções simples, rápidas e eficazes.
    </li>
    <li>
        <span className="text-blue-300 font-bold">Valorização do profissional fitness:</span> Nosso foco é apoiar quem promove saúde, bem-estar e transformação de vidas.
    </li>
            </ul>
        </div>
        </div>

      </section>

      <div className="mt-auto flex justify-center w-full bg-black my-4 ">
        <div className="container w-[80vw] flex flex-col m-25">
          <div className="flex flex-wrap flex-row justify-center gap-12 ">
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


