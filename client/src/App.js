import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ItemsPage from './pages/ItemsPage';
import SettingsPage from './pages/SettingsPage';
import AboutUsPage from './pages/AboutUsPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            {userInfo ? <SearchPage /> : <LoginPage />}
          </Route>
          <Route path="/setting" exact>
            {userInfo ? <SettingsPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/aboutUs" exact>
            {userInfo ? <AboutUsPage /> : <Redirect to="/" />}
          </Route>
          <Route path="/contactUs" exact>
            {userInfo ? <AboutUsPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
