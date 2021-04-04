import App from '../../App';
import './Comments.scss';
import Form from '../Form/Form'

function Comments(props) {
    return (
    <>
        <div className="comments__container">
            <div className="comments__icon-container">
                <div className="comments__icon"></div>
            </div>
                        
            <div className="comments__date-container">
                <p className="comments__name">{props.name}</p>
                <p className="comments__date">{props.timestamp}</p>
            </div>

            <div className="comments__text-container">
                <p className="comments__post">{props.comment}</p>
            </div>
        </div>
    </>
    );
}

export default Comments;