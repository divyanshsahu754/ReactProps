import "./card.css"

export function Card(props){
    function handleClick(){
        alert("Thanks for selecting us")
    }

    return(
        <div className="container">
            
            <img
             src={props.img} alt={props.imgalt}/>
             
            <h3>{props.designation}</h3>
            <strong>{props.name}</strong>
            <p><em>{props.description}</em></p>
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <button onClick={handleClick}>BUY Courses</button>
        </div>



    );
}