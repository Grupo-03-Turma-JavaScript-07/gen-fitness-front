import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="w-full flex justify-center py-6 bg-gradient-to-b from-black to-blue-500 text-white">
        
        <div className="container flex justify-between text-lg">
        <Link to="/" className="text-2xl front-bold">Gen Fitness</Link>

        <div className="flex gap-4">
        <Link to="/home" className="houver: underline">Home</Link>
        <Link to="/sobre" className="houver: underline">Sobre</Link>
        <Link to="/planos" className="houver: underline">Planos</Link>
        <Link to="/contato" className="houver: underline">Contato</Link>
        </div>

        </div>
        
      </div>
    </>
  );
}

export default Navbar;
