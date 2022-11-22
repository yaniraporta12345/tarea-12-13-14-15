function primero () {
    let hombres = document.getElementById("_1_hombres")
    let mujeres = document.getElementById("_1_mujeres")

    hombres = hombres.value ||0
    mujeres = mujeres.value ||0

    hombres = parseFloat(hombres)
    mujeres = parseFloat(mujeres)

    el_100_porciento = hombres + mujeres

    porcentaje_hombres = (hombres/el_100_porciento)*100
    porcentaje_mujeres = (mujeres/el_100_porciento)*100

    document.getElementById("_1_1").innerText = `el porcentaje de hombres es de ${porcentaje_hombres}%`
    document.getElementById("_1_2").innerText = `el porcentaje de mujeres es de ${porcentaje_mujeres}%`

}
function segundo(){
    let monto_inversion = document.getElementById("_2_monto")

    monto_inversion = monto_inversion.value ||0
    monto_inversion = parseFloat(monto_inversion)

    let avenida_la_mar = monto_inversion*0.35
    let avenida_abancay = monto_inversion*0.25
    let avenida_28_de_julio = monto_inversion*0.10
    let avenida_aviacion = monto_inversion*0.15
    let avenida_tacna = monto_inversion*0.15

    document.getElementById("_2_1").innerText = ` Avenida La Mar - 35% del monto es : ${avenida_la_mar} soles`
    document.getElementById("_2_2").innerText = `Avenida Abancay - 25% del monto es : ${avenida_abancay} soles`
    document.getElementById("_2_3").innerText = `Avenida 28 de Julio - 10% del monto  es : ${avenida_28_de_julio} soles`
    document.getElementById("_2_4").innerText = `Avenida Aviación - 15% del monto es : ${avenida_aviacion} soles`
    document.getElementById("_2_5").innerText = `venida Tacna - restante del monto es : ${avenida_tacna} soles`

}
function tercero(){
    let entrada_general = document.getElementById("_3_general").value || 0
    let entrada_mayores = document.getElementById("_3_mayores").value || 0
    let entrada_menores = document.getElementById("_3_memores").value || 0

    entrada_general = parseFloat(entrada_general)
    entrada_mayores = parseFloat(entrada_mayores)
    entrada_menores = parseFloat(entrada_menores)

    let total_entradas = entrada_general+entrada_mayores+entrada_menores

    let precio_general = entrada_general*150
    let precio_mayores = entrada_mayores*50
    let precio_menores = entrada_menores*80

    let total = precio_general+precio_mayores+precio_menores

    document.getElementById("_3_1").innerText = ` se vendieron ${total_entradas} entradas`
    document.getElementById("_3_2").innerText = ` se recaudaron ${precio_general} de soles con las entradas de general`
    document.getElementById("_3_3").innerText = ` se recaudaron ${precio_mayores} de soles con las entradas para mayores de 65 años`
    document.getElementById("_3_4").innerText = ` se recaudaron ${precio_menores} de soles con las entradas para menores de edad`
    document.getElementById("_3_5").innerText = ` con una recaudacion total de ${total} soles`

}


let primerboton = document.getElementById("_1_boton")
primerboton.addEventListener("click",primero)

let segundoboton = document.getElementById("_2_boton")
segundoboton.addEventListener("click",segundo)

let terceroboton = document.getElementById("_3_boton")
terceroboton.addEventListener("click",tercero)