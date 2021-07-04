import vegImagePlaceholder from "../components/images/vegimageplaceholder.jpg"

const Hero = () => {
    return (
        <div className="hero-image__container">
        <img className="hero-image" alt="Veggy background" src={vegImagePlaceholder}/>
        </div>
     );
}
 
export default Hero;