import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo" src="../../../images/logo.png" alt="logo"></img>
            </div>
            <button className="nav-button">home</button>
            <button className="nav-button">taxi dog</button>
            <button className="nav-button">serviços</button>
            <button className="nav-button">banho e tosa</button>
            <button className="nav-button">contato</button>
        </div>

    )
}
export default Navbar