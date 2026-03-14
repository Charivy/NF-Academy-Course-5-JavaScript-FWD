class Kendaraan{
    constructor(jenis, platNomor){
        this.jenis = jenis;
        this.platNomor = platNomor;;
    }
}

class Pelanggan{
    constructor(nama, asal, nomorTelepon){
        this.nama = nama;
        this.asal = asal;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }
    sewaKendaraan(kendaraan){
    this.kendaraanDisewa = kendaraan;
    console.log(`[Transaksi] ${this.nama} berhasil menyewa ${kendaraan.jenis} (${kendaraan.platNomor})`);
}
}

class sistemTransportasi{
    constructor(){
        this.daftarPelanggan = [];
    }
    tambahPelanggan(pelanggan){
    this.daftarPelanggan.push(pelanggan);
    }
    tampilkanPenyewaAktif(){
        console.log(`Daftar Pelanggan yang Menyewa`);
        const penyewaAktif = this.daftarPelanggan.filter(p => p.kendaraanDisewa !== null);

        if (penyewaAktif === 0){
            console.log(`Tidak ada pelanggan yang sedang menyewa`);
            return;
        }
        penyewaAktif.forEach((p, index) => {
            console.log(`${index + 1}. Nama: ${p.nama} | Asal: ${p.asal} | Telp: ${p.nomorTelepon} | Kendaraan: ${p.kendaraanDisewa.jenis} (${p.kendaraanDisewa.platNomor})`);
        });
    }
}

// Eksekusi

const sistemSewa = new sistemTransportasi();

const mobil1 = new Kendaraan("Mobil Avanza", "B 217 AN");
const motor1 = new Kendaraan("Motor Yamaha NMAX", "AG 2134 L");

const pelanggan1 = new Pelanggan("Andi", "082134567123", "Surabaya");
const pelanggan2 = new Pelanggan("Clara", "0895673298412", "Semarang");

sistemSewa.tambahPelanggan(pelanggan1);
sistemSewa.tambahPelanggan(pelanggan2);

pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

sistemSewa.tampilkanPenyewaAktif();
