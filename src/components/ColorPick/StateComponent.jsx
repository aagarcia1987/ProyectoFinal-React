import { useState } from "react"
import './StateComponent.css';

export default function StateComponent(){
const [ color, setColor ] = useState("#000000");  

return (
<div className="box-container">
    <p>Selecciona tu color: 
    <span className="color-preview" style={{ backgroundColor: color }}></span>
    </p>
    <div className="button-container">
    <button className="button" onClick={ () => setColor("#ffffffff") }>Blanco</button>
    <button className="button" onClick={ () => setColor("#000000ff") }>Negro</button>
    <button className="button" onClick={ () => setColor("#ff0000ff") }>Rojo</button>
    </div>
</div>
)
}