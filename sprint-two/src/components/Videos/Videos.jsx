import './Videos.scss';
import React from 'react'

class Video extends React.Component {
    render() {
        return (
        <>
            <a className="VideoList__link" onClick={() => this.props.update(this.props.id)}>
                <div className="VideoList__container">
                    <div className="VideoList__image-container">
                    <img className="VideoList__image" src={this.props.image} alt="list of videos" />
                    </div>
                    <div className="VideoList__text-container">
                        <p className="VideoList__title">{this.props.title}</p>
                        <p className="VideoList__author">{this.props.uploader}</p>
                    </div>
                </div>
            </a>
        </>
        )
    }
}

export default Video;

