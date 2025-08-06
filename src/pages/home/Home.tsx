
function Home() {
    return (
        <>
            <section className="w-full min-h-screen flex flex-col justify-center items-center text-white bg-[url('https://ik.imagekit.io/illaoi/bg%20melhorado.png?updatedAt=1754494173823')] bg-cover bg-center">
              <h1 className="text-4xl md:text-5xl font-bold drop-shadow-[0_0_8px_rgba(0,0,0,1)] py-2">Aumente seus resultados com o Gen Fitness!</h1>
                <p className="text-lg text-white drop-shadow-[0_0_8px_rgba(0,0,0,1)] py-2">
                  Uma plataforma para personal trainers, academias e profissionais fitness que querem escalar seus atendimentos com mais controle e praticidade.
                </p>
              <button className="bg-blue-500 text-white px-6 py-3 mt-2 rounded-2xl text-lg hover:bg-blue-700 cursor-pointer transition">
                Comece a usar gratuitamente!
              </button>
            </section>
      
          <div className="bg-black w-full flex flex-col gap-16 p-8 md:p-16">
            <section className="grid md:grid-cols-2 gap-8 ">
              {[
                {
                  title: 'Organize seus clientes com praticidade',
                  desc: 'Registre informações importantes, categorize e busque por atributos.'
                },
                {
                  title: 'Monitore a condição dos clientes',
                  desc: 'Acompanhe o histórico de saúde de seus alunos.'
                },
                {
                  title: 'Fortaleça a relação com seus clientes, mantendo sempre contato',
                  desc: 'Registro de contatos para Feedbacks, lembretes e comunicação mais próxima.'
                },
                {
                  title: 'Acesse de qualquer lugar',
                  desc: 'Controle total pelo celular, tablet ou computador.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-sky-300 p-6 rounded-2xl shadow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-950">{item.desc}</p>
                </div>
              ))}
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl text-white font-bold text-center">Para quem é o Gen Fitness?</h2>
              <ul className="pl-8 text-center text-sky-300 space-y-2">
                <li>- Personal Trainers Independentes que querem escalar sem perder qualidade;</li>
                <li>- Academias que buscam um sistema leve e flexível;</li>
                <li>- Estúdios e Boxes com foco em fidelização de alunos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl text-white font-bold text-center mb-6">Em breve mais funcionalidades para sua rotina!</h2>
              <div className="overflow-x-auto">
                <div className="border border-white rounded-2xl overflow-hidden w-fit mx-auto">
                  <table className="w-full max-w-[700px] mx-auto text-left">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th colSpan={2} className="text-2xl text-center px-4 py-2">Vem aí...</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Criação de Treinos personalizados:', 'Rápida, intuitiva e personalizável'],
                      ['Histórico de Evolução:', 'Visualize gráficos de progresso'],
                      ['Controle Financeiro:', 'Receba, visualize e controle os pagamentos']
                    ].map(([nome, descricao], idx) => (
                      <tr key={idx} className="border-t">
                        <td className="px-4 py-2 font-medium text-blue-500">{nome}</td>
                        <td className="px-4 py-2 text-white">{descricao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              </div>
            </section>


            <section className="text-center bg-sky-300 p-6 rounded-2xl">
              <h2 className="text-2xl font-bold mb-2">Quer transformar seu atendimento?</h2>
              <p className="mb-1">Experimente gratuitamente o Gen Fitness.</p>
              <p className="text-[10px]">*30 dias grátis</p>
              <button className="bg-blue-500 text-white px-6 py-3 mt-3 rounded-2xl text-lg hover:bg-blue-700 cursor-pointer transition">
                Quero experimentar grátis
              </button>
            </section>
          </div>
        </>
      )
    }

  export default Home