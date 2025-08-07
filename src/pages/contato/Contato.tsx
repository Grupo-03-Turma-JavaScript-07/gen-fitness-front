import { AtIcon, BuildingOfficeIcon, PhoneIcon } from "@phosphor-icons/react"

function msg() {
  alert("Agradecemos a sua mensagem!")
}

function Contato() {
  return (
    <>
      <main className="container w-[75vw] mx-auto">
        {/* <h1 className="text-4xl font-bold text-center text-white">Contato</h1> */}
        <div className="container mx-auto rounded-2xl items-center p-4 my-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <h2 className="text-2xl font-semibold mb-4 text-center text-white">Deixe sua mensagem</h2>
            <form action="" className="flex flex-col text-md gap-4">
              <label htmlFor="" className="text-slate-600 hidden">Nome:</label>
              <input type="text" className="bg-slate-200 rounded-2xl p-3" placeholder="Nome:" />
              <label htmlFor="" className="text-slate-600 hidden">Telefone:</label>
              <input type="text" className="bg-slate-200 rounded-2xl p-3" placeholder="Telefone:" />
              <label htmlFor="" className="text-slate-600 hidden">E-mail:</label>
              <input type="email" className="bg-slate-200 rounded-2xl p-3" placeholder="Email:"/>
              <label htmlFor="" className="text-slate-600 hidden">Assunto:</label>
              <input type="email" className="bg-slate-200 rounded-2xl p-3" placeholder="Assunto:"/>
              <label htmlFor="" className="text-slate-600 hidden">Mensagem:</label>
              <textarea name="" id="" className="bg-slate-200 rounded-2xl p-3 h-[15vh]" placeholder="Mensagem..."></textarea>
              <button className="bg-blue-600 text-white text-xl rounded-xl p-2 cursor-pointer hover:bg-blue-500" onClick={msg}>Enviar</button>
            </form>
          </div>
          <div className="bg-white rounded-2xl p-4 ml-4">
            <div className="flex gap-4 mb-2 border-b border-blue-500 pb-2">
              <BuildingOfficeIcon size={32} color="#2b7fff" weight="fill" />
              <h2 className="text-2xl font-extrabold text-blue-500 ">ONDE ESTAMOS</h2>
            </div>
            <div className="rounded-2xl shadow-lg shadow-white/25 h-full">
              <h3 className="font-bold pt-1">ENDEREÇO:</h3>
              <p className="mb-4 text-sm text-black">Rua Teodoro Sampaio, 1629 São Paulo/SP Pinheiros — São Paulo/SP</p>
              <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1791706451368!2d-46.6847684!3d-23.56200769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579c21e26427%3A0x9aa89a73daf0d500!2sR.%20Teodoro%20Sampaio%2C%201629%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005415-030!5e0!3m2!1spt-BR!2sbr!4v1754530666421!5m2!1spt-BR!2sbr" 
                className="w-full h-[40vh] rounded-2xl" 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="text-white py-4 px-9" /> */}
        <section className="grid grid-cols-3 container mx-auto items-center justify-center gap-10 p-4">
          <div className="bg-white rounded-2xl w-full h-full shadow-lg shadow-white/25 p-6">
            <div className="flex gap-4 mb-2 border-b border-blue-500 pb-2 mx-auto">
              <PhoneIcon size={32} color="#2b7fff" weight="fill" />
              <h2 className="text-xl text-blue-500">(11) 1111-2222</h2>
            </div>
            <p className="mb-4 text-xl text-black text-center">Fale com nosso time de atendimento</p>
          </div>
          <div className="bg-[#A5DAF9] rounded-2xl w-full h-full shadow-lg shadow-white/25 p-6">
            <div className="flex gap-4 mb-2 border-b border-blue-500 pb-2">
              <AtIcon size={32} color="#000000" weight="fill" />
              <h2 className="text-xl text-black">grupogeneration03@gmail.com</h2>
            </div>
            <p className="mb-4 text-xl text-black text-center items-center">Mande seu email</p>
          </div>
          <div className="bg-blue-500 rounded-2xl shadow-lg shadow-white/25 p-6">
            <div className="flex gap-4 mb-2 border-b border-white pb-2">
              <BuildingOfficeIcon size={32} color="#ffffff" weight="fill" />
              <h2 className="text-xl text-white ">Seg a Sex: 08h às 17h</h2>
            </div>
            <p className="mb-4 text-xl text-white text-center">Online: 24h</p>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contato