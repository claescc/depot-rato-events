import Home from "./modules/pages/Home"
import Calendar from "./modules/pages/Calendar"
import Gallery from "./modules/pages/Gallery"
import Contact from "./modules/pages/Contact"
import NavBar from "./components/Navigation/NavBar"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/*" element={<Home />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
