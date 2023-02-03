import Home from "./modules/pages/Home"
import Calendar from "./modules/pages/Calendar"
import Media from "./modules/pages/Media"
import Legal from "./modules/pages/Legal"
import Contact from "./modules/pages/Contact"
import NavBar from "./components/Navigation/NavBar"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./modules/adminpages/Dashboard"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {
  return (
    <>
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  )
}

export default App
