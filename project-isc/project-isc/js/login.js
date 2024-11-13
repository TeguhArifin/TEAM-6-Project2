document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mendapatkan data pengguna dari localStorage
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
        const users = JSON.parse(storedUsers);
        // Memeriksa apakah username dan password sesuai dengan salah satu pengguna
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert('Login berhasil!');
            // Redirect ke halaman lain jika login berhasil
            window.location.href = 'logout.html'; // Ganti dengan halaman yang sesuai
        } else {
            alert('Username atau password salah!');
        }
    } else {
        alert('Belum ada pengguna terdaftar. Silakan daftar terlebih dahulu.');
    }
});

// Menghapus event listener tambahan yang menyebabkan duplikasi
