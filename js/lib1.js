window.onload = function() {
    let danhSachHang = document.querySelectorAll("table tbody tr");
    let tongHoaDon = 0;

    danhSachHang.forEach(hang => {
        let chuoiDonGia = hang.querySelector(".dongia").innerText;
        let chuoiSoLuong = hang.querySelector(".soluong").innerText;
        let donGia = parseInt(chuoiDonGia.replace(/\./g, '')); 
        let soLuong = parseInt(chuoiSoLuong);
        let thanhTien = donGia * soLuong;
        tongHoaDon += thanhTien;
        hang.querySelector(".thanhtien").innerText = thanhTien.toLocaleString('vi-VN');
    });
    document.getElementById("tongThanhToan").innerText = tongHoaDon.toLocaleString('vi-VN');
};