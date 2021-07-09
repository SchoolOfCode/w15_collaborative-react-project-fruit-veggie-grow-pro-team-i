import vegImagePlaceholder from "../../images/vegimageplaceholder.jpg"
import "./hero.css"

const Hero = () => {
    return (
        <div className="hero-container">
            <img className="hero-image" alt="Veggy background" src={vegImagePlaceholder}/>
            <section className="hero-container__content-box">
                <h1 className="hero-container__tilte">We Are awesome</h1>
                <p className="hero-container__Paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit reiciendis pariatur tempora eligendi provident rerum voluptatibus nostrum porro placeat sunt!</p>
            </section>
            
        </div>
            
     );
}
 
export default Hero;