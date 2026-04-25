
const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#f7f6f2]">
      <Navbar />
      <main className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-stone-700 mb-6 tracking-tight">Nuestra Colección</h1>
          <p className="text-stone-500 font-light max-w-md mx-auto leading-relaxed">
            Un vistazo a algunos de los ejemplares en los que hemos trabajado.
            Cada árbol cuenta una historia de tiempo y paciencia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            listBonsai.map((bonsai)=>(
              <CardGrid key={bonsai.id} name={bonsai.name}/>
            ))
          }

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Gallery