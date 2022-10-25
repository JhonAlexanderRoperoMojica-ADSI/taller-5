addEventListener("DOMContentLoaded", (e) => {
    let suma = 0,des;
    let form = document.querySelector("#form");
    document.querySelector("#numero1").readOnly = false;
    document.querySelector("#boton").disabled = false;
    let resultado = document.querySelector("#resultado");
    let deshabilitar = () => {
        document.querySelector("#numero1").readOnly = true;
        document.querySelector("#boton").disabled = true;
    }
    let descuento = () => {
        (suma>10000)
            ? (des =suma-(suma*0.10))
            (resultado.insertAdjacentHTML("beforebegin", `Su descuentoes del 10% y su total a pagar fue: ${des}`))
            : (resultado.insertAdjacentHTML("beforebegin", `${suma}`));

    }
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let num1 = parseInt(document.querySelector("#numero1").value);
        form.reset();
        (num1 > 0)
            ? (suma += num1)
            : (num1 < 0) ?
                (alert("No puedes ingresar un numero menor"))
                : (deshabilitar())
                    (descuento());
    })
})