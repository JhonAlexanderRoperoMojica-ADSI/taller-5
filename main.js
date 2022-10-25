addEventListener("DOMContentLoaded", (e) => {
    let form = document.querySelector('#form');
    let suma = 0;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let dato =parseInt(document.querySelector('#dato').value);
        if(dato > 0){
            suma += dato;
        }
        else{
            alert(`porfavor solo ingresar números positivos`);
            document.querySelector('#res').insertAdjacentHTML("beforeend",suma);
        }
        form.reset();
    })

})