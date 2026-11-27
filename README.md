# Giữa hai mùa · tạo câu hỏi

Một trang tĩnh để chọn, sắp xếp và chia sẻ những câu hỏi nhẹ nhàng giữa hai người mới quen.

## Lưu dữ liệu

- Bản tạo câu hỏi tự lưu trong `localStorage` của trình duyệt.
- Link gửi Hoài chứa danh sách câu hỏi được mã hóa trong URL, nên không cần backend để bắt đầu.
- Sau khi trả lời, Hoài có thể sao chép gói câu trả lời và dán lại qua Messenger.

Đây là cơ chế v1 không thu thập dữ liệu lên máy chủ. Khi muốn tự động gửi về email/webhook của người tạo bài, chỉ cần nối thêm một endpoint riêng ở bước sau.
