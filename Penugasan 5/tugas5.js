let produkList = [
    {id: 1, nama: "Laptop", harga: 12000000},
    {id: 2, nama: "Smartphone", harga: 5000000},
    {id: 3, nama: "Smartwatch", harga: 1700000},
    {id: 4, nama: "Headphone", harga: 800000},
    {id: 5, nama: "Keyboard", harga: 500000}
]

const eventHandler = {
    events: {},
    on: function(eventName, callback){
        this.events[eventName] = callback;
    },
    emit: function(eventName, data){
        if (this.events[eventName]){
            this.events[eventName](data);
        }
    }
}

eventHandler.on('produkDitambah', (msg) => console.log(`[Event Log] ${msg}`));
eventHandler.on('produkDihapus', (msg) => console.log(`[Event Log] ${msg}`));

function tambahProduk(id, nama, harga){
    const produkBaru = {id, nama, harga};
    produkList = [...produkList, produkBaru];
    eventHandler.emit('produkDitambah', `Produk '${nama}' berhasil ditambahkan kedalam sistem.`);
}

function hapusProduk(...ids){
    produkList = produkList.filter(produk => !ids.includes(produk.id));
    eventHandler.emit('produkDihapus', `Produk dengan ID [${ids.join(', ')}] berhasil dihapus dari sistem`);
}

function tampilkanProduk(){
    console.log("Daftar Semua Produk");
    produkList.forEach(produk => {
        const {id, nama, harga} = produk;
        console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga.toLocaleString('id-ID')}`);
    })
}

tampilkanProduk();

tambahProduk(6, "Tablet", 7000000);
tampilkanProduk();

hapusProduk(2);
tampilkanProduk();