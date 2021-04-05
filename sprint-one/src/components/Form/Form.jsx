import App from '../../App';
import './Form.scss';
import Comments from '../Comments/Comments';
import VideoArray from '../../data/data';
import UserIcon from '../../assets/images/Mohan-muruge.jpg'

function Form(props) {
    return (
        <>
            <section className="form">
                <h3 className="form__total-comments">{props.videoarray.length} Comments</h3>

                <form className="form__sub-section">
                    <div className="form__image-container">
                        <img className="form__icon" src={UserIcon}/>
                    </div>

                    <div className="form__text-container">
                        <p className="form__title">JOIN THE CONVERSATION</p>
                        <textarea class="form__text-box" name="commentInput"
                                placeholder="Write Comment here" required></textarea>
                        <button type="submit" className="form__submit-button">COMMENT</button>
                    </div>
                </form>
            </section>

            <section className="comments">
                {props.videoarray.map(comment =>
                <Comments 
                    name={comment.name}
                    date={new Date(comment.timestamp).toLocaleDateString()}
                    comment={comment.comment} />
                )
            }
            </section>
        </>
    )
}

export default Form;