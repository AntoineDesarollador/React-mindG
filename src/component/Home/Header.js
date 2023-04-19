
import logo from "../Asset/img/logo.png"

function Header(){
    return (
        <header className="body-header">

          <a href="index.js"> <img src={logo}></img></a> 

          <nav>
            <a href="../ServeurMutualise/main.js">Serveur Mutualisé</a>
            <a href="#">Serveur Dédié</a>
            <a href="#">Solution "Cloud"</a>
            <a href="#">Contact</a>
          </nav>
     
        </header>
    )
}

export default Header;