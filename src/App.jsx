import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Game from './pages/Game';
import Quotes from "./components/Quotes";

function App() {

  return (
    <>
      <Quotes />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:urlLink" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
