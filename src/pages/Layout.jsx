import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f3f2ef] text-[#243026]">
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default Layout