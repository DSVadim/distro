import './App.scss'
import Layout from './pages/layout/Layout.tsx'
import SignIn from './pages/signIn/SignIn.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter basename='/distro/'>
        <Routes>
          <Route path="/" element={<Layout />} />
            <Route path="/SignIn" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
