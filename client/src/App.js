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
import Footer from './components/Footer/Footer';
import Cookies from 'universal-cookie';
import Spinner from './components/Spinner/Spinner';

function App() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {isLoading && <Spinner />}
        <NavBar />
        <Context.Provider value={{ user, setUser, setIsLoading }}>
          {user && <HeadOfPage />}
          <Switch>
            <Route exact path="/">
              {new Cookies().get('token') ? <SearchPage /> : <LoginPage />}
            </Route>

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
