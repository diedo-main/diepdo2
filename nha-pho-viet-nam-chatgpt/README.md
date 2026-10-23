# Góc phố nhỏ — Nhà phố Việt Nam 3 tầng

Phiên bản CodePen lấy cảm hứng từ chủ đề **City Life — Day & Night — Pure CSS** của josetxu: https://codepen.io/josetxu/pen/poKbEjG

Toàn bộ mã vẽ lại từ đầu, không sao chép CSS gốc.

## Cách đưa lên CodePen

1. Mở https://codepen.io/pen/
2. Dán nội dung `index.html` vào HTML.
3. Dán nội dung `style.css` vào CSS.
4. JS để trống hoặc dán `script.js` (không bắt buộc).
5. CSS preprocessor chọn **None**. Không cần CDN, thư viện hay hình ảnh.

Để chạy trên máy, mở `preview.html` bằng trình duyệt.

## Tương tác

- Nút **Ban ngày / Ban đêm** ở góc phải dưới.
- Bầu trời, đèn cửa sổ, ánh sáng và cây chuyển màu theo chế độ.
- Hỗ trợ màn hình nhỏ, `prefers-reduced-motion` và thao tác bàn phím qua nút checkbox.

## Thay đổi dễ nhất

- Màu mặt tiền: `--facade` trong `.scene`.
- Màu cây: `--leaf`, `--leaf-light`, `--leaf-deep`.
- Vị trí / kích thước nhà: `.house`.
- Vị trí / kích thước cây: `.tree`.
- Thời lượng chuyển đổi ngày/đêm: các giá trị `transition` trong `style.css`.
