import React from 'react';
import UploadForm from '../components/UploadForm/UploadForm'


function UploadPage(props) {
    document.title = "Upload a video now!"

    return (
        <section className="upload-section">
            <UploadForm router={props} />
        </section>
    )
}

export default UploadPage;
