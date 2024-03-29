# Tugas Sesi 7

Digital Skola API Automation using Supertest
### API Automation
API Automation merupakan pengujian API secara otomasi menggunakan tools
automation, sama hal nya seperti pengujian
API secara manual yang bertujuan untuk
memastikan bahwa API berfungsi dengan
benar sesuai dengan spesifikasi yang
telah ditetapkan, memvalidasi
fitur-fiturnya, dan meningkatkan efisiensi
proses pengujian.

### SuperTest
SuperTest adalah library pada Node.js yang membantu Developer/QA menguji
API. SuperTest dapat digunakan secara standalone library atau dengan
framework testing JavaScript seperti Mocha atau Jest.

### API Automation (PUT)
PUT digunakan untuk memperbarui atau mengganti data yang sudah ada,
penggunaan nya hampir sama seperti post. Create async function PUT then call
in the test script

### API Automation (PATCH)
PUT digunakan untuk memperbarui sebagian data, mirip dengan PUT tapi
perbedaannya adalah PATCH digunakan untuk mengirimkan data parsial atau
sebagian dari data yang ingin diperbarui, sedangkan PUT digunakan untuk
mengirimkan data yang lengkap atau seluruh representasi dari data yang ingin
diperbarui.

### API Automation (DELETE)
DELETE digunakan untuk menghapus data, create async function DELETE then
call on the test script

### How to run this automation

1. install dependencies using
   `npm install`
2. run command for run API Automation
   `npm run test:mocha`

### Mochawesome Report

1. Generated report shall be restore under folder `report`
2. Open report that has name `pass_[date]-mochawesome-report.html`

### Sample report
![alt text](image.png)