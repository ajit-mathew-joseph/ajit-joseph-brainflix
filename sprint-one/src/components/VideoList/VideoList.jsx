import App from '../../App';
import './VideoList.scss';
import Video from '../Videos/Videos'
import VideoArray from '../../data/data'
import React from 'react'

class VideoList extends React.Component {

    render() {
        return (
            <>
                <aside className="VideoList">
                    <h3 className="VideoList__main-title">NEXT VIDEO</h3>

                    {VideoArray.map(video =>
                    <Video 
                        id = {video.id}
                        title={video.title}
                        image={video.image}
                        uploader={video.channel}
                        update={this.props.update}/>
                    )
                }
                </aside>
            </>
        )
    }
}

export default VideoList;