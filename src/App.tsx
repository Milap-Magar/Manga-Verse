import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Featured, Home, MangaLists } from "./pages";
import { Chapter, MangaDetails } from "./view";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/manga-list" element={<MangaLists />} />

          {/* Open manga section */}
          <Route path="/chapter/:chapterId" element={<Chapter />} />
          <Route path="/manga/:id" element={<MangaDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
