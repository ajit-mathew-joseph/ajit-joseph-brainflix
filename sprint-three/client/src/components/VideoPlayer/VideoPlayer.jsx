import './VideoPlayer.scss';

function VideoPlayer(props) {
    return (
    <>
        <section className="video-player">
            <video className="video-player__video" controls poster={props.image}>
                {/* <source src={props.video + "/" + auth} type="video/mp4"></source> */}
            </video>
        </section>
    </>
    );
}

export default VideoPlayer;