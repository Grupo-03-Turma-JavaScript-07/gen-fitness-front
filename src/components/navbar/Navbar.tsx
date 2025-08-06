import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center bg-black text-white">
        <div className="container flex justify-between text-lg">
          <Link to="/" className="text-3xl text-blue-600 front-bold">
            <img src="https://ik.imagekit.io/gengrupo03/gen-fitness/logo2.png" className="w-25" alt="Logo da GenFitness" />
          </Link>
          <div className="flex items-center">
            <Link to="/home" className="nav-button">Home</Link>
            <Link to="/sobre" className="nav-button">Sobre</Link>
            <Link to="/planos" className="nav-button">Planos</Link>
            <Link to="/contato" className="nav-button">Contato</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
