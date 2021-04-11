import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import UploadForm from '../components/UploadForm/UploadForm'


function UploadPage(props) {
    return (
        <section className="upload-section">
            <UploadForm />
        </section>
    )
}

export default UploadPage;
