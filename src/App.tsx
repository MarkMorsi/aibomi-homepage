import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { SevenPlates } from '@/pages/SevenPlates'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/7plates" element={<SevenPlates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App