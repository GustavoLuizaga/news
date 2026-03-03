import { Routes, Route } from "react-router-dom"
import { News } from "./pages/News"

function App() {

  return (
   <Routes>
      <Route path="/" element={<News />} />
    </Routes>
  )
}

export default App
