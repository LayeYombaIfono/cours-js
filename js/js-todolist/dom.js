

export const alertErreur = (error) => {
    const container = document.querySelector('#container');
    const alert = document.createElement('div');
    alert.classList.add('alert-danger');
    alert.innerText = `Une erreur du serveur est survenue : ${error}`;

   container.prepend(alert);
}
