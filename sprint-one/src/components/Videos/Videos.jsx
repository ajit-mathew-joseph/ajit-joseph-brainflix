import App from '../../App';
import './Videos.scss';
import VideoList from '../VideoList/VideoList'

function Video(props) {
    return (
    <>
        <a className="VideoList__link" onClick="#">
            <div className="VideoList__container">
                <p>{props.id}</p>
                <img className="VideoList__image" src={props.image}/>
                <p className="VideoList__title">{props.title}</p>
                <p className="VideoList__author">{props.uploader}</p>
            </div>
        </a>
    </>
    );
}

export default Video;