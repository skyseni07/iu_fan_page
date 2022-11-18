import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
// import Auth from './hoc/auth'
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import NoticeBoard from './components/views/Notice/NoticeBoard';
import NewsBoard from './components/views/News/NewsBoard';
import './App.scss';

function App() {
  // const AuthLandingPage = Auth(LandingPage, null);
  // const AuthLoginPage = Auth(LoginPage, false);
  // const AuthRegisterPage = Auth(RegisterPage, false);
  // const AuthNotice = Auth(NoticeBoard, true);
  // const AuthNews = Auth(NewsBoard, true);

  return (
    <Router>
      <div className='App'>
        <NavBar className='nav' />
        <Routes className='content'>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path='/notice_board' element={<NoticeBoard />} />
          <Route exact path='/news_board' element={<NewsBoard />} />
        </Routes>
        <Footer className='footer' />
      </div>
    </Router >
  );
}

export default App;
