var presupuesto = 0;
let globalSum = 0;
let balance = 0;

// FUNCION PARA OBTENER E INSERTAR EL PRESUPUESTO
function InsertBudget(){
    // Obtener el valor del Input "Presupuesto"
    presupuesto = document.getElementById('budget').value;
    // Insertarlo a la derecha en "Presupuesto"
    document.getElementById('budget-dato').innerText = presupuesto;
    document.getElementById('auxiliar').value = presupuesto;
    sessionStorage.setItem('auxiliar',presupuesto);
}
document.getElementById('btn-calcular').addEventListener('click',InsertBudget);

// Almacenar presupuesto
presupuestoFinal = Number(presupuesto);

// FUNCION PARA CREAR LISTA DE GASTOS Y SUMAR VALORES
function ExpensesList(){
    // Obtener valores de gastos
    let expensesName = document.getElementById('expenses-name');
    let expensesValue = document.getElementById('expenses-value');
    // Convertir valores en la lista de gastos
    let LI = document.createElement('LI');
    let textoLista = document.createTextNode(expensesName.value + ' ' + expensesValue.value);
    // insertar registros como lista
    LI.appendChild(textoLista);
    document.getElementById('lista').appendChild(LI);
    // Obtener valores del input "Monto de su gasto"
    let expensesOkValue = document.getElementById('expenses-value').value;
    globalSum = globalSum + Number(expensesOkValue);
    // Borrar campos para poder ingresar un gasto nuevo
    expensesName.value=null;
    expensesValue.value=null;  
}
document.getElementById('expenses-btn').addEventListener('click',ExpensesList);

// FUNCION PARA INSERTAR SUMA DE GASTOS DEBAJO DEL ICONO
function InsertExpenses(){
    // Insertar a la arriba en "Gastos"
    document.getElementById('expenses-dato').innerText = globalSum;
    document.getElementById('expenses-dato').style.color='red';
}
document.getElementById('expenses-btn').addEventListener('click',InsertExpenses);

// FUNCION PARA OBTENER EL BALANCE
function InsertBalance(){
    balance = Number(sessionStorage.getItem('auxiliar')) - Number(globalSum);
    document.getElementById('balance-dato').innerText = balance;
    sessionStorage.setItem('balance',balance);
    sessionStorage.getItem('balance');
    if (balance<0){
        document.getElementById('balance-dato').style.color='red';
    }else { 
        document.getElementById('balance-dato').style.color='green';
    }
}
document.getElementById('expenses-btn').addEventListener('click',InsertBalance);

// document.getElementById('expenses-dato').style.color=red;
