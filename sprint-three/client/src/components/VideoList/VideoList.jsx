import './VideoList.scss';
import Video from '../Videos/Videos';
import React from 'react'

function VideoList(props) {            

    return (
        <>
            <aside className="VideoList">
                <h3 className="VideoList__main-title">NEXT VIDEO</h3>

                {props.videolist.map(video =>
                    <Video
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        image={video.image}
                        uploader={video.channel}
                        update={props.update}
                        match={props.match} />
                )
                }
            </aside>
        </>
    )

}

export default VideoList;