import './VideoList.scss';
import Video from '../Videos/Videos';
import React from 'react'

class VideoList extends React.Component {            
render() {
    return (
        <>
            <aside className="VideoList">
                <h3 className="VideoList__main-title">NEXT VIDEO</h3>

                {this.props.videolist.map(video =>
                    <Video
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        image={video.image}
                        uploader={video.channel}
                        update={this.props.update}
                        match={this.props.match} />
                )
                }
            </aside>
        </>
    )
}
}

export default VideoList;