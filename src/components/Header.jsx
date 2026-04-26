import { Link } from "react-router-dom"

const Header = () => {
  return (
    <main className="flex flex-1 flex-col justify-start px-[max(5%,calc((100%-1160px)/2))] pt-[clamp(4.2rem,8vw,7rem)] pb-20">
      <h1 className="max-w-[580px] text-[clamp(3.1rem,6.6vw,5.3rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#2d3a2f]">
        El arte de la <br />
        <span className="font-normal">paciencia</span>
      </h1>
      <p className="mt-11 max-w-[760px] text-[clamp(1.1rem,2vw,1.9rem)] leading-[1.55] text-[#2d3a2f]">
        Descubre la serenidad a través del cuidado y diseño de árboles Bonsái.
        <br className="hidden sm:block" />
        Un espacio para reconectar con la naturaleza.
      </p>
      <div className="mt-14">
        <Link
          to="/booking"
          className="inline-block rounded-[6px] bg-[#273628] px-10 py-4 text-[1.1rem] font-medium leading-none text-[#f5f3ef] transition-colors hover:bg-[#334736]"
        >
          Reserva un taller
        </Link>
      </div>
    </main>
  );
};

export default Header
