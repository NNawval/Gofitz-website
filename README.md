<a name="readme-top"></a>

<h1 align="center">GOFITZ</h1>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#use-case">Use Case</a></li>
    <li><a href="#database">Database</a></li>
    <li><a href="#deployment">Deployment</a></li>
  </ol>
</details>

## About The Project
Gofitz merupakan web app yang dikembangkan untuk membantu menyelesaikan permasalahan pada sistem reservasi lapangan futsal. Gofitz nantinya akan mempermudah pelanggan dalam melakukan reservasi lapangan futsal dengan menampilkan list harga lapangan, total harga pemesanan, dan jadwal ketersedian setiap lapangan. Gofitz hadir tidak hanya untuk mempermudah pelanggan namun juga untuk mempermudah owner dalam proses pembukuan keuangan bulanan. Kehadiran Gofitz diharapkan dapat meminimalisir terjadinya antrian, reservasi jadwal lapangan yang bertabrakan, dan kesalahan proses pencatatan keuangan. 

Pelanggan yang hendak melakukan reservasi lapangan harus terlebih dahulu login menggunakan email yang ia miliki. Selanjutnya pengguna akan diarahkan ke landing page dan dapat memilih pilihan book pada navigation bar. Setelah itu user dapat meng-input tanggal dan memilih lapangan dan jadwal sesuai kebutuhan pelanggan. Pelanggan tersebut juga dapat melihat riwayat yang telah dilakukan dengan memasuki menu history pada navigation bar . Admin dan owner juga diharuskan untuk login terlebih dahulu untuk dapat menjalankan fitur-fitur yang dimiliki setiap role-nya.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app._
1. Clone the repo
   ```sh
   git clone https://gitlab.informatika.org/k01_g04/if3152-2023-k01-04-gofitz.git
   ```
2. Change directory to the main folder
    ```sh
   cd if3152-2023-k01-04-gofitz
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run to local server
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Use Case
_Below is the list of implemented use cases including PIC and screenshot._

1. UC01 Melihat data lapangan dan ketersediaannya (18221111 Pramaditya Fajri Migfar)

<img src="doc/uc01part1.PNG">
<img src="doc/uc01part2.PNG">

2. UC02 Reservasi online (18221087 Willy Frans Farel Sijabat)

<img src="doc/uc02part1.PNG">
<img src="doc/uc02part2.PNG">

3. UC04 Mengelola data lapangan (18221085 Nalendro N.U.A.R.F)

<img src="doc/uc04part1.PNG">
<img src="doc/uc04part2.PNG">

4. UC05 Reservasi on-site (18221087 Willy Frans Farel Sijabat)

<img src="doc/uc05part1.PNG">

5. UC06 Mengubah data reservasi lapangan (18221087 Willy Frans Farel Sijabat)

<img src="doc/uc06part1.PNG">

6. UC07 Melihat laporan data pemasukan dari reservasi lapangan (18221085 Nalendro N.U.A.R.F)

<img src="doc/uc07part1.PNG">

7. UC08 Memasukkan bukti pembayaran (18221087 Willy Frans Farel Sijabat)

<img src="doc/uc08part1.PNG">

8. UC09 Login (18221057 Danang Ihsan)

<img src="doc/uc09part1.PNG">

9. UC10 Registrasi akun (18221057 Danang Ihsan)

<img src="doc/uc10part1.PNG">

Tampilan Dashboard Customer:

<img src="doc/dashboardcustomer.PNG">

Tampilan Dashboard Admin:

<img src="doc/dashboardadmin.PNG">

Tampilan Dashboard Owner:

<img src="doc/dashboardowner.PNG">

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Database
_Below is the list of implemented database._

1. Tabel Lapangan

| Atribut | Type | 
|---------| ---- |
| id | int |
| namaLapangan | varchar | 
| countBola | int |
| priceLapanganWeekend | int |
| priceLapanganWeekday | int |
| imgScr | varchar | 
| nomorLapangan | int |

2. Tabel Reservasi 

| Atribut | Type |
| ---- | ---|
| id | int |
| namaPemesan | varchar |
| lapanganId | int |
| scheduleBookingStart | timestamp |
| scheduleBookingEnd | timestamp |
| totalHarga | int |
| ssPayment | varchar |

3. Tabel User

| Atribut | Type |
| ---- | ---- |
| id | string |
| username | varchar |
| role | string |
| created_at | timestamp |
| email | string |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Deployment

Website Gofitz: https://gofitzz-willyffs.vercel.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
# Gofitz-website
# Gofitz-website
# Gofitz-website
