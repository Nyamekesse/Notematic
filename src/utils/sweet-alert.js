import Swal from 'sweetalert2';

export async function toast(type, msg) {
  return Swal.fire({
    position: 'top-end',
    icon: type,
    showConfirmButton: false,
    timer: 3000,
    toast: true,
    title: msg,
  });
}
