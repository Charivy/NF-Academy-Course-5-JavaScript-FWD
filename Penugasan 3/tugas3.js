let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

function tambahProduk(nama, harga, stok) {
    const idBaru = produkToko.length + 1;
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    produkToko.push(produkBaru);
    console.log(`Produk dengan nama "${nama}" berhasil ditambahkan`);
}

function hapusProduk(id){
    const initialLength = produkToko.length;
    produkToko = produkToko.filter(produk => produk.id !== id);

    if(produkToko.length < initialLength) {
        console.log(`Produk dengan ID ${id} berhasil dihapus`);
    } else {
        console.log(`Produk tidak ditemukan`);
    }
}

function tampilkanProduk() {
    console.log(`Daftar Produk Toko`);
    if (produkToko.length === 0) {
        console.log(`Produk Toko Kosong`);
    } else {
        produkToko.forEach((produk, index) => {
            console.log(`${index + 1}. [ID: ${produk.id}] ${produk.nama} - Harga: Rp${produk.harga} - Stok saat ini: ${produk.stok}`);
        });
    }
}

// Contoh Pemanggilan
tampilkanProduk();

tambahProduk("Handphone", 7000000, 2);
tampilkanProduk();

hapusProduk(1);
tampilkanProduk();