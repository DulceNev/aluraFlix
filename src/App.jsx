import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import HomePage from './Pages/home';
import NewMemberPage from './Pages/NewMember';


function App() {


  return (
    <>
      <BrowserRouter >
        <div className="grid grid-rows-[125px_10fr_1fr] h-screen">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nuevo-video" element={<NewMemberPage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
