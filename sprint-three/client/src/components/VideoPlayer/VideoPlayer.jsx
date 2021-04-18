import './VideoPlayer.scss';

function VideoPlayer(props) {
    let auth = "?api_key=2d2ff05a-49f9-40a5-9fe3-532053c12494";


    return (
    <>
        <section className="video-player">
            <video className="video-player__video" controls poster={props.image} autoPlay="false">
                {/* <source src={props.video + "/" + auth} type="video/mp4"></source> */}
            </video>
        </section>
    </>
    );
}

export default VideoPlayer;