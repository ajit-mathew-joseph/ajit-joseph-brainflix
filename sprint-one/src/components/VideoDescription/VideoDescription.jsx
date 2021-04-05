import App from '../../App';
import './VideoDescription.scss';
import VideoArray from '../../data/data';
import ViewsLogo from '../../assets/images/Icon-views.svg'
import LikesLogo from '../../assets/images/Icon-likes.svg'

function VideoDescription(props) {
    return (
    <>
        <section className="video-description">
            <div className="video-description__summary-container">
                <h2 className="video-description__title">{props.title}</h2>

                <div className="video-description__upload-container">
                    <p className="video-description__uploader">By {props.uploader}</p>
                    <p className="video-description__upload-date">{props.uploadDate}</p>
                </div>

                <div className="video-description__share-container">
                    <div className="video-description__views-container">
                        <img className="video-description__views-image" src={ViewsLogo} alt="views"/>
                        <p className="video-description__views-total">{props.views}</p>
                    </div>

                    <div className="video-description__likes-container">
                        <img className="video-description__likes-image" src={LikesLogo} alt="likes"/>
                        <p className="video-description__likes-total">{props.likes}</p>
                    </div>
                </div>
                
                
            </div>
            <div className="video-description__description-container">
                <div className="video-description__description-subcontainer">
                <p className="video-description__description">{props.description}</p>
                </div>
            </div>
        </section>
    </>
    );
}

export default VideoDescription;