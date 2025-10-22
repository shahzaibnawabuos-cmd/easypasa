// Simple login credentials (in a real app, this would be secure)
const users = {
    'user': 'pass'
};

let balance = 1000;
let transactions = [];

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] === password) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        updateBalance();
        updateTransactions();
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('transfer-btn').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (recipient && amount > 0 && amount <= balance) {
        balance -= amount;
        transactions.push(`Transferred $${amount} to ${recipient}`);
        updateBalance();
        updateTransactions();
        document.getElementById('recipient').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Invalid transfer details or insufficient funds');
    }
});

document.getElementById('logout-btn').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

function updateBalance() {
    document.getElementById('balance-amount').textContent = balance;
}

function updateTransactions() {
    const list = document.getElementById('transaction-list');
    list.innerHTML = '';
    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = transaction;
        list.appendChild(li);
    });
}
