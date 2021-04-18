import React from 'react';
import '../App.scss';
import Form from '../components/Form/Form';
import VideoDescription from '../components/VideoDescription/VideoDescription';
import VideoList from '../components/VideoList/VideoList';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import axios from 'axios';


class VideoPage extends React.Component {
    expressURL = "http://localhost:8080"
    videolistURL = "/videos";

    state = {
        videoList: [],
        id: 0,
    }

    componentDidMount() {
        document.title = "Watch Videos on Brainflix!"

        axios.get(this.expressURL + this.videolistURL)
            .then(res => {
                console.log(res.data)
                this.setState(
                    {
                        videoList: res.data.filter(video => video.id !== res.data[0].id),
                        id: '/' + res.data[0].id
                    })
                axios.get(this.expressURL + this.videolistURL + this.state.id)
                    .then(res => {
                        console.log(res.data)
                        this.setState(
                            {
                                mainVideo: res.data[0]
                            })
                    })

                axios.get(this.expressURL + this.videolistURL + this.state.id)
                    .catch(err => {
                        console.log(err);
                    })
            })

        axios.get(this.expressURL + this.videolistURL)
            .catch(err => {
                console.log(err);
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            if (this.props.match.url !== "/home") {
                axios.get(this.expressURL + this.videolistURL)
                    .then(res => {
                        this.setState(
                            {
                                videoList: res.data.filter(video => video.id !== this.props.match.params.videoId),
                                id: '/' + res.data.find(video => video.id === this.props.match.params.videoId).id
                            })
                        axios.get(this.expressURL + this.videolistURL)
                            .catch(err => {
                                console.log(err);
                            })

                        axios.get(this.expressURL + this.videolistURL + this.state.id)
                            .then(res => {
                                this.setState(
                                    {
                                        mainVideo: res.data[0]
                                    })
                            })

                        axios.get(this.expressURL + this.videolistURL + this.state.id)
                            .catch(err => {
                                console.log(err);
                            })
                    })

            } else {
                axios.get(this.expressURL + this.videolistURL)
                    .then(res => {
                        this.setState(
                            {
                                videoList: res.data.filter(video => video.id !== res.data[0].id),
                                id: '/' + res.data[0].id
                            })
                        axios.get(this.expressURL + this.videolistURL)
                            .catch(err => {
                                console.log(err);
                            })

                        axios.get(this.expressURL + this.videolistURL + this.state.id)
                            .then(res => {
                                this.setState(
                                    {
                                        mainVideo: res.data[0]
                                    })
                            })
                        axios.get(this.expressURL + this.videolistURL + this.state.id)
                            .catch(err => {
                                console.log(err);
                            })

                    })
            }

        }
    }

    render() {
        if (!this.state.mainVideo) {
            return <div></div>
        }

        let convDate = new Date(this.state.mainVideo.timestamp).toLocaleDateString();

        return (
            <>
                <VideoPlayer image={this.state.mainVideo.image} video={this.state.mainVideo.video} />
                <section className="desktop-container">
                    <section className="desktop-container__video">
                        <VideoDescription title={this.state.mainVideo.title} uploader={this.state.mainVideo.channel}
                            uploadDate={convDate} views={this.state.mainVideo.views}
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