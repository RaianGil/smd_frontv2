import React from "react"

const PopRangeLabel = (props:any) => (
    <div className={props.class}>
        <label className="form-label">{props.title}</label>
        <input type="range" className="form-range" min="0.5" max="100" step="0.5" id={props.name}/>
    </div>
)

export default PopRangeLabel