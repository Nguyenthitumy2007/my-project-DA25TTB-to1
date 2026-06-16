function createItem(obj) {
    const productList = document.getElementById("product-list");
    productList.innerHTML += `
        <div class="col">
            <div class="card product-item h-100">
                <div class="ratio ratio-1x1 product-image">
                    <img src="${obj.image}" alt="${obj.name}" class="card-img-top">
                </div>
                <div class="card-body product-info d-flex flex-column">
                    <h4 class="card-title">${obj.name}</h4>
                    <div class="product-price">Giá: ${obj.price}</div>
                    <p class="card-text product-description flex-grow-1">
                        ${obj.info}
                    </p>
                    <a href="${obj.link}" class="btn btn-cyan w-100 btn-detail" data-product="${obj.name}">Xem Chi Tiết</a>
                </div>
            </div>
        </div>`;
}

function AllItem(objArray) {
    let i = 0;
    while (i < objArray.length) {
        createItem(objArray[i]);
        i++;
    }
}


const products = [
    {
        name: "Cẩm Tú Cầu",
        price: "350.000đ/cây",
        image: "../assets/images/cam-tucau.jpg",
        info: "Hoa cẩm tú cầu (Hydrangea) là loài hoa thân gỗ, có nguồn gốc từ Đông Á, mọc thành từng cụm lớn, có hình cầu, gồm nhiều cánh nhỏ xếp khít, thường nở rộ vào mùa hè...",
        link: "#"
    },
    {
        name: "Linh Lan",
        price: "250.000đ/bó",
        image: "../assets/images/linhlan.jpg",
        info: "Hoa linh lan (hoa lan chuông hay hoa chuông trắng) là thực vật thân thảo sống lâu năm, thường mọc ở các thung lũng sâu, dưới bóng râm hoặc ven bờ suối.",
        link: "#"
    }
];

AllItem(products);