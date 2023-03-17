import { BrowserRouter ,Route,Routes } from 'react-router-dom';
import Work from '../Work';

export default function(props){
    function handleCardClick(){
        // 
        console.log("Printed Something");
    }
    return(
    <div className="card" onClick={handleCardClick}>
        <div className="cardbody" >
            <h5 className="card-title" x>{props.title}</h5>
        </div>
    </div>
    )
}