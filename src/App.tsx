import './App.scss'
import Layout from './pages/layout/Layout.tsx'
import Discover from "./pages/discover/Discover.tsx";
import BecomeArtist from "./pages/becomeArtist/BecomeArtist.tsx";
import Upload from "./pages/upload/Upload.tsx";
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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
