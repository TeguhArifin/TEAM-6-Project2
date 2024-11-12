document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    // Simulasi registrasi dan menyimpan data pengguna ke localStorage
    if (username && password) {
        const user = {
            username: username,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registrasi berhasil! Silakan login.');
        // Redirect ke halaman login setelah registrasi
        window.location.href = 'login.html';
    } else {
        alert('Mohon isi semua field!');
    }
});