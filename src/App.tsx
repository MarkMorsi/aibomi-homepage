import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import SevenPlates from '@/pages/SevenPlates'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/7plates" element={<SevenPlates />} />
        <Route path="/7plates/privacy" element={<PrivacyPolicy />} />
        <Route path="/7plates/terms" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App