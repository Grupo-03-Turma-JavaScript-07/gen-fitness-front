
function msg(){
  alert("Agradecemos a sua mensagem!")
}

function Contato() {
  return (
    <>
      <div className=" bg-black flex  mx-auto justify-center">

        <div className="container flex flex-col items-center">

          <div className="bg-blue-500 m-10">

          <h2 className="text-4xl text-center my-8">
            Fale conosco</h2>

          <form className="flex flex-col bg-white w-1/2 gap-4" onSubmit={msg}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Título da Postagem</label>
                    <input
                        type="text"
                        placeholder="Titulo"
                        name="titulo"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Texto da Postagem</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        
                    />
                </div>
              
                <button
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >Enviar
                </button>
            </form>
            </div>

        </div>

        <div>
          <div>
            <p>Rua da Academia</p>
            <p>Gen Fitness - Planeta Terra </p>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.8268323665466!2d-38.7656888!3d-3.6269988000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0c932fff557af%3A0x6d5736cbee1c5296!2sR.%20Da%20Academia%20-%20Guararu%2C%20Caucaia%20-%20CE!5e0!3m2!1spt-BR!2sbr!4v1754501837329!5m2!1spt-BR!2sbr" width="400" height="300" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </>
  )
}

export default Contato