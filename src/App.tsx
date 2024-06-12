import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/sign-in-page/SignInPage';
import AccountPage from './pages/account-page/AccountPage';
import ShedulePage from './pages/shedule-page/ShedulePage';
import './App.scss';
import './assets/fonts/CirceRounded-Bold.woff2';
import './assets/fonts/CirceRounded-Regular.woff2';
import './assets/fonts/CirceRounded-Light.woff2';

const App: React.FC = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <SignInPage /> } />
          <Route path='/account' element={ <AccountPage /> }>
            <Route path='/account/shedule' element={ <ShedulePage /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
