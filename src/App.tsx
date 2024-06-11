import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/sign-in-page/SignInPage';
import MainPage from './pages/main-page/MainPage';
import './App.scss';
import './assets/fonts/CirceRounded-Bold.woff2';
import './assets/fonts/CirceRounded-Regular.woff2';
import './assets/fonts/CirceRounded-Light.woff2';

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/login' element={ <SignInPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
