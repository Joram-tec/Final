document.addEventListener("DOMContentLoaded", () => {
    const expenseForm = document.getElementById("expense-form");
    const expenseList = document.getElementById("expense-list");

    expenseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("expense-name").value;
        const amount = document.getElementById("expense-amount").value;
        
        if (name && amount) {
            const li = document.createElement("li");
            li.textContent = `${name}: $${amount}`;
            expenseList.appendChild(li);
        }
    });
});

document.querySelectorAll('.dropdown-header').forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    });
});