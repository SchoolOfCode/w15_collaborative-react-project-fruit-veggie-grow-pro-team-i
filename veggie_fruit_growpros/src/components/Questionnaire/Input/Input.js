const Input = () => {
    // Changing display of select element
    let variable = "none";

    return ( 
        <div>
            <h4>{"What is your name?"}</h4>
            <input type={"text"}></input>
            <select style={{display: variable}}>
                <option value="optionOne">Option 1</option>
                <option value="optionTwo">Option 2</option>
                <option value="optionThree">Option 3</option>
                <option value="optionFour">Option 4</option>
            </select>
        </div>
     );
}
 
export default Input;