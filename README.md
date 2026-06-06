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

## Tự động cập nhật lên GitHub khi sửa file (tại máy bạn)

Bạn có thể chạy một script PowerShell để tự động commit và push mỗi khi thay đổi file trong thư mục dự án.

Chạy watcher (phiên bản đơn giản):

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\auto_push.ps1
```

Để chạy ẩn dưới nền:

```powershell
Start-Process powershell -ArgumentList '-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "'$(Resolve-Path .\scripts\auto_push.ps1)'"'
```

Script sẽ bỏ qua thư mục `.git` và `.github` và tự commit với message dạng `Auto-update: <timestamp>`.

## Deploy tự động lên Cloudflare Pages (CI)

Để deploy tự động lên Cloudflare Pages khi push lên `main`, làm theo các bước sau:

1. Tạo Project Pages trên Cloudflare (hoặc dùng tên dự án bạn muốn). Lưu `Project name` và `Account ID`.
2. Tạo API Token trên Cloudflare với quyền `Pages` (Edit) hoặc sử dụng template `Edit Cloudflare Pages`.
3. Thêm 3 secret vào GitHub repository: `CF_API_TOKEN`, `CF_ACCOUNT_ID`, `CF_PROJECT_NAME`.
	- GitHub → Settings → Secrets → New repository secret
4. Workflow đã có sẵn: `.github/workflows/deploy-cloudflare-pages.yml` — nó sẽ chạy khi bạn push lên `main`.

Lưu ý: `directory` mặc định trong workflow là `./`. Nếu bạn build vào `public`, hãy sửa `directory` tương ứng.

