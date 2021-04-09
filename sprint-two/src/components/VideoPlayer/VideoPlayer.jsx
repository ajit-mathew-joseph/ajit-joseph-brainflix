import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
    <>
        <section className="video-player">
            <video className="video-player__video" controls poster={props.image} autoPlay>
            </video>
        </section>
    </>
    );
}

export default VideoPlayer;

// <source src={props.video}></source>