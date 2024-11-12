document.getElementById('logoutButton').addEventListener('click', function() {
    // Menghapus data pengguna dari localStorage
    localStorage.removeItem('user');
    alert('Anda telah berhasil logout.');
    // Redirect ke halaman login setelah logout
    window.location.href = 'login.html';
});