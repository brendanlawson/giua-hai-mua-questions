const questions = [
  { id: "small-joy", set: "nhe-nhang", tag: "mở chuyện", text: "Một điều nhỏ xíu làm cậu vui cả ngày là gì?", type: "text", hint: "viết ngắn thôi", book: "How to Know a Person" },
  { id: "seen", set: "nhe-nhang", tag: "được nhìn thấy", text: "Một người làm gì thì cậu thấy họ thật sự để ý đến mình?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Nhớ điều mình từng kể", "Hỏi tiếp một câu", "Để ý cảm xúc", "Không vội phán xét", "Có mặt đúng lúc"] },
  { id: "curious", set: "nhe-nhang", tag: "tò mò", text: "Dạo này, phần nào trong cuộc sống của cậu đáng để người khác hỏi thêm?", type: "text", hint: "viết theo cách của cậu", book: "How to Know a Person" },
  { id: "good-conversation", set: "nhe-nhang", tag: "nói chuyện", text: "Một cuộc nói chuyện thế nào thì khiến cậu muốn nói tiếp?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Có tiếng cười", "Được hỏi thật lòng", "Không bị ngắt lời", "Nói được chuyện sâu hơn", "Thoải mái im lặng"] },
  { id: "current-mood", set: "nhe-nhang", tag: "hôm nay", text: "Dạo này cậu đang mong điều gì nhất?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Một kỳ nghỉ", "Một cuộc gặp", "Một tin vui", "Có thêm thời gian", "Chưa biết nữa"] },
  { id: "recent-learning", set: "nhe-nhang", tag: "hiểu mình", text: "Gần đây cậu mới nhận ra điều gì về chính mình?", type: "text", hint: "một câu cũng được", book: "How to Know a Person" },
  { id: "good-day", set: "nhe-nhang", tag: "một ngày tốt", text: "Một ngày bình thường thế nào thì cậu thấy mình sống đúng nhịp?", type: "multiple", hint: "chọn một hoặc nhiều", book: "The Art of Loving", options: ["Có thời gian cho mình", "Làm được việc có ý nghĩa", "Gặp người mình quý", "Được nghỉ ngơi", "Có một điều bất ngờ"] },
  { id: "free-time", set: "nhe-nhang", tag: "rảnh rỗi", text: "Nếu có một buổi rảnh hoàn toàn, cậu muốn dùng nó thế nào?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Đi dạo", "Xem phim", "Nghe nhạc", "Ăn món mình thích", "Ở nhà thật yên"] },
  { id: "today-story", set: "nhe-nhang", tag: "chuyện hôm nay", text: "Hôm nay có chuyện gì cậu muốn kể nhưng chưa ai hỏi không?", type: "text", hint: "một câu cũng được", book: "How to Know a Person" },
  { id: "return-place", set: "nhe-nhang", tag: "địa điểm", text: "Có quán hoặc chỗ nào cậu hay muốn quay lại không?", type: "text", hint: "viết tên chỗ đó", book: "How to Know a Person" },
  { id: "two-hours", set: "nhe-nhang", tag: "hai tiếng", text: "Nếu chỉ có hai tiếng rảnh cùng nhau, cậu muốn làm gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Đi ăn", "Đi dạo", "Ngồi nói chuyện", "Xem một thứ gì đó", "Cứ đi rồi tính"] },

  { id: "color", set: "so-thich", tag: "màu sắc", text: "Thấy món đồ màu gì là cậu hay nhìn thêm một cái?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Xanh lá", "Xanh dương", "Tím / hồng", "Đỏ / vàng", "Trắng / đen"] },
  { id: "food", set: "so-thich", tag: "món ăn", text: "Hôm nay được chọn món mình mê, cậu chọn gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Mì cay", "Cơm nhà", "Bún / phở", "Đồ nướng", "Đồ ăn vặt"] },
  { id: "drink", set: "so-thich", tag: "đồ uống", text: "Ghé quán quen, cậu hay gọi nước gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Trà trái cây", "Trà sữa", "Cà phê", "Nước chanh", "Nước lọc"] },
  { id: "comfort-food", set: "so-thich", tag: "món ruột", text: "Lúc cần được dỗ dành, cậu hay muốn ăn gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "The Art of Loving", options: ["Món quen", "Món nóng", "Đồ ngọt", "Đồ ăn vặt", "Không muốn ăn gì"] },
  { id: "music-now", set: "so-thich", tag: "âm thanh", text: "Dạo này bài hát nào cứ tự chạy trong đầu cậu?", type: "text", hint: "viết tên bài hoặc ca sĩ", book: "How to Know a Person" },
  { id: "taste-change", set: "so-thich", tag: "thay đổi", text: "Có sở thích nào của cậu đã đổi khác theo thời gian không?", type: "text", hint: "kể ngắn thôi", book: "The Art of Loving" },
  { id: "small-pride", set: "so-thich", tag: "tự hào", text: "Một điều cậu làm được mà ít người biết là gì?", type: "text", hint: "không cần quá lớn", book: "How to Know a Person" },
  { id: "new-try", set: "so-thich", tag: "thử điều mới", text: "Nếu rủ cậu thử một điều mới, điều gì nghe có vẻ hợp?", type: "multiple", hint: "chọn một hoặc nhiều", book: "The Art of Loving", options: ["Món ăn mới", "Một nơi chưa đi", "Một bộ phim", "Một hoạt động", "Cứ để bất ngờ"] },

  { id: "message-rhythm", set: "nhip-rieng", tag: "liên lạc", text: "Một ngày bình thường, nhắn nhau bao nhiêu thì vừa?", type: "multiple", hint: "chọn một hoặc nhiều", book: "Attached", options: ["Lâu lâu một tin", "Sáng hoặc tối", "Vài lần trong ngày", "Có chuyện là nhắn", "Tùy hôm"] },
  { id: "care-when-tired", set: "nhip-rieng", tag: "nạp năng lượng", text: "Sau một ngày dài, cậu thường làm gì để lấy lại năng lượng?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Ngủ một giấc", "Ăn món thích", "Nghe nhạc", "Đi dạo", "Ở yên một mình"] },
  { id: "new-topic", set: "nhip-rieng", tag: "bắt chuyện", text: "Mới quen, cậu dễ nói về điều gì hơn?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Món ăn", "Phim / nhạc", "Ngày hôm nay", "Điều mình nghĩ", "Chuyện linh tinh"] },
  { id: "tiny-stories", set: "nhip-rieng", tag: "liên lạc", text: "Có chuyện nhỏ vui vui, cậu thích kể lúc nào?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Kể ngay lúc đó", "Để dành kể một lượt", "Khi người kia hỏi", "Đăng story trước", "Tùy chuyện"] },
  { id: "plan-style", set: "nhip-rieng", tag: "hẹn trước", text: "Rủ đi chơi, cậu thích bất ngờ hay hẹn trước?", type: "multiple", hint: "chọn một hoặc nhiều", book: "Attached", options: ["Rảnh thì rủ luôn", "Báo trước một hôm", "Hẹn trước vài ngày", "Tùy cuộc hẹn", "Để người kia chọn"] },
  { id: "try-new", set: "nhip-rieng", tag: "khám phá", text: "Mở thực đơn ra, cậu hay gọi món quen hay món mới?", type: "multiple", hint: "chọn một hoặc nhiều", book: "The Art of Loving", options: ["Món ruột", "Món đang thèm", "Món người kia chọn", "Món chưa thử", "Tùy tâm trạng"] },
  { id: "conversation", set: "nhip-rieng", tag: "tâm tình", text: "Nếu có nửa tiếng nói chuyện, cậu muốn dành cho điều gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Chuyện vui hôm nay", "Món ăn / chỗ đi", "Phim / nhạc", "Một chuyện có ý nghĩa", "Cứ nói linh tinh"] },
  { id: "first-meet", set: "nhip-rieng", tag: "gặp nhau", text: "Nếu gặp nhau lần đầu, cậu muốn bắt đầu bằng việc gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "Hold Me Tight", options: ["Đi uống gì đó", "Đi dạo", "Ăn một món ngon", "Làm một việc vui", "Cứ gặp rồi tính"] },

  { id: "care-language", set: "quan-tam", tag: "quan tâm", text: "Cậu thường nhận ra ai đó quan tâm mình qua điều gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "The Art of Loving", options: ["Nhớ điều tớ kể", "Chủ động hỏi han", "Để ý chuyện nhỏ", "Có mặt đúng lúc", "Nói thẳng ra"] },
  { id: "follow-up", set: "quan-tam", tag: "hỏi han", text: "Nếu cậu kể đang vướng chuyện, tớ nên làm gì sau đó?", type: "multiple", hint: "chọn một hoặc nhiều", book: "Nonviolent Communication", options: ["Đợi tớ kể tiếp", "Hỏi thăm sau đó", "Đưa một lời khuyên", "Chỉ cần nghe", "Làm tớ cười"] },
  { id: "boundary", set: "quan-tam", tag: "nhẹ thôi", text: "Lúc cần nghỉ, cậu thường thích ở đâu hoặc làm gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "How to Know a Person", options: ["Ở nhà", "Đi dạo", "Nghe nhạc", "Xem gì đó", "Ra ngoài ăn"] },
  { id: "ask-direct", set: "quan-tam", tag: "lời rủ", text: "Khi rủ cậu đi đâu, cậu thích người kia nói thế nào?", type: "multiple", hint: "chọn một hoặc nhiều", book: "Nonviolent Communication", options: ["Nói thẳng địa điểm", "Đưa vài lựa chọn", "Rủ bất ngờ", "Hẹn trước", "Cứ hỏi lúc đó"] },
  { id: "misunderstanding", set: "quan-tam", tag: "nhắn tin", text: "Nếu đang bận chưa trả lời được, cậu thường thích làm gì?", type: "multiple", hint: "chọn một hoặc nhiều", book: "Attached", options: ["Báo trước một câu", "Để lát trả lời", "Trả lời nhanh rồi làm tiếp", "Tắt thông báo", "Tùy việc"] },
];

const state = { selected: new Set(), filter: "all", custom: [] };
const grid = document.querySelector("#question-grid");
const selectedCount = document.querySelector("#selected-count");
const sendCount = document.querySelector("#send-count");
const allCount = document.querySelector("#all-count");
const customForm = document.querySelector("#custom-form");
const customText = document.querySelector("#custom-text");

function getSelectedQuestions() {
  return [...questions, ...state.custom].filter((q) => state.selected.has(q.id));
}

function persist() {
  localStorage.setItem("giua-hai-mua-builder", JSON.stringify({ selected: [...state.selected], custom: state.custom, title: document.querySelector("#title-input").value }));
  const count = state.selected.size;
  selectedCount.textContent = count;
  sendCount.textContent = `${count} câu đã chọn`;
}

function render() {
  const visible = [...questions, ...state.custom].filter((q) => state.filter === "all" || q.set === state.filter);
  grid.innerHTML = visible.map((q) => `<button class="question-card ${state.selected.has(q.id) ? "selected" : ""}" data-id="${q.id}" type="button"><div class="card-top"><span class="tag">${q.tag}</span><span class="choose">✓</span></div><h3>${q.text}</h3><small>${q.type === "text" ? "gõ câu trả lời" : "nhiều lựa chọn"} · ${q.hint}</small><span class="book-source">gợi từ · ${q.book || "câu của cậu"}</span></button>`).join("");
  grid.querySelectorAll(".question-card").forEach((card) => card.addEventListener("click", () => { const id = card.dataset.id; if (state.selected.has(id)) state.selected.delete(id); else state.selected.add(id); persist(); render(); }));
  persist();
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem("giua-hai-mua-builder") || "null");
    if (!saved) return;
    state.custom = saved.custom || [];
    const validIds = new Set([...questions, ...state.custom].map((q) => q.id));
    state.selected = new Set((saved.selected || []).filter((id) => validIds.has(id)));
    if (saved.title) document.querySelector("#title-input").value = saved.title;
  } catch (_) {}
}

document.querySelectorAll(".set-button").forEach((button) => button.addEventListener("click", () => {
  document.querySelectorAll(".set-button").forEach((b) => b.classList.remove("active"));
  button.classList.add("active"); state.filter = button.dataset.filter; render();
}));
document.querySelector("#clear-btn").addEventListener("click", () => { state.selected.clear(); persist(); render(); });
document.querySelector("#add-custom-btn").addEventListener("click", () => { customForm.classList.toggle("hidden"); if (!customForm.classList.contains("hidden")) customText.focus(); });
customText.addEventListener("input", () => { document.querySelector("#custom-length").textContent = `${customText.value.length} / 140`; });
document.querySelector("#save-custom-btn").addEventListener("click", () => {
  const text = customText.value.trim(); if (!text) return;
  const q = { id: `custom-${Date.now()}`, set: "custom", tag: "câu của cậu", text, type: "text", hint: "viết ngắn thôi" };
  state.custom.push(q); state.selected.add(q.id); customText.value = ""; document.querySelector("#custom-length").textContent = "0 / 140"; customForm.classList.add("hidden"); render();
});
document.querySelector("#title-input").addEventListener("input", persist);

function makeShareUrl() {
  const payload = { title: document.querySelector("#title-input").value.trim() || "Một bài hỏi nhỏ", questions: getSelectedQuestions() };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  return `${location.origin}${location.pathname}#answer=${encoded}`;
}

function showPreview() {
  const picked = getSelectedQuestions();
  if (!picked.length) { document.querySelector("#selected-count").scrollIntoView({ behavior: "smooth", block: "center" }); return; }
  document.querySelector("#preview-title").textContent = document.querySelector("#title-input").value.trim() || "Một bài hỏi nhỏ";
  document.querySelector("#preview-list").innerHTML = picked.map((q, i) => `<div class="preview-item"><span class="preview-number">${String(i + 1).padStart(2, "0")}</span><p>${q.text}</p><span class="preview-type">${q.type === "text" ? "gõ câu trả lời" : "nhiều lựa chọn"}</span></div>`).join("");
  document.querySelector("#share-url").textContent = makeShareUrl();
  document.querySelector("#preview-section").classList.remove("hidden");
  document.querySelector("#preview-section").scrollIntoView({ behavior: "smooth", block: "start" });
}
document.querySelector("#preview-btn").addEventListener("click", showPreview);
document.querySelector("#edit-btn").addEventListener("click", () => document.querySelector("#builder").scrollIntoView({ behavior: "smooth" }));
document.querySelector("#copy-link-btn").addEventListener("click", async () => { const url = makeShareUrl(); try { await navigator.clipboard.writeText(url); document.querySelector("#copy-toast").textContent = "Đã sao chép. Gửi link này cho Hoài qua Messenger nhé."; } catch (_) { document.querySelector("#copy-toast").textContent = url; } });

function answerMode(payload) {
  document.body.classList.add("answer-mode");
  document.querySelector("#top").innerHTML = `<section class="answer-wrap wrap"><div class="eyebrow">một bài hỏi từ người muốn hiểu cậu hơn</div><h1>${payload.title || "Một bài hỏi nhỏ"}</h1><p class="hero-copy">Cậu cứ chọn nhanh điều đúng với mình. Có câu nào muốn nói theo cách riêng thì gõ thêm nhé.</p><form id="answer-form" class="answer-form"></form></section>`;
  const form = document.querySelector("#answer-form");
  form.innerHTML = payload.questions.map((q, i) => `<div class="answer-card"><div class="answer-index">${String(i + 1).padStart(2, "0")} · ${q.tag}</div><h2>${q.text}</h2>${q.type === "text" ? `<textarea name="q-${i}" rows="3" placeholder="Cậu muốn nói gì?" required></textarea>` : `<div class="answer-options">${(q.options || ["Điều quen thuộc", "Một điều mới", "Tùy hôm đó", "Muốn kể thêm"]).map((option) => `<label><input type="checkbox" name="q-${i}" value="${option}" /> <span>${option}</span></label>`).join("")}</div>`}</div>`).join("") + `<button class="primary-button wide" type="submit">gửi câu trả lời</button><p class="answer-footnote">Câu trả lời được gom thành một gói nhỏ để cậu gửi lại người tạo bài.</p>`;
  form.addEventListener("submit", (event) => { event.preventDefault(); const formData = new FormData(form); const answers = payload.questions.map((q, i) => ({ question: q.text, answer: q.type === "text" ? formData.get(`q-${i}`) : formData.getAll(`q-${i}`).join(", ") })); const result = `Bài: ${payload.title}\n\n${answers.map((a, i) => `${i + 1}. ${a.question}\n→ ${a.answer || "(chưa trả lời)"}`).join("\n\n")}`; form.innerHTML = `<div class="submitted"><div class="eyebrow">đã xong rồi</div><h2>Gửi gói trả lời này<br /><em>về cho người tạo bài</em></h2><textarea id="answer-result" rows="12">${result}</textarea><button id="copy-answers" class="primary-button wide" type="button">sao chép câu trả lời</button><p class="answer-footnote">Cậu chỉ cần dán gói này vào Messenger là xong.</p></div>`; document.querySelector("#copy-answers").addEventListener("click", async () => { await navigator.clipboard.writeText(result); document.querySelector(".submitted .answer-footnote").textContent = "Đã sao chép. Gửi cho người tạo bài nhé."; }); });
}

function maybeAnswerMode() { const hash = location.hash; if (!hash.startsWith("#answer=")) return; try { const payload = JSON.parse(decodeURIComponent(escape(atob(hash.slice(8))))); answerMode(payload); } catch (_) {} }
load(); allCount.textContent = String(questions.length + state.custom.length).padStart(2, "0"); render(); maybeAnswerMode();
