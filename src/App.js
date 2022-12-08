import "./App.css"
import Home from "./pages/Home"
import Calendar from "./pages/Calendar"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
// import Footer from "./Footer"
import NavBar from "./NavBar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
