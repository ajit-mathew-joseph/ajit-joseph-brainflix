import App from '../../App';
import './VideoList.scss';
import Video from '../Videos/Videos'
import VideoArray from '../../data/data'

function VideoList(props) {
    return (
        <>
            <section className="VideoList">
                <h3 className="VideoList__title">NEXT VIDEO</h3>

                {props.videolist.map(video =>
                <Video 
                    id = {video.id}
                    title={video.title}
                    image={video.image}
                    uploader={video.channel} />
                )
            }
            </section>
        </>
    )
}

export default VideoList;