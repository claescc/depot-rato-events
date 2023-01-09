import ReactDOM from "react-dom/client"
import App from "./App"
import "./assets/styles/index.css"
import { BrowserRouter } from "react-router-dom"
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

// STRICT MODE RENDERS TWICE?
// <React.StrictMode>
//<BrowserRouter>
//  <App />
//</BrowserRouter>
//</React.StrictMode>,
