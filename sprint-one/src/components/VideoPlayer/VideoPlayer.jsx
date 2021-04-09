import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
    <>
        <section className="video-player">
            <video className="video-player__video" controls poster={props.image} autoPlay>
                <source src={props.video}></source>
            </video>
        </section>
    </>
    );
}

export default VideoPlayer;