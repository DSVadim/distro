import './App.scss'
import Layout from './pages/layout/Layout.tsx'
import Discover from "./pages/discover/Discover.tsx";
import BecomeArtist from "./pages/becomeArtist/BecomeArtist.tsx";
import Upload from "./pages/upload/Upload.tsx";
import Faq from "./pages/faq/Faq.tsx";
import About from "./pages/about/About.tsx";
import Detail from "./pages/detail/Detail.tsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter basename='/distro/'>
        <Routes>
          <Route path="/" element={<Layout />} />
            <Route path="/Discover" element={<Discover/>}/>
            <Route path="/BecomeArtist" element={<BecomeArtist/>}/>
            <Route path="/Upload" element={<Upload/>}/>
            <Route path="/Faq" element={<Faq/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Detail" element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
