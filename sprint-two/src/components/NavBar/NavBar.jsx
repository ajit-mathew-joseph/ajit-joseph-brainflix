import logo from '../../assets/images/Logo-brainflix.svg';
import userIcon from '../../assets/images/Mohan-muruge.jpg';
import './NavBar.scss';
import {Link} from 'react-router-dom';


function NavBar() {
    return (
        <>
            <header className="header">
                <nav className="nav-bar">
                    <Link to="/home" className="nav-bar__logo--link"><img className="nav-bar__logo" src={logo} alt="BrainFlix Logo"/></Link>
                    <div className="nav-bar__tablet-container">
                    <input type="text" className="nav-bar__search" name="searchInput" placeholder="Search"></input>
                    <div className="nav-bar__upload-container">
                        <Link to="/upload"><button type="submit" className="nav-bar__upload-button"><span className="nav-bar__plus-icon">+</span>UPLOAD</button></Link>
                        <img className="nav-bar__user-icon" src={userIcon} alt="User Icon"></img>
                    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar;