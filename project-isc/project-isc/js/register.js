    document.getElementById("registerForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;

        console.log("Username: ", username);
        console.log("Password: ", password);

        if (username && password) {
            const user = {
                username: username,
                password: password,
            };

            // Mendapatkan data pengguna dari localStorage
            let users = JSON.parse(localStorage.getItem("users")) || [];
            console.log("Existing users: ", users);

            // Tambahkan pengguna baru ke dalam array users
            users.push(user);

            // Simpan kembali array users ke localStorage
            localStorage.setItem("users", JSON.stringify(users));
            console.log("Updated users: ", users);

            alert("Registrasi berhasil! Silakan login.");
            window.location.href = "login.html";
        } else {
            alert("Mohon isi semua field!");
        }
    });