import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="bg-slate-600">
        Navbar
        <Link to='/planos'> Planos</Link>
      </div>
    </>
  )
}

export default Navbar