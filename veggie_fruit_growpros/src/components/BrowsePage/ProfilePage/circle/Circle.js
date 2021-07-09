const Circle = ({name1,title}) => {
  return ( 
    <div className="Profile__Circle__container">
      <h4 >{title}</h4>

      <section className={"profile__Cirlce"}>
        <h5 >
        {name1}
        </h5>
      </section>
    </div>
   );
}
 
export default Circle;