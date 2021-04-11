import './Videos.scss';
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Video extends React.Component {
    // updateState = (id) => {
    //     this.props.update(id)
    // }

    apiURL = "https://project-2-api.herokuapp.com";
    videolistURL = "/videos";
    auth = "?api_key=2d2ff05a-49f9-40a5-9fe3-532053c12494";

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(prevProps, prevState);
    //     console.log(this.props);
    // }
    render() {
        return (
            <>
                <Link to={`/videos/${this.props.id}`} className="VideoList__link">
                    <div className="VideoList__container">
                        <div className="VideoList__image-container">
                            <img className="VideoList__image" src={this.props.image} alt="list of videos" />
                        </div>
                        <div className="VideoList__text-container">
                            <p className="VideoList__title">{this.props.title}</p>
                            <p className="VideoList__author">{this.props.uploader}</p>
                        </div>
                    </div>
                </Link>
            </>
        )
    }
}
export default Video;

// onClick={() => this.updateState(this.props.id)}

// axios.get(this.apiURL + this.videolistURL + "/" + this.props.id + this.auth)
//             .then(res => {
//                 console.log(res.data)
//                 this.setState(
//                     {
//                         mainVideo: res.data
//                     })
//             }
//         )