document.addEventListener('DOMContentLoaded', () => {
    const formHandlers = [
        { formId: 'utilities-form', storageKey: 'utilities' },
        { formId: 'entertainment-form', storageKey: 'entertainment' },
        { formId: 'medical-form', storageKey: 'medical' },
        { formId: 'family-form', storageKey: 'family' },
        { formId: 'other-expenses-form', storageKey: 'others' }
    ];

    formHandlers.forEach(({ formId, storageKey }) => {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const type = form.querySelector('select').value;
            const amount = parseFloat(form.querySelector('input').value);

            if (!amount || isNaN(amount)) {
                alert("Please enter a valid amount");
                return;
            }

            const expensesData = JSON.parse(localStorage.getItem(storageKey)) || [];
            expensesData.push({ type, amount });
            localStorage.setItem(storageKey, JSON.stringify(expensesData));

            alert(`${storageKey.charAt(0).toUpperCase() + storageKey.slice(1)} expense added successfully!`);
            form.reset();
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    const formHandlers = [
        { formId: 'utilities-form', storageKey: 'utilities' },
        { formId: 'entertainment-form', storageKey: 'entertainment' },
        { formId: 'medical-form', storageKey: 'medical' },
        { formId: 'family-form', storageKey: 'family' },
        { formId: 'other-expenses-form', storageKey: 'others' }
    ];
 
    const incomeForm = document.getElementById('income-form');
    if (incomeForm) {
        incomeForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const incomeType = document.getElementById('income-type').value;
            const incomeAmount = parseFloat(incomeForm.querySelector('input').value);

            if (!incomeAmount || isNaN(incomeAmount)) {
                alert("Please enter a valid income amount.");
                return;
            }

            const incomeData = JSON.parse(localStorage.getItem('income')) || [];
            incomeData.push({ incomeType, incomeAmount });
            localStorage.setItem('income', JSON.stringify(incomeData));

            alert(`${incomeType.charAt(0).toUpperCase() + incomeType.slice(1)} income added successfully!`);
            incomeForm.reset();
        });
    }

    
    formHandlers.forEach(({ formId, storageKey }) => {
        const form = document.getElementById(formId);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            const type = form.querySelector('select').value;
            const amount = parseFloat(form.querySelector('input').value);

            if (!amount || isNaN(amount)) {
                alert("Please enter a valid expense amount.");
                return;
            }

            const expensesData = JSON.parse(localStorage.getItem(storageKey)) || [];
            expensesData.push({ type, amount });
            localStorage.setItem(storageKey, JSON.stringify(expensesData));

            alert(`${storageKey.charAt(0).toUpperCase() + storageKey.slice(1)} expense added successfully!`);
            form.reset();
        });
    });

   
    function calculateTotalIncomeExpenses() {
        
        let totalIncome = 0;
        const incomeData = JSON.parse(localStorage.getItem('income')) || [];
        incomeData.forEach(item => totalIncome += item.incomeAmount);

        
        let totalExpenses = 0;
        const expenseCategories = ['utilities', 'entertainment', 'medical', 'family', 'others'];
        expenseCategories.forEach(category => {
            const expenseData = JSON.parse(localStorage.getItem(category)) || [];
            expenseData.forEach(expense => totalExpenses += expense.amount);
        });

        const remainingBalance = totalIncome - totalExpenses;

        
        document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
        document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
        document.getElementById('remaining-budget').textContent = `$${remainingBalance.toFixed(2)}`;

        return { totalIncome, totalExpenses, remainingBalance };
    }

    calculateTotalIncomeExpenses();
});

document.addEventListener('DOMContentLoaded', () => {
    
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {

        localStorage.removeItem('income');

        localStorage.removeItem('utilities');

        localStorage.removeItem('entertainment');

        localStorage.removeItem('medical');

        localStorage.removeItem('family');

        localStorage.removeItem('others');

        
        document.getElementById('total-income').textContent = '$0.00';

        document.getElementById('total-expenses').textContent = '$0.00';

        document.getElementById('remaining-budget').textContent = '$0.00';

        
        const forms = document.querySelectorAll('form');
        forms.forEach(form => form.reset());

        
        alert('All data has been reset!');
    });

    
});


