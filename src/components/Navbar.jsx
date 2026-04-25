
const Navbar = () => {
  return (
    <nav className= "flex justify-between items-center border-b-4 pt-[clamp(1.5rem,3vw,2.5rem)] pb-[clamp(1.5rem,3vw,2.5rem)] px-[max(5%,calc((100%-1200px)/2))]">  
      <a className= "text-2xl semibold tracking-widest uppercase" href="">Zenith Bonsai</a>
       <div className="flex space-x-6">
        <a className= "font-normal pb-1 border-b border-transparent hover:border-b-black" href="">Filosofía</a>
      <a className= "font-normal pb-1 border-b border-transparent hover:border-b-black" href="">Galería</a>
      <a className= "font-normal pb-1 border-b border-transparent hover:border-b-black" href="">Reservas</a>
      </div>
    </nav>  
  )
}

export default Navbar