
// import './App.css'

import Footer from "./components/Footer/Footer"
import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import Table from "./components/Table/Table"

function App() {

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <Table />
      </div>
      <Footer />
    </>
  )
}

export default App
