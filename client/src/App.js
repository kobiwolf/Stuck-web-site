import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';

import SearchPage from './pages/SearchPage';
import ItemsPage from './pages/ItemsPage';
import SettingsPage from './pages/SettingsPage';
import AboutUsPage from './pages/AboutUsPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import ContentUsPage from './pages/ContentUsPage';
import HeadOfPage from './components/headOfPage/HeadOfPage';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            {userInfo ? (
              <>
                <HeadOfPage />
                <SearchPage state={userInfo} />
              </>
            ) : (
              <LoginPage setUserInfo={setUserInfo} />
            )}
          </Route>
          <Route path="/setting" exact>
            {userInfo ? (
              <>
                <HeadOfPage />
                <SettingsPage state={userInfo} />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/aboutUs" exact>
            {userInfo ? (
              <>
                <HeadOfPage /> <AboutUsPage />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route path="/contactUs" exact>
            {userInfo ? (
              <>
                <HeadOfPage /> <ContentUsPage />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
