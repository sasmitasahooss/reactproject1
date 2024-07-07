import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/main';
import AboutUs from './components/AboutUs/aboutUs';
import SignIn from './components/Auth/signIn';
import Faq from './components/Faq/faq';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/Faq' element={<Faq/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
