import logo from './logo.svg';
import React from 'react';
import './App.scss';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import VideoDescription from './components/VideoDescription/VideoDescription';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoArray from './data/data';

class App extends React.Component {
  state = {
    index: 0
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <VideoPlayer image={VideoArray[this.state.index].image}/>
        <VideoDescription title={VideoArray[this.state.index].title} uploader={VideoArray[this.state.index].channel} uploadDate={new Date(VideoArray[this.state.index].timestamp).toLocaleDateString()} 
        views={VideoArray[this.state.index].views} likes={VideoArray[this.state.index].likes}  description={VideoArray[this.state.index].description}/>
        <Form videoarray={VideoArray[this.state.index].comments}/>
        <VideoList videolist={VideoArray}/>
      </div>
    );
  }
}

export default App;
