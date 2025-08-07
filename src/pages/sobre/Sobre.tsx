import CardSobre from "../../components/sobre/cardsobre/CardSobre";
import { devs } from "../../data/devs";

function Sobre() {
  const equipe = devs;

  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center bg-[url('https://ik.imagekit.io/gengrupo03/gen-fitness/gen_sobre_m.png')] bg-fixed bg-cover bg-center">
      
        <div className="bg-black bg-opacity-60 w-full md:w-[80vw] p-8 md:p-12 text-white rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold mb-2">Missão</h2>
            <p className="text-lg">
              Desenvolver soluções tecnológicas que tornem a rotina de personal trainers e academias mais prática, organizada e eficiente, facilitando o acompanhamento e o crescimento profissional no universo fitness.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold mb-2">Visão</h2>
            <p className="text-lg">
              Ser reconhecida como uma plataforma referência no apoio digital para profissionais de educação física, unindo tecnologia acessível, personalização e melhoria contínua da experiência de atendimento ao aluno.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-2">Valores</h2>
            <p className="text-lg">
              <strong>Colaboração e aprendizado:</strong> Nascemos como um projeto de desenvolvimento web, e seguimos evoluindo com base no aprendizado constante. <br />
              <strong>Inovação com propósito:</strong> Criamos para resolver problemas reais do dia a dia fitness. <br />
              <strong>Praticidade e eficiência:</strong> Priorizamos soluções simples, rápidas e eficazes. <br />
              <strong>Valorização do profissional fitness:</strong> Nosso foco é apoiar quem promove saúde, bem-estar e transformação de vidas.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-auto flex justify-center w-full my-4">
        <div className="container w-[80vw] flex flex-col mt-4">
          <div className="flex flex-wrap flex-row justify-center gap-4">

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



