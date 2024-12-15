const express = require('express');
const path = require('path');
const app = express();

// Đảm bảo thư mục public được cấu hình chính xác
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình EJS làm view engine và chỉ định thư mục views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'project', 'views')); // Đảm bảo đường dẫn chính xác

// Dữ liệu mẫu sản phẩm
const products = [
    { id: 1, name: 'Sản phẩm A', price: '100.000 VND', image: '/images/product1.jpg' },
    { id: 2, name: 'Sản phẩm B', price: '200.000 VND', image: '/images/product2.jpg' },
    { id: 3, name: 'Sản phẩm C', price: '300.000 VND', image: '/images/product3.jpg' },
];

// Trang chủ: Hiển thị danh sách sản phẩm
app.get('/', (req, res) => {
    res.render('index', { products });
});

// Xem chi tiết sản phẩm
app.get('/product/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (product) {
        res.render('product', { product });
    } else {
        res.status(404).send('Sản phẩm không tồn tại!');
    }
});

// Lắng nghe port
const port = 3000;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
