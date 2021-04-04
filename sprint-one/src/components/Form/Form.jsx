import App from '../../App';
import './Form.scss';
import Comments from '../Comments/Comments';
import VideoArray from '../../data/data';

function Form(props) {
    return (
        <>
            <section className="form">
                <h3 className="form__total-comments">{props.videoarray.length} Comments</h3>
                <p className="form__title">Join the Conversation</p>
                <textarea class="form__text-box" name="commentInput"
                    placeholder="Write Comment Here" required></textarea>
                <button type="submit" className="comment-section__submit-button">COMMENT</button>
                <div className="form__image-container">
                    <img className="form__icon" src="./assets/images/Mohan-muruge.jpg"/>
                </div>
            </section>

            <section className="comments">
                {props.videoarray.map(comment =>
                <Comments 
                    name={comment.name}
                    date={comment.timestamp}
                    comment={comment.comment} />
                )
            }
            </section>
        </>
    )
}

export default Form;