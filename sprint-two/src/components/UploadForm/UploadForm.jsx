import './UploadForm.scss';
import UploadImage from '../../assets/images/Upload-video.jpg'

function UploadForm(props) {
    return (
        <>
            <form className="upload-form">
                <p className="upload-form__title">Upload Video</p>
                <div className="upload-form__image-container">
                    <p className="upload-form__thumbnail-title">VIDEO THUMBNAIL</p>
                    <img className="upload-form__thumbnail-image" src={UploadImage} alt="Default Upload Hero"></img>
                </div>
                <div className="upload-form__text-container">
                    <p className="upload-form__input-title">TITLE YOUR VIDEO</p>
                    <input className="upload-form__input--video-title" type="text" name="titleInput" placeholder="Add a title to your video" required></input>
                </div>

                <div className="upload-form__text-container">
                    <p className="upload-form__input-title">ADD A VIDEO DESCRIPTION</p>
                    <textarea className="upload-form__input--video-description" type="text" name="titleInput" 
                    placeholder="Add a description of your video" required></textarea>
                </div>

                <div className="upload-form__button-container">
                <button type="submit" className="upload-form__cancel-button">CANCEL</button>  
                <button type="submit" className="upload-form__submit-button">PUBLISH</button>
                </div>


            </form>

        </>
    )
}

export default UploadForm;