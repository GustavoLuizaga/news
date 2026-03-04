import { Routes, Route } from "react-router-dom";
import { News } from "./pages/News";
import { NewDetails } from "./pages/NewDetails";
import { Navbar } from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/news/:slug" element={<NewDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;