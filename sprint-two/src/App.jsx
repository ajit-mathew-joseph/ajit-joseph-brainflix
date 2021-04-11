import React from 'react';
import './App.scss';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import UploadPage from './pages/UploadPage';
import VideoDescription from './components/VideoDescription/VideoDescription';
import VideoList from './components/VideoList/VideoList';
import Videos from './components/Videos/Videos';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import NotFound from './components/NotFound/NotFound';
import VideoDetails from './data/videoDetails'
import VideoListArray from './data/videos';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import Video from './components/Videos/Videos';
import VideoPage from './pages/VideoPage';
import axios from 'axios';

/* Page might load with a white border on the side. Reloading the page will fix the issue -- rendering issue */

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.stateUpdate = this.stateUpdate.bind(this);
  // }

  //   this.state = {
  //     mainVideo: VideoDetails.find(video => video.id === VideoDetails[0].id),
  //     videoList: VideoListArray.filter(video => video.id !== VideoDetails[0].id)
  //   }
  // }

render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route path="/upload" exact>
              <UploadPage />
            </Route>

            <Route path="/home" render={(routerProps) => <VideoPage {...routerProps} />} />

            <Route path="/videos/:videoId" render={(routerProps) => <VideoPage {...routerProps} />} />

            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// video={VideoArray[this.state.mainVideo].video}
// {console.log(this.state.mainVideo)}
// {console.log(this.state.videoList)}
// <VideoPage mainVideo={this.state.mainVideo} videoList={this.state.videoList} update={this.updateState}/>


  // switchCase(bool) {
  //   this.setState({
  //     stop: bool})
  // }


  // updateVideoState(urlID, urlID2) {
  //   axios.get(urlID)
  //   .then(res => {
  //     this.setState(
  //       {
  //         videoList: res.data.filter(video => video.id !== res.data[0].id),
  //         id: '/' + res.data[0].id
  //       })
  //     console.log(res.data.filter(video => video.id !== res.data[0].id))
  //   })

  //   axios.get(urlID2)
  //       .then(res => {
  //         console.log(res.data)
  //       })
  // }


  // updateState(id) {
  //   this.setState({
  //     mainVideo: VideoDetails.find(video => video.id === id),
  //     videoList: VideoListArray.filter(video => video.id !== id)
  //   })
  // }



  //   this.setState(
  //     {
  //       mainVideo: res.data
  //     })
  // }) 
  // })