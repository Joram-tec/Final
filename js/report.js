document.addEventListener('DOMContentLoaded', () => {
    const expenseCategories = [
        'utilities', 'entertainment', 'medical', 'family', 'others'
    ];

    let totalIncome = 0;
    let totalExpenses = 0;
    let expenseDetails = [];

    expenseCategories.forEach(category => {
        const expensesData = JSON.parse(localStorage.getItem(category)) || [];
        expensesData.forEach(expense => {
            totalExpenses += expense.amount;
            expenseDetails.push(`${expense.type}: $${expense.amount.toFixed(2)}`);
        });
    });

    const incomeData = JSON.parse(localStorage.getItem('income')) || [];
    incomeData.forEach(item => totalIncome += item.incomeAmount);

    const remainingBudget = totalIncome - totalExpenses;

    
    document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
    document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
    document.getElementById('remaining-budget').textContent = `$${remainingBudget.toFixed(2)}`;

    
    const expenseDetailsList = document.getElementById('expense-details');
    expenseDetails.forEach(detail => {
        const listItem = document.createElement('li');
        listItem.textContent = detail;
        expenseDetailsList.appendChild(listItem);
    });
});

