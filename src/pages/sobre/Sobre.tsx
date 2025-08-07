import CardSobre from "../../components/sobre/cardsobre/CardSobre";
import { devs } from "../../data/devs";

function Sobre() {
  const equipe = devs;

  return (
    <>
      <h1 className="text-center text-white text-5xl p-4">Sobre nós</h1>

      <div className="container w-[80vw] mx-auto text-center">
        <div className="text-white">
          <h2 className="text-2xl">Missão</h2>
          <p>Desenvolver soluções tecnológicas que tornem a rotina de personal trainers e academias mais prática, organizada e eficiente, facilitando o acompanhamento e o crescimento profissional no universo fitness.</p>

          <h2>Visão</h2>
          <p>Ser reconhecida como uma plataforma referência no apoio digital para profissionais de educação física, unindo tecnologia acessível, personalização e melhoria contínua da experiência de atendimento ao aluno.</p>

          <h2>Valores</h2>
          <p>Colaboração e aprendizado: Nascemos como um projeto de desenvolvimento web, e seguimos evoluindo com base no aprendizado constante.
            Inovação com propósito: Criamos para resolver problemas reais do dia a dia fitness.
            Praticidade e eficiência: Priorizamos soluções simples, rápidas e eficazes.
            Valorização do profissional fitness: Nosso foco é apoiar quem promove saúde, bem-estar e transformação de vidas.
          </p>
        </div>

        <div className="mt-auto flex justify-center w-full bg-black my-4 ">
          <div className="container w-[80vw] flex flex-col mt-4">
            <div className="flex flex-wrap flex-row justify-center gap-4 ">
              {equipe.map((sobre) => (
                <CardSobre key={sobre.id} devs={sobre} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;


