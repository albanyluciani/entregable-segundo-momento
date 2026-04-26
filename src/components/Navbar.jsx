import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-[#d8d6d1] px-[max(5%,calc((100%-1160px)/2))] py-[clamp(1.45rem,2.6vw,2.2rem)]">
      <Link to="/" className="text-[2.1rem] font-semibold leading-none tracking-[0.14em] uppercase text-[#243026]">
        Zenith Bonsai
      </Link>
      <div className="flex items-center gap-10 text-[1.12rem] text-[#223126]">
        <Link className="border-b border-transparent pb-1 transition-colors hover:border-[#223126]" to="/philosophy">
          Filosofía
        </Link>
        <Link className="border-b border-transparent pb-1 transition-colors hover:border-[#223126]" to="/gallery">
          Galería
        </Link>
        <Link className="border-b border-transparent pb-1 transition-colors hover:border-[#223126]" to="/booking">
          Reservas
        </Link>
      </div>
    </nav>
  )
}

export default Navbar