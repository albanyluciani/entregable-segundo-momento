import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-[#d8d6d1] px-[max(5%,calc((100%-1160px)/2))] py-[clamp(1.35rem,2.2vw,1.9rem)]">
      <Link to="/" className="text-[clamp(1.45rem,1.8vw,1.85rem)] font-semibold leading-none tracking-[0.08em] uppercase text-[#243026]">
        Zenith Bonsai
      </Link>
      <div className="hidden items-center gap-11 text-[clamp(0.94rem,1.05vw,1.18rem)] text-[#223126] md:flex">
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