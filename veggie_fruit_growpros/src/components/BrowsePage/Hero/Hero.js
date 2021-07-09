
import videomp4 from "../../images/Videoveg2-1.m4v"
import "./hero.css"

const Hero = () => {
    return (
        <div className="hero-container">
            <video className="hero-image" alt="Veggy background" src={videomp4} autoPlay muted loop/>
            <section className="hero-container__content-box">
                <h1 className="hero-container__tilte">We Are awesome</h1>
                <p className="hero-container__Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis pariatur tempora eligendi provident rerum voluptatibus nostrum porro placeat sunt!</p>
            </section>
            
        </div>
            
     );
}
 
export default Hero;