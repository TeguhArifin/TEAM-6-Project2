document.getElementById("logoutButton").addEventListener("click", function () {
  // Menghapus data pengguna dari localStorage
  localStorage.removeItem("loggedInUser");
  alert("Anda telah berhasil logout.");
  // Redirect ke halaman login setelah logout
  window.location.href = "main.html";
});
