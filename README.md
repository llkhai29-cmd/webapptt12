# webapptt12

Ứng dụng này là site tĩnh (HTML/CSS/JS). Hướng dẫn deploy nhanh lên hosting miễn phí.

Tùy chọn khuyến nghị:
- GitHub Pages (miễn phí, đơn giản)
- Netlify / Vercel (miễn phí cho site tĩnh, CI tự động)

## Deploy lên GitHub Pages
1. Tạo repository mới trên GitHub (ví dụ: `webapptt12`).
2. Trên máy local, khởi tạo git và push:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/webapptt12.git
git push -u origin main
```

3. Actions sẽ tự động chạy và publish lên GitHub Pages khi bạn push lên `main`.

## Deploy nhanh với Netlify (thay thế)
- Đăng nhập Netlify, chọn "New site from Git" và kết nối repo GitHub.
- Hoặc kéo thả thư mục `dist`/root (nếu site tĩnh đơn giản) vào Netlify Drop.

## Lưu ý
- Nếu site của bạn có endpoint server, cần deploy phần server riêng (không áp dụng cho GitHub Pages).