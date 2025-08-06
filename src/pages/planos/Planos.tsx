
function Planos() {
  return (
    <>
      <div className="bg-gradient-to-b from-sky-200 to-sky-600 py-10 min-h-screen">

        <div className="container mx-auto flex flex-col items-center text-center px-4">
          <h1 className="text-3xl font-bold text-black mb-2">Compare os planos da GenFitness</h1>
          <p className="text-black text-lg mb-8">Planos acessíveis para você treinar em nossas academias de alto padrão</p>

          {/*Card de produtos: plano smart, plano black...*/}
          <div className="bg-black text-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-2xl font-extrabold text-sky-400 mb-2 border-b border-sky-400 pb-2">Plano Fit</h2>
            <p className="mb-4 text-sm text-gray-300">Ideal para quem quer começar ou manter a rotina com economia.</p>

                <div className="text-3xl font-bold text-white mb-2">R$ 59,90 <span className="text-sm font-normal">/mês </span> 
                </div>

                <button className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded transition">
                  Assinar agora
                </button>
          </div>
   
            <p className="text-black text-sm mt-6 max-w-md">
            Os preços, taxas e condições promocionais podem variar de acordo com a unidade.
            </p>

            <div className="mt-8 text-black">
              <h2 className="text-xl font-semibold">Conheça nossos produtos e serviços adicionais para você!</h2>
            </div>
        </div>

      </div>
    </>
  )
}

export default Planos