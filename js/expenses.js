
let expenses = [];
let income = 0;


const incomeForm = document.getElementById('income-form');
const incomeInput = incomeForm.querySelector('input');
const incomeSelect = incomeForm.querySelector('select');

const expenseForms = document.querySelectorAll('form');
const expenseList = document.getElementById('expense-list');
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const remainingBudgetElement = document.getElementById('remaining-budget');
const resetButton = document.getElementById('reset-button');


function updateSummary() {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const surplusDeficit = income - totalExpenses;

    totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
    remainingBudgetElement.textContent = `$${surplusDeficit.toFixed(2)}`;
}

function displayExpenses() {
    expenseList.innerHTML = ''; 
    expenses.forEach((expense, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${expense.category}</strong>: $${expense.amount.toFixed(2)} 
            <button class="remove-expense" data-index="${index}">Remove</button>
        `;
        expenseList.appendChild(listItem);
    });


    const removeButtons = document.querySelectorAll('.remove-expense');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.getAttribute('data-index');
            expenses.splice(index, 1); 
            displayExpenses(); 
            updateSummary(); 
        });
    });
}


incomeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const amount = parseFloat(incomeInput.value);
    if (!isNaN(amount) && amount > 0) {
        income = amount;
        totalIncomeElement.textContent = `$${income.toFixed(2)}`;
        updateSummary();
    }
    incomeInput.value = '';
});


expenseForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const category = e.target.querySelector('select').value;
        const amount = parseFloat(e.target.querySelector('input').value);

        if (!isNaN(amount) && amount > 0) {
            expenses.push({ category, amount });
            displayExpenses(); 
            updateSummary(); 
        }

        
        e.target.querySelector('input').value = '';
    });
});


resetButton.addEventListener('click', () => {
    expenses = [];
    income = 0;
    totalIncomeElement.textContent = '$0.00';
    totalExpensesElement.textContent = '$0.00';
    remainingBudgetElement.textContent = '$0.00';
    displayExpenses(); 
});

displayExpenses();
updateSummary();