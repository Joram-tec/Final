let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let income = parseFloat(localStorage.getItem('income')) || 0;


const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const remainingBudgetElement = document.getElementById('remaining-budget');
const expenseDetailsList = document.getElementById('expense-details');

function calculateTotalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}

function displayExpenseDetails() {
    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.category}: $${expense.amount.toFixed(2)}`;
        expenseDetailsList.appendChild(listItem);
    });
}


function updateReport(){
    const totalExpenses = calculateTotalExpenses();
    const surplusDeficit = income - totalExpenses;

    totalIncomeElement.textContent = `$${income.toFixed(2)}`;
    totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
    remainingBudgetElement.textContent = `$${surplusDeficit.toFixed(2)}`;
}


updateReport();
displayExpenseDetails();

function calculateTotalExpenses() {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
}


function displayExpenseDetails() {
    

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.category}: $${expense.amount.toFixed(2)}`;
        expenseDetailsList.appendChild(listItem);
    });
}

function updateReport() {
    const totalExpenses = calculateTotalExpenses();
    const surplusDeficit = income - totalExpenses;

    totalIncomeElement.textContent = `$${income.toFixed(2)}`;
    totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
    remainingBudgetElement.textContent = `$${surplusDeficit.toFixed(2)}`;
}


updateReport();
displayExpenseDetails();

