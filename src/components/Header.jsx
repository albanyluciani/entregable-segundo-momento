import { Link } from "react-router-dom"

const Header = () => {
  return (
    <main className="flex flex-1 flex-col justify-start px-[max(5%,calc((100%-1160px)/2))] pt-[clamp(4.2rem,8vw,6.6rem)] pb-24">
      <h1 className="max-w-[560px] text-[clamp(2.7rem,5.2vw,4.2rem)] font-light leading-[1.08] tracking-[-0.016em] text-[#2d3a2f]">
        El arte de la <br />
        <span className="font-normal">paciencia</span>
      </h1>
      <p className="mt-9 max-w-[700px] text-[clamp(1rem,1.2vw,1.28rem)] leading-[1.58] text-[#2d3a2f]">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        <br className="hidden sm:block" />
        Un espacio para reconectar con la naturaleza.
      </p>
      <div className="mt-12">
        <Link
          to="/booking"
          className="inline-block rounded-[6px] bg-[#273628] px-8 py-4 text-[clamp(0.95rem,1.02vw,1.08rem)] font-medium leading-none text-[#f5f3ef] transition-colors hover:bg-[#334736]"
        >
          Reserva un taller
        </Link>
      </div>
    </main>
  );
};

export default Header
