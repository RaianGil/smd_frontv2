import withReactContent from "sweetalert2-react-content"
import Swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-dark/dark.css';

const Lab = async () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        "icon": "error",
        "title": "Oops...",
        "text": "Login Fail!"
      })
}

export default Lab