import withReactContent from "sweetalert2-react-content"
import Swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-dark/dark.css';

const PopConfirm = async () => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
        customClass: {
            confirmButton: 'btn btn-success ms-3',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false,
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
            MySwal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            MySwal.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        
      })
}

export default PopConfirm