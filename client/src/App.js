/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchPage from './pages/SearchPage';
import itemsPage from './pages/itemsPage';
import AboutUsPage from './pages/AboutUsPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SettingsPage from './pages/SettingsPage';
import HeadOfPage from './components/headOfPage/HeadOfPage';
import Context from './components/Context/Context';

import Cookies from 'universal-cookie';
import Spinner from './components/Spinner/Spinner';

import ResetPasswordPage from './pages/ResetPasswordPage';
// import ChatPage from './pages/ChatPage';

function App() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading && <Spinner />}
        {user && <NavBar />}
        <Context.Provider value={{ user, setUser, setIsLoading }}>
          {user && <HeadOfPage />}
          <Switch>
            <Route exact path="/">
              {new Cookies().get('token') ? <SearchPage /> : <LoginPage />}
            </Route>

            <Route path="/home" exact component={SearchPage} />

            <Route path="/items" exact component={itemsPage} />

            <Route path="/aboutUs" exact component={AboutUsPage} />

            <Route path="/settings" exact component={SettingsPage} />
            {/* i tried to implament socketio,did'nt magange to finish-continoue later */}
            {/* <Route path="/chat" exact component={ChatPage} /> */}
            <Route
              path="/confirmPassword/:mail/:token"
              exact
              component={ResetPasswordPage}
            />
          </Switch>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
