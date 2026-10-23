# Mini HTML & CSS Showcase — Phòng Trưng Bày Dự Án Nhỏ

Website tổng hợp và trưng bày

---

## Tính Năng Nổi Bật

- **Khởi đầu tối giản (Search-First):** Ban đầu không hiển thị tiêu đề hay danh sách dàn trải, chỉ có duy nhất ô tìm kiếm phát sáng nhẹ nhàng giữa màn hình tối.
- **Nhấn Enter để mở kệ:**
  - Nhấn `Enter` khi ô tìm kiếm để trống: Bung toàn bộ dự án trên lưới 2 Card lớn.
  - Nhập từ khoá và nhấn `Enter`: Lọc và hiển thị các dự án khớp tên.
- **Khung cảnh lớn & Tương tác 100% không bị che:**
  - Lưới hiển thị 2 Card lớn trên màn hình máy tính, giúp khung cảnh rộng rãi và sắc nét.
  - Không có bất kỳ nút hay nhãn nổi nào đè lên trên `<iframe>`, bạn có thể bấm trực tiếp vào công tắc Ngày/Đêm hoặc thanh thời gian bên trong tác phẩm mà không bị cản trở.
- **Chân thẻ tinh gọn:** Mỗi thẻ chỉ hiển thị duy nhất **Tên dự án** và nút nhỏ **`Phóng to ↗`** để xem toàn màn hình khi cần.
- **Thuần HTML / CSS / JS (Zero-dependency):** Mở trực tiếp file `index.html` là chạy ngay, không cần cài đặt Node.js hay bất kỳ thư viện bên ngoài nào.

---

## Cấu Trúc Thư Mục

```text
mini-all/
├── index.html                           # Giao diện chính (Khởi đầu Ambient + Lưới 2 Card lớn)
├── style.css                            # CSS Dark Mode, hiệu ứng Aurora Glow, Container Queries
├── app.js                               # Logic tìm kiếm, Enter trigger, tự động scale iframe
├── projects.js                          # Danh sách cấu hình các mini-project
├── README.md                            # Tài liệu hướng dẫn sử dụng
│
├── nha-pho-viet-name-chatgpt-updated/   # Nhà phố 3 tầng cửa nhôm, xe máy ngày & dắt chó đêm
├── nha-pho-nh-viet-nam-gemini/          # Đồng quê Việt Nam diorama (Gemini)
├── nha-pho-viet-nam-chatgpt/            # Nhà phố 3 tầng nguyên bản (ChatGPT)
├── con-ngo-viet-nam-24h-v2.1/           # Con ngõ Việt Nam 24h (Timeline trượt 00:00–23:00)
└── con-ngo-viet-nam-24h-v2.2-updated/   # Con ngõ Việt Nam 24h (Input thời gian trên đầu)
```

---

## Cách Chạy & Sử Dụng

1. **Mở website:** Mở trực tiếp file `index.html` bằng trình duyệt web bất kỳ (Chrome, Edge, Firefox, Brave...).
2. **Khám phá dự án:**
   - Khi ở màn hình ban đầu, nhấn phím **`Enter ↵`** để hiển thị tất cả các mini-project.
   - Để tìm kiếm, nhập từ khoá (ví dụ: `ngõ`, `đồng quê`, `nhà phố`) rồi nhấn **`Enter ↵`**.
3. **Tương tác:** Rê chuột vào khung cảnh của từng Card và click trực tiếp vào các nút/thanh trượt bên trong để trải nghiệm hiệu ứng.
4. **Phóng to:** Bấm nút **`Phóng to ↗`** ở góc dưới bên phải mỗi card để mở khung xem toàn màn hình, hoặc bấm **`Mở tab mới ↗`** để mở file HTML riêng biệt.

---

## Cách Thêm Mini-Project Mới Vào Bộ Sưu Tập

Mỗi khi bạn tạo hoặc tải về một thư mục mini-project mới:

### Bước 1: Đặt thư mục vào `mini-all/`
Sao chép toàn bộ thư mục dự án của bạn vào thư mục `mini-all/` (đảm bảo bên trong có file HTML chạy độc lập, ví dụ `index.html` hoặc `preview.html`).

### Bước 2: Khai báo vào `projects.js`
Mở file `projects.js` và thêm 1 object vào mảng `window.MINI_PROJECTS`:

```javascript
{
  id: "ten-du-an-moi",
  title: "Tên Dự Án Hiển Thị",
  folder: "ten-thu-muc",
  entry: "./ten-thu-muc/index.html", // hoặc ./ten-thu-muc/preview.html
  tags: ["Pure CSS", "Interactive"]
},
```

### Bước 3: Lưu và tải lại trang
Lưu file `projects.js`, tải lại trang `index.html` trên trình duyệt và nhấn `Enter` để ngắm dự án mới!

---

## Danh Sách 5 Dự Án Hiện Có

| STT | Tên Dự Án | Đường Dẫn Chạy | Đặc Điểm |
| :---: | :--- | :--- | :--- |
| 1 | **Con Ngõ Việt Nam — 24 Giờ (v2.2)** | `./con-ngo-viet-nam-24h-v2.2-updated/nha-pho-viet-codepen/preview.html` | Input chọn giờ trên đầu, hoạt cảnh xe máy & người dắt chó |
| 2 | **Con Ngõ Việt Nam — 24 Giờ (v2.1)** | `./con-ngo-viet-nam-24h-v2.1/con-ngo-viet-nam-v2.1/preview.html` | Thanh trượt timeline 00:00–23:00 chuyển 6 thời điểm |
| 3 | **Góc Phố Nhỏ — Nhà Phố 3 Tầng (Bản nâng cấp)** | `./nha-pho-viet-name-chatgpt-updated/preview.html` | Nhà số 18, xe máy chạy ban ngày, ban đêm dắt chó |
| 4 | **Đồng Quê Việt Nam — Ngày & Đêm** | `./nha-pho-nh-viet-nam-gemini/index.html` | Cắt lớp Isometric, hiệu ứng sao băng & đom đóm |
| 5 | **Góc Phố Nhỏ — Nhà Phố 3 Tầng (Bản gốc)** | `./nha-pho-viet-nam-chatgpt/preview.html` | Nhà phố 3 tầng bên cây xanh, nút Ngày/Đêm góc phải |

