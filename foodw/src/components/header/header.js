import './header.css'
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const navigate = useNavigate()
    return(
        <header className="header">
            <div className="lefth">Foodera</div>
            <div className="midh">
                <a href="/">Home</a>
                <a href="/aboutUs">About Us</a>
                <a href="">Blog</a>
                <a href="/faq">Faq</a>
            </div>
            <div className="righth">
                <button onClick={()=>navigate('/signIn')}>Sign In</button>
            </div>
        </header>
    );
}

export default Header;