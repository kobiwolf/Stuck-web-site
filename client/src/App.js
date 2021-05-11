import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
import AboutUsPage from './pages/AboutUsPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import ContentUsPage from './pages/ContentUsPage';
import HeadOfPage from './components/headOfPage/HeadOfPage';
import Context from './components/Context/Context';

function App() {
  const [user, setUser] = useState('');

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Context.Provider value={{ user, setUser }}>
          {user && <HeadOfPage />}
          <Switch>
            <Route exact path="/" component={LoginPage} />

            <Route path="/home" exact component={SearchPage} />

            <Route path="/setting" exact component={SettingsPage} />

            <Route path="/aboutUs" exact component={AboutUsPage} />

            <Route path="/contactUs" exact component={ContentUsPage} />
          </Switch>
        </Context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
