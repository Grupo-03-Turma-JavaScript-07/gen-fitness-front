import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TwitterLogoIcon,
  GithubLogoIcon
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

function Footer() {
  const data = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-black to-blue-500 text-white py-6">

      <div className="flex justify-center gap-4 text-3xl mb-4">
        <a href="https://www.linkedin.com/school/generationbrasil"><LinkedinLogoIcon size={32} weight="fill" /></a>
        <a href="https://www.instagram.com/generationbrasil"><InstagramLogoIcon size={32} weight="fill" /></a>
        <a href="https://github.com/Grupo-03-Turma-JavaScript-07"><GithubLogoIcon size={32} weight="fill" /></a>
      </div>

      <nav className="flex justify-center gap-6 text-sm mb-3">
        <Link to="/home" className="hover:underline">Home</Link>
        <Link to="/sobre" className="hover:underline">Sobre</Link>
        <Link to="/planos" className="hover:underline">Planos</Link>
        <Link to="/contato" className="hover:underline">Contato</Link>
      </nav>

      <p className="text-center text-xs">
        &copy;{data} GenFitness | All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer