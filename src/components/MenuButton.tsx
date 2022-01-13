import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MenuButton = (props:any) => (
    <div className={props.class}>
        <Link to={props.href}>
            <div className="fbg-1p fsp-1 tp-button" role="button">
                <FontAwesomeIcon icon={props.icon}/>
                <label htmlFor="" className="col-md-12">{props.title}</label>
            </div>
        </Link>
    </div>
)

export default MenuButton