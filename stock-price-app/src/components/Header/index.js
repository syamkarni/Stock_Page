import {Link} from 'react-router-dom';
import './index.css';

const Header =()=>{

    return (
        
        <div className="header">
            <Link className='nav-link' to="/">
            <h1 className='header-logo'>Stocks</h1>
            </Link>
        </div>
        
    );
}

export default Header;