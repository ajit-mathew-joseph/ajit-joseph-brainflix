import App from '../../App';
import './VideoPlayer.scss';
import VideoArray from '../../data/data'

function VideoPlayer(props) {
    return (
    <>
        <section className="video-player">
            <video className="video-player__video" controls poster={props.image}></video>
        </section>
    </>
    );
}

export default VideoPlayer;