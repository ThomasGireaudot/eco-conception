import './Header.css';
import Tarte from '../assets/tarte.svg';

export default function Header() {
    return (
        <header className="header">
            <div className='header-title'>
                <img src={Tarte.src} alt="Logo" loading="lazy" className="header-title-logo" />
                <h1 className="header-title-text">Philippe Lugnac</h1>
                <img src={Tarte.src} alt="Logo" loading="lazy" className="header-title-logo" />
            </div>
            <div className="header-content">
                <a href="#chief"><p className="header-content-button">Le chef</p></a>
                <a href="#pastries"><p className="header-content-button">Nos pâtisseries</p></a>
                <a href="#where"><p className="header-content-button">Où nous trouver</p></a>
                <a href="#contact"><p className="header-content-button">Nous contacter</p></a>
            </div>
        </header>
    );
}
  