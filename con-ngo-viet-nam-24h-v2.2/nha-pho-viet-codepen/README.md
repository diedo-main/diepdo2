# Con ngõ Việt Nam — 24 giờ (v2.1)

Một miniature Việt Nam dựng bằng **HTML + CSS + JavaScript thuần**, tiếp tục từ bản nhà phố 3 tầng. Giữ nguyên ngôi nhà số **18**, cửa nhôm **2 cánh màu bạc**, cây lớn và hoạt cảnh.

## CodePen
1. Mở https://codepen.io/pen/
2. Dán `index.html` vào tab HTML.
3. Dán `style.css` vào tab CSS (preprocessor: None).
4. Dán `script.js` vào tab JS (**bắt buộc ở v2.1**).
5. Không cần framework, CDN, hình ảnh hoặc thư viện ngoài.

Có thể mở `preview.html` trực tiếp để thử offline. Đây là file độc lập đã nhúng sẵn CSS và JS.

## Tương tác
- Thanh giờ `00:00–23:00` đổi 6 cảnh: bình minh, sáng, trưa, chiều, tối, khuya.
- Nút chọn nhanh theo thời điểm.
- Ban ngày: xe máy chạy ngang. Trưa: ngõ vắng. Buổi tối: người dắt chó qua ngõ. Đêm khuya: yên tĩnh.
- Trời đổi màu, trăng sao, đèn cửa sổ, đèn hiên và cây thay đổi theo thời điểm.
- Responsive, nút bàn phím; giảm chuyển động nếu hệ điều hành bật `prefers-reduced-motion`.

## Cấu trúc
- `index.html`: mô hình nhà, cây, nhân vật và thanh giờ.
- `style.css`: dựng CSS Art, animation, responsive, palette 6 thời điểm.
- `script.js`: thời gian → `scene.dataset.phase` và cập nhật thông tin.
- `preview.html`: bản chạy độc lập cho trình duyệt.
- `screenshots/`: ảnh mẫu các trạng thái sau khi kiểm thử.

## Gợi ý nâng cấp
v2.2: thêm người quét sân, hàng rong, trẻ đi xe đạp. v2.3: mưa, play tự chạy 24h, âm thanh tùy chọn.

Tham khảo ý tưởng CodePen [City Life — Day & Night — Pure CSS](https://codepen.io/josetxu/pen/poKbEjG); toàn bộ code của dự án này được dựng riêng.


## Update 2026-10-23-b
- Bỏ timeline phía dưới.
- Thêm input thời gian ở trên đầu.
- Sửa hướng người dắt chó.
- Hạ xe máy xuống dưới lòng đường.
