import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store';
import SignInPage from './pages/sign-in-page/SignInPage';
import AccountPage from './pages/account-page/AccountPage';
import MainPage from './pages/main-page/MainPage';
import ShedulePage from './pages/shedule-page/ShedulePage';
import './App.scss';
import './assets/fonts/CirceRounded-Bold.woff2';
import './assets/fonts/CirceRounded-Regular.woff2';
import './assets/fonts/CirceRounded-Light.woff2';

const App: React.FC = () => {

  return (
    <div className="App">
      <Provider store={ store }>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <SignInPage /> } />
            <Route path='/account' element={ <AccountPage /> }>
              <Route path='/account/shedule' element={ <ShedulePage /> } />
              <Route path='/account/main' element={ <MainPage /> } />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
