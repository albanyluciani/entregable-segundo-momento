import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f6f2]">
      <Navbar />
      <Header />
      <Footer />
    </div>
  )
}

export default Layout