import logo from './logo.svg';
import React from 'react';
import './App.scss';
import Form from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import VideoDescription from './components/VideoDescription/VideoDescription';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoArray from './data/data';

/* Page might load with a white border on the side. Reloading the page will fix the issue -- rendering issue */

class App extends React.Component {
  constructor() {
    super();
    this.updateState = this.updateState.bind(this);
    this.state = {
      index: 0
    }
  }
  
  updateState(index) { 
    this.setState({
      index: index
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <VideoPlayer image={VideoArray[this.state.index].image}/>
        <section className="desktop-container">
          <section className="desktop-container__video">
          <VideoDescription title={VideoArray[this.state.index].title} uploader={VideoArray[this.state.index].channel} 
          uploadDate={new Date(VideoArray[this.state.index].timestamp).toLocaleDateString()} views={VideoArray[this.state.index].views} 
          likes={VideoArray[this.state.index].likes}  description={VideoArray[this.state.index].description}/>
          <Form videoarray={VideoArray[this.state.index].comments}/>
          </section>
          <section className="desktop-container__video-list">
            <VideoList videolist={VideoArray} update={this.updateState}/>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
