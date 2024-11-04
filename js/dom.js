let age = window.prompt('Quel age avez-vous ?');
const hello = document.querySelector('.hello');
function createElementsDom() {
    let p = document.createElement('p');
    
     if (age >= 18) {
     p.innerText = `Vous etes majeur vous avez ${age} ans`
        p.style.color = 'green';
    } else {
        p.innerText = `Vous etes mineur vous avez ${age} ans`
        p.style.color = 'red';
    }
    
    hello.appendChild(p);

}
createElementsDom();
