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
        link: "../hoacamtucau.html"

    },
    {
        name: "Linh Lan",
        price: "250.000đ/bó",
        image: "../assets/images/linhlan.jpg",
        info: "Hoa linh lan (hoa lan chuông hay hoa chuông trắng) là thực vật thân thảo sống lâu năm, thường mọc ở các thung lũng sâu, dưới bóng râm hoặc ven bờ suối.",
        link: "../hoalinhlan.html"
    }

    {
        name: "Tulip",
        price: "9.000đ/bông",
        image: "../assets/images/tulip.jpg",
        info: "Hoa tulip đỏ : thể hiện tình yêu nồng cháy không gì có thể cưỡng lại.Hoa tulip vàng : tượng trưng cho tình yêu rực rỡ, cháy bỏng: “Nụ cười em rạng rỡ như nắng mai”.Hoa tulip trắng : biểu trưng cho sự sang trọng, tinh khiết và thiên đường. Hoa tulip tím : biểu tượng của hoàng gia và sự giàu có.Hoa tulip hồng : thể hiện tình cảm chân thành và sự săn sóc. Hoa tulip đen : tượng trưng cho tình yêu bất diệt. Hoa tulip xanh : bình yên và sự chân thành. Hoa tulip cam : tràn đầy sức sống, niềm đam mê và lòng nhiệt tình. ",
        link: "../hoatulip.html"
    }

    {
        name: "Hồng Trắng",
        price: "350.000đ/bó",
        image: "../assets/images/hongTrang.jpg",
        info: " Hồng này là biểu tượng cho sự trân trọng và tinh tế. Hơn nữa, khi tặng cho người bạn thầm yêu một bó Hồng trắng, chính là bạn đang bày tỏ mong muốn một mối quan hệ, cũng như thể hiện niềm hy vọng vào tương lai của cả hai.",
        link: "../hongtrang.html"
    }
];

AllItem(products);