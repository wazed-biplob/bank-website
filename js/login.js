document.getElementById('btn-submit').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'bank@gmail.com' && password == 123) {
        window.location.href = 'bank.html';
    } else {
        alert('invalid');
    }
})

