import React from 'react';
import './App.scss';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import UploadForm from './components/UploadForm/UploadForm';
import VideoDescription from './components/VideoDescription/VideoDescription';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoDetails from './data/videoDetails';
import VideoListArray from './data/videos';

/* Page might load with a white border on the side. Reloading the page will fix the issue -- rendering issue */

class App extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      mainVideo: VideoDetails.find(video => video.id === VideoDetails[0].id),
      videoList: VideoListArray.filter(video => video.id !== VideoDetails[0].id)
    }
  }

  updateState(id) { 
    this.setState({
      mainVideo: VideoDetails.find(video => video.id === id),
      videoList: VideoListArray.filter(video => video.id !== id)
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <UploadForm /> */}
        <VideoPlayer image={this.state.mainVideo.image}/>
        <section className="desktop-container">
          <section className="desktop-container__video">
          <VideoDescription title={this.state.mainVideo.title} uploader={this.state.mainVideo.channel} 
          uploadDate={new Date(this.state.mainVideo.timestamp).toLocaleDateString()} views={this.state.mainVideo.views} 
          likes={this.state.mainVideo.likes}  description={this.state.mainVideo.description}/>
          <Form videoarray={this.state.mainVideo.comments}/>
          </section>
          <section className="desktop-container__video-list">
            <VideoList videolist={this.state.videoList} update={this.updateState}/>
          </section>
        </section>
      </div>
    );
  }
}

export default App;


// video={VideoArray[this.state.mainVideo].video}
// {console.log(this.state.mainVideo)}
// {console.log(this.state.videoList)}
