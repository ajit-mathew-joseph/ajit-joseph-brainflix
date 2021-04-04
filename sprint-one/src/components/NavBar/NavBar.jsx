import App from '../../App';
import logo from '../../assets/images/Logo-brainflix.svg';
import userIcon from '../../assets/images/Mohan-muruge.jpg';
import './NavBar.scss';


function NavBar() {
    return (
        <>
            <header className="header">
                <nav className="nav-bar">
                    <a className="nav-bar__logo--link"><img className="nav-bar__logo" src={logo} alt="BrainFlix Logo"/></a>
                    <input type="text" className="nav-bar__search" name="searchInput" placeholder="Search"></input>
                    <img className="nav-bar__user-icon" src={userIcon} alt="User Icon"></img>
                    <button type="submit" className="nav-bar__upload-button">+ UPLOAD</button>
                </nav>
            </header>
        </>
    )
}

export default NavBar;