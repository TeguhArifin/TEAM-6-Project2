document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mendapatkan data pengguna dari localStorage
    const storedUser  = localStorage.getItem('user');

    if (storedUser ) {
        const user = JSON.parse(storedUser );
        // Memeriksa apakah username dan password sesuai
        if (username === user.username && password === user.password) {
            alert('Login berhasil!');
            // Redirect ke halaman lain jika login berhasil
            window.location.href = 'main.html'; // Ganti dengan halaman yang sesuai
        } else {
            alert('Username atau password salah!');
        }
    } else {
        alert('Belum ada pengguna terdaftar. Silakan daftar terlebih dahulu.');
    }
});