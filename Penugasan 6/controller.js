import users from "./data.js";
const index = () => {
    console.log("Daftar Data User");
    users.map((user, i) => {
        console.log(`${i + 1}. Nama: ${user.nama} | Umur: ${user.umur} | Alamat: ${user.alamat} | Email: ${user.email}`);
    });
};

const store = (user) => {
    users.push(user);
    console.log(`Berhasil menambahkan data atas nama: ${user.nama}`);
};

const destroy = () => {
    const removed = users.pop();
    if(removed) {
        console.log(`Berhasil menghapus data terakhir: ${removed.nama}`);
    } else {
        console.log("Data kosong, tidak ada yang bisa dihapus");
    }
    
};

export {index, store, destroy};