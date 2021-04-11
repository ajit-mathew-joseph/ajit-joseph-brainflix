import './VideoList.scss';
import Video from '../Videos/Videos';
import React from 'react'
import axios from 'axios';

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

// {console.log(VideoArray[this.props.data].id)}
// {console.log(VideoArray.filter(video => video.id !== VideoArray[this.props.data].id))}
// filter(video => video.id !== VideoArray[this.props.data].id)


// if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
//     console.log(this.props.match.params.videoId);
//     console.log(1);
// }