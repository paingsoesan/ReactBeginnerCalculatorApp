function Btn(){
    const clickHandler = () => console.log("Mouse over");
    
    return (
        <button onMouseOver={clickHandler}>
            CLick me
            </button>
    )
}

export default Btn;