/* Ejercicio 1 */
const btn_sum_mul = document.getElementById('btn_sum_mul');
const p_sum_mul = document.getElementById('p_sum_mul');

btn_sum_mul.addEventListener('click', sumaYmul);

function sumaYmul(){
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    let suma = n1+n2;
    let producto = n1*n2;
    alert(`La suma es ${suma} y la multiplicación es ${producto}`);
    p_sum_mul.innerText =`La suma es ${suma} y la multiplicación es ${producto}`;
}


/* Ejercicio 2 */
const btn_percent = document.getElementById('btn_percent');
const p_percent = document.getElementById('p_percent');

btn_percent.addEventListener('click', percent);

function percent(){
    //parseInt solo acepta números enteros
    //parseFloat acepta decimales
    const n3 = parseInt(document.getElementById('n3').value);
    let percent20 = n3*20/100;
    alert(`El 20% de ${n3} es ${percent20}`); // toFixed() define la cantidad de decimales
    p_percent.innerText =`El 20% de ${n3} es ${percent20}`;
}


/* Ejercicio 3 */
const btn_cm_mm = document.getElementById('btn_cm_mm');
const p_cm_mm = document.getElementById('p_cm_mm');

btn_cm_mm.addEventListener('click', metersTo_cm_mm);

function metersTo_cm_mm(){
    const n4 = parseFloat(document.getElementById('n4').value);
    let cm = n4*100;
    let mm = n4*1000;
    alert(`${n4} es igual a ${cm}cm y ${mm}mm`);
    p_cm_mm.innerText =`${n4} es igual a ${cm}cm y ${mm}mm`;
}


/* Ejercicio 4 */
const btn_area = document.getElementById('btn_area');
const p_area = document.getElementById('p_area');

btn_area.onclick = function(){
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    let area = base*altura/2;
    alert(`El área es ${area.toFixed(2)}`);
    p_area.innerText =`El área es ${area.toFixed(2)}`;
}


/* Ejercicio 5 */
const btn_soles = document.getElementById('btn_soles');
const p_soles = document.getElementById('p_soles');

btn_soles.addEventListener('click', dTo_soles);

function dTo_soles(){
    const dollars = parseFloat(document.getElementById('dollars').value);
    let soles = dollars*3.38;
    alert(`${dollars} dólares es igual a ${soles.toFixed(2)} soles`);
    p_soles.innerText =`${dollars} dólares es igual a ${soles.toFixed(2)} soles`;
}


/* Ejercicio 6 */
const btn_mm = document.getElementById('btn_mm');
const p_mm = document.getElementById('p_mm');

btn_mm.addEventListener('click', pTo_mm);

function pTo_mm(){
    const pulgadas = parseFloat(document.getElementById('pulgadas').value);
    let mm = pulgadas*25.4;
    alert(`${pulgadas} es igual a ${mm.toFixed(3)} mm`);
    p_mm.innerText =`${pulgadas} es igual a ${mm.toFixed(3)} mm`;
}


/* Ejercicio 7 */
const btn_cifras = document.getElementById('btn_cifras');
const p_cifras = document.getElementById('p_cifras');

btn_cifras.addEventListener('click', convertCifras);

function convertCifras(){
    const cifras = parseFloat(document.getElementById('cifras').value);
    let suma = cifras.toString().split('').map(Number).reduce(function (a, b) {
    return (a + b);
    }, 0);
    let exponent = Math.pow(suma, 2);
    alert(`${exponent}`);
    p_cifras.innerText =`${exponent}`;
}


/* Ejercicio 8 */
const btn_d_percent = document.getElementById('btn_d_percent');
const p_d_percent = document.getElementById('p_d_percent');

btn_d_percent.addEventListener('click', monto_percent);

function monto_percent(){
    const dinero = parseFloat(document.getElementById('dinero').value);
    let A = dinero*30/100;
    let B = dinero*20/100;
    let C = dinero*50/100;
    alert(`Al socio A le corresponde S/${A.toFixed(2)}; a B, S/${B.toFixed(2)} y a C, S/${C.toFixed(2)}`);
    p_d_percent.innerText =`Al socio A le corresponde S/${A.toFixed(2)}; a B, S/${B.toFixed(2)} y a C, S/${C.toFixed(2)}`;
}


/* Ejercicio 9 */
const btn_p_final = document.getElementById('btn_p_final');
const p_p_final = document.getElementById('p_p_final');

btn_p_final.addEventListener('click', calcular);

function calcular(){
    const p_base = parseFloat(document.getElementById('p_base').value);
    let IGV = p_base*19/100;
    let p_final = p_base+IGV; //También podría ser el p_base*119/100
    alert(`El IGV es S/${IGV.toFixed(2)} y el precio final es S/${p_final.toFixed(2)}`);
    p_p_final.innerText =`El IGV es S/${IGV.toFixed(2)} y el precio final es S/${p_final.toFixed(2)}`;
}


/* Ejercicio 10 */
const btn_entradas = document.getElementById('btn_entradas');
const p_entradas = document.getElementById('p_entradas');

btn_entradas.addEventListener('click', entradas);

function entradas(){
    const e_g = parseInt(document.getElementById('e_g').value);
    const e_m_65 = parseInt(document.getElementById('e_m_65').value);
    const e_m = parseInt(document.getElementById('e_m').value);
    let e_g_v = e_g*150;
    let e_m_65_v = e_m_65*50;
    let e_m_v = e_m*80;
    let e_total = e_g_v+e_m_65_v+e_m_v;

    alert(`Se recaudó S/${e_g_v} por entrada general, S/${e_m_65_v} por mayores de 65 y S/${e_m_v} por menores de edad. 
    En total se recaudó S/${e_total}`);
    p_entradas.innerText =`Se recaudó S/${e_g_v} por entrada general, S/${e_m_65_v} por mayores de 65 y S/${e_m_v} por menores de edad. 
    En total se recaudó S/${e_total}`;
}