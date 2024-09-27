import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Featured, Home } from "./pages"

const App = () => {
  return (
    <>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/featured" element={<Featured />} />
          </Routes>
        </BrowserRouter>
    </>
  ) 
}

export default App