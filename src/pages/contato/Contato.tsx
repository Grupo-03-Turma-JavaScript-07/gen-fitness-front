import { BuildingOfficeIcon, ChatsCircleIcon } from "@phosphor-icons/react"

function msg() {
  alert("Agradecemos a sua mensagem!")
}

function Contato() {
  return (
    <>
      <main className=" bg-black">

        <section className="flex items-center justify-center gap-10 mx-auto bg-conic-120 from-blue-700 via-blue-400 to-black p-10 ">
          <div className="w-full">
            <form className="flex flex-col p-5 w-1/2  rounded-2xl shadow-lg bg-white/5 w-full " onSubmit={msg}>
              <h2 className="text-2xl text-white font-bold text-shadow-sm text-center">
                SAIBA MAIS</h2>
              <h3 className="font-medium text-white/90 text-center shadow-inner bg-black/5 p-2 my-1 mx-auto w-70% ">Conheça versões exclusivas!
              </h3>

              <div className="grid md:grid-cols-2 m-1 gap-4 py-4">

                <div className="flex flex-col-2 gap-2">
                  <label htmlFor="nome" className="text-white font-bold text-shadow-sm">Nome:</label>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    name="nome"
                    required
                    className="border-1 border-white rounded-3xl placeholder:text-[#ffffff80] p-1" />
                </div>

                <div className="flex flex-col-2 gap-2">
                  <label htmlFor="telefone" className="text-white font-bold text-shadow-sm">Telefone:</label>
                  <input
                    type="text"
                    placeholder="Digite seu telefone"
                    name="telefone"
                    className="border-1 border-white rounded-3xl placeholder:text-[#ffffff80] p-1" />
                </div>

              </div>

              <div className="flex flex-col gap-4">

                <div className="flex flex-col-2 gap-2">
                  <label htmlFor="email" className="text-white font-bold text-shadow-sm">E-mail:</label>
                  <input
                    type="text"
                    placeholder="Digite seu e-mail"
                    name="email"
                    required
                    className="border-1 border-white rounded-3xl placeholder:text-[#ffffff80] w-md p-1" />
                </div>

                <div className="flex flex-col-2 gap-2">
                  <label htmlFor="assunto" className="text-white font-bold text-shadow-sm">Assunto:</label>
                  <input
                    type="text"
                    placeholder="Sobre o que deseja falar?"
                    name="assunto"
                    required
                    className="border-1 border-white rounded-3xl placeholder:text-[#ffffff80] w-md p-1" />
                </div>

                <div className="flex flex-col-2 gap-2">
                  <label htmlFor="mensagem" className="text-white font-bold text-shadow-sm">Mensagem:</label>
                  <textarea
                    placeholder="Digite a sua mensagem"
                    name="mensagem"
                    required
                    className="border-1 border-white rounded-2xl placeholder:text-[#ffffff80] w-lg p-1" />
                </div>

                <button
                  type='submit'
                  className='border-0 rounded-3xl disabled:bg-slate-200 bg-blue-400 hover:bg-blue-700
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
                >Enviar
                </button>
              </div>
            </form>

          </div>

          <div className="bg-white rounded-2xl shadow-lg shadow-white/25 p-6 w-1/3">
            <div className="flex gap-4 mb-2 border-b border-blue-500 pb-2">
              <ChatsCircleIcon size={32} color="#2b7fff" weight="fill" />
              <h2 className="text-2xl font-extrabold text-blue-500 ">CONTATOS</h2>
            </div>
            <h3 className="font-bold pt-1">TELEFONE:
            </h3>
            <p mb-4 text-sm text-black>+55 011 xxxx-xxxx</p>
            <hr className="w-1/4 h-0.5 mx-auto mt-3 mb-2 bg-black/30 border-0" />
            <h3 className="font-bold">E-MAIL:
            </h3>
            <p mb-4 text-sm text-black>grupogeneration03@gmail.com</p>
          </div>




        </section>

        <section className="flex items-center justify-center gap-10 p-5">
          <div className="bg-white rounded-2xl shadow-lg shadow-white/25 p-6">
            <div className="flex gap-4 mb-2 border-b border-blue-500 pb-2">
              <BuildingOfficeIcon size={32} color="#2b7fff" weight="fill" />
              <h2 className="text-2xl font-extrabold text-blue-500 ">ONDE ESTAMOS</h2>
            </div>
            <h3 className="font-bold pt-1">ENDEREÇO:
            </h3>
            <p mb-4 text-sm text-black>Rua Teodoro Sampaio, 1629
              São Paulo/SP</p>
            <p mb-4 text-sm text-black>
              Pinheiros — São Paulo/SP</p>
            <hr className="w-1/4 h-0.5 mx-auto mt-3 mb-2 bg-black/30 border-0" />
            <h3 className="font-bold">FUNCIONAMENTO:
            </h3>
            <p mb-4 text-sm text-black>Seg a Sex: 08h às 17h</p>
            <p>Online: 24h</p>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-lg shadow-white/25">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1791706451368!2d-46.6847684!3d-23.56200769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579c21e26427%3A0x9aa89a73daf0d500!2sR.%20Teodoro%20Sampaio%2C%201629%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005415-030!5e0!3m2!1spt-BR!2sbr!4v1754530666421!5m2!1spt-BR!2sbr" width="370" height="270" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
          </div>

        </section>

      </main>
    </>
  )
}

export default Contato