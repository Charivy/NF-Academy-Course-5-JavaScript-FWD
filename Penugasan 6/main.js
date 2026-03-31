import {index, store, destroy} from "./controller.js";

// Menampilkan data awal
const main = () => {
    index();

    // Penambahan Data
    console.log("Penambahan Data");
    store({nama: 'Nopal', umur: 46, alamat: 'Jambi', email: 'nopal11@gmail.com'}),
    store({nama: 'Mayesa', umur: 29, alamat: 'Solo', email: 'mayesa12@gmail.com'});
    index();

    // Penghapusan Data
    console.log("Penghapusan Data");
    destroy()
    index();
};

main();