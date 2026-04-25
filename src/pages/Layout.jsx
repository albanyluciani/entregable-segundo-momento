import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f6f2]">
      <Navbar />
      <HeroSection/>
      <Footer />
    </div>
  )
}

export default Layout