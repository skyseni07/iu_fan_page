import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import NoticeBoard from './components/views/Notice/NoticeBoard';
import NewsBoard from './components/views/News/NewsBoard';
import './App.scss';

function App() {

  return (
    <Router>
      <div className='App'>
        <NavBar className='nav' />
        <Routes className='content'>
          <Route exact path="/iu_fan_page" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/notice_board' element={<NoticeBoard />} />
          <Route path='/news_board' element={<NewsBoard />} />
        </Routes>
        <Footer className='footer' />
      </div>
    </Router >
  );
}

export default App;
