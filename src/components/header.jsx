import imagenhome from "./img/IMG_0644.jpg";
import Navigation from "./navigation";

export default function Header() {
  return (
    <header>

      <div className="header">

      <img src={imagenhome} alt="imagen" className="img-home"/>

      <h1 className="texto-home">Mi Portafolio</h1>
     
      </div>

      <hr className="divider" />

      <Navigation />
      
    </header>

    
  );
}