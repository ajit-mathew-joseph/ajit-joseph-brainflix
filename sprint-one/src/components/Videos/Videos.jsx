import './Videos.scss';
import VideoArray from '../../data/data'
import React from 'react'

class Video extends React.Component {
    
    stateUpdater = event => {
        let index = VideoArray.findIndex(i => i.id === this.props.id);
        this.props.update(index);
    }

    render() {
        return (
        <>
            <a className="VideoList__link" onClick={event => this.stateUpdater(event)} id={this.props.key}>
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

