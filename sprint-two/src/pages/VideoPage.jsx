import React from 'react';
import '../App.scss';
import Form from '../components/Form/Form';
import VideoDescription from '../components/VideoDescription/VideoDescription';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import axios from 'axios';

/* Attempted to incorporate as much feedback from Sprint 1 as possible -- some elements will be corrected for Sprint 3 due to time constraints and features breaking (might
    need TA help) */

class VideoPage extends React.Component {
    apiURL = "https://project-2-api.herokuapp.com";
    videolistURL = "/videos";
    auth = "?api_key=2d2ff05a-49f9-40a5-9fe3-532053c12494";

    state = {
        videoList: [],
        id: 0,
    }

    componentDidMount() {
        document.title = "Watch Videos on Brainflix!"

        axios.get(this.apiURL + this.videolistURL + this.auth)
            .then(res => {
                this.setState(
                    {
                        videoList: res.data.filter(video => video.id !== res.data[0].id),
                        id: '/' + res.data[0].id
                    })
                axios.get(this.apiURL + this.videolistURL + this.state.id + this.auth)
                    .then(res => {
                        this.setState(
                            {
                                mainVideo: res.data
                            })
                    })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            if (this.props.match.url !== "/home") {
                axios.get(this.apiURL + this.videolistURL + this.auth)
                    .then(res => {
                        this.setState(
                            {
                                videoList: res.data.filter(video => video.id !== this.props.match.params.videoId),
                                id: '/' + res.data.find(video => video.id === this.props.match.params.videoId).id
                            })
                        axios.get(this.apiURL + this.videolistURL + this.state.id + this.auth)
                            .then(res => {
                                this.setState(
                                    {
                                        mainVideo: res.data
                                    })
                            })
                    })
            } else {
                axios.get(this.apiURL + this.videolistURL + this.auth)
                    .then(res => {
                        this.setState(
                            {
                                videoList: res.data.filter(video => video.id !== res.data[0].id),
                                id: '/' + res.data[0].id
                            })
                        axios.get(this.apiURL + this.videolistURL + this.state.id + this.auth)
                            .then(res => {
                                this.setState(
                                    {
                                        mainVideo: res.data
                                    })
                            })
                    })
            }

        }
    }

    // Converting Date outside assignment is breaking it -- will be looking into it pre-Sprint #3 Submission

    render() {
        if (!this.state.mainVideo) {
            return <div></div>
        }

        return (
            <>
                <VideoPlayer image={this.state.mainVideo.image} />
                <section className="desktop-container">
                    <section className="desktop-container__video">
                        <VideoDescription title={this.state.mainVideo.title} uploader={this.state.mainVideo.channel}
                            uploadDate={new Date(this.state.mainVideo.timestamp).toLocaleDateString()} views={this.state.mainVideo.views}
                            likes={this.state.mainVideo.likes} description={this.state.mainVideo.description} />
                        <Form videoarray={this.state.mainVideo.comments} />
                    </section>
                    <section className="desktop-container__video-list">
                        <VideoList videolist={this.state.videoList} match={this.props.match} update={this.props.update} />
                    </section>
                </section>
            </>
        )
    }
}

export default VideoPage;