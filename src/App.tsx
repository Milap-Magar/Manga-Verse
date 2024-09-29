import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Featured, Home, MangaLists } from "./pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/manga-list" element={<MangaLists />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
