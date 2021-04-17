import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import UploadPage from './pages/UploadPage';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import VideoPage from './pages/VideoPage';


/* Page might load with a white border on the side. Reloading the page will fix the issue -- rendering issue */

class App extends React.Component {
  

render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
          <Route path="/upload" render={(routerProps) => <UploadPage {...routerProps} />} />

            <Route path="/home" render={(routerProps) => <VideoPage {...routerProps} />} />

            <Route path="/videos/:videoId" render={(routerProps) => <VideoPage {...routerProps} />} />

            <Route exact path="/">
              <Redirect to="/home" />
            </Route>

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;