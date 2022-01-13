import React from "react"
const PopInputLabel = (props:any) => (
    <div className={props.class}>
        <label htmlFor=''>{props.title}</label>
        <input type={props.type} className='form-control' id={props.name}/>
    </div>
)

export default PopInputLabel