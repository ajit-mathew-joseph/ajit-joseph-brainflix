import App from '../../App';
import './VideoDescription.scss';
import VideoArray from '../../data/data'

function VideoDescription(props) {
    return (
    <>
        <section className="video-description">
            <h2 className="video-description__title">{props.title}</h2>
            <p className="video-description__uploader">{props.uploader}</p>
            <p className="video-description__upload-date">{props.uploadDate}</p>
            <div className="video-description__views-container">
                <img className="video-description__views-image" src="#" alt="views"/>
                <p className="video-description__views-total">{props.views}</p>
            </div>
            <div className="video-description__likes-container">
                <img className="video-description__likes-image" src="#" alt="likes"/>
                <p className="video-description__likes-total">{props.likes}</p>
            </div>

            <div className="video-description-description-container">
                <p className="video-description-description">{props.description}</p>
            </div>
        </section>
    </>
    );
}

export default VideoDescription;