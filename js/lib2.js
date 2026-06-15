document.addEventListener("DOMContentLoaded", function () {
    
    // Nhắm chọn tất cả các nút "Xem Chi Tiết" trên trang
    const detailButtons = document.querySelectorAll('.btn-detail');

    // Lặp qua từng nút để cài đặt sự kiện click
    detailButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            
            // Ngăn chặn hành động tải lại trang hoặc nhảy lên đầu trang do thẻ href="#" gây ra
            event.preventDefault();

            // Trích xuất tên sản phẩm từ thuộc tính 'data-product' của nút được nhấn
            const productName = this.getAttribute('data-product');

            // Hiển thị thông báo (Bạn có thể phát triển thêm thành mở Modal Bootstrap tại đây)
            if (productName) {
                alert(`Hệ thống đang tải thông tin chi tiết cho: ${productName}`);
            } else {
                alert("Đang tải chi tiết sản phẩm...");
            }
        });
    });
});