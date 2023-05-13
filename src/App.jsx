import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Details from "./Details"
import Root from "./Route"

const App = () => (
  <BrowserRouter>
    <h1>App Title</h1>
    <Link to="/">Root</Link><br />
    <Link to="/details/1">detail1</Link>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<Root />} />
    </Routes>
  </BrowserRouter>
)

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
