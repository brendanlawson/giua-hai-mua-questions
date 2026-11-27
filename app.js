const questions = [
  { id: "color", set: "so-thich", tag: "màu sắc", text: "Thấy món đồ màu gì là cậu hay nhìn thêm một cái?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Xanh lá", "Xanh dương", "Tím / hồng", "Đỏ / vàng", "Trắng / đen"] },
  { id: "food", set: "so-thich", tag: "món ăn", text: "Hôm nay được chọn món mình mê, cậu chọn gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Mì cay", "Cơm nhà", "Bún / phở", "Đồ nướng", "Đồ ăn vặt"] },
  { id: "drink", set: "so-thich", tag: "đồ uống", text: "Ghé quán quen, cậu hay gọi nước gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Trà trái cây", "Trà sữa", "Cà phê", "Nước chanh", "Nước lọc"] },
  { id: "free-time", set: "so-thich", tag: "rảnh rỗi", text: "Nếu tan làm sớm, cậu thích dùng buổi rảnh để làm gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Đi dạo", "Xem phim", "Chơi game", "Nghe nhạc", "Đi ăn"] },
  { id: "small-joy", set: "nhe-nhang", tag: "mở chuyện", text: "Một điều nhỏ xíu làm cậu vui cả ngày là gì?", type: "text", hint: "viết ngắn thôi" },
  { id: "current-mood", set: "nhe-nhang", tag: "hôm nay", text: "Dạo này cậu đang mong điều gì nhất?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Một kỳ nghỉ", "Một cuộc gặp", "Một tin vui", "Có thêm thời gian", "Chưa biết nữa"] },
  { id: "weekend", set: "nhe-nhang", tag: "cuối tuần", text: "Một buổi rảnh đẹp với cậu thường có gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Ngủ thật lâu", "Đi đâu đó", "Ở nhà thật chill", "Ăn món thích", "Gặp người mình quý"] },
  { id: "first-meet", set: "nhe-nhang", tag: "gặp nhau", text: "Nếu gặp nhau lần đầu, cậu muốn bắt đầu bằng việc gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Đi uống gì đó", "Đi dạo", "Ăn một món ngon", "Làm một việc vui", "Cứ gặp rồi tính"] },
  { id: "message-rhythm", set: "nhip-rieng", tag: "liên lạc", text: "Một ngày bình thường, nhắn nhau bao nhiêu thì vừa?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Lâu lâu một tin", "Sáng hoặc tối", "Vài lần trong ngày", "Có chuyện là nhắn", "Tùy hôm"] },
  { id: "tiny-stories", set: "nhip-rieng", tag: "liên lạc", text: "Có chuyện nhỏ vui vui, cậu thích kể lúc nào?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Kể ngay lúc đó", "Để dành kể một lượt", "Khi người kia hỏi", "Đăng story trước", "Tùy chuyện"] },
  { id: "new-topic", set: "nhip-rieng", tag: "bắt chuyện", text: "Mới quen, cậu dễ nói về điều gì hơn?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Món ăn", "Phim / nhạc", "Ngày hôm nay", "Điều mình nghĩ", "Chuyện linh tinh"] },
  { id: "try-new", set: "nhip-rieng", tag: "khám phá", text: "Mở thực đơn ra, cậu hay gọi món quen hay món mới?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Món ruột", "Món đang thèm", "Món người kia chọn", "Món chưa thử", "Tùy tâm trạng"] },
  { id: "care-when-tired", set: "quan-tam", tag: "hỏi han", text: "Sau một ngày mệt, điều gì khiến cậu dễ chịu hơn?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Cho tớ yên một chút", "Nhắn hỏi một câu", "Gọi nói chuyện", "Gửi đồ ăn", "Rủ đi đâu đó"] },
  { id: "follow-up", set: "quan-tam", tag: "hỏi han", text: "Nếu cậu kể đang vướng chuyện, tớ nên làm gì sau đó?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Đợi tớ kể tiếp", "Hỏi thăm sau đó", "Đưa một lời khuyên", "Chỉ cần nghe", "Làm tớ cười"] },
  { id: "care-language", set: "quan-tam", tag: "quan tâm", text: "Cậu thường nhận ra ai đó quan tâm mình qua điều gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Nhớ điều tớ kể", "Chủ động hỏi han", "Để ý chuyện nhỏ", "Có mặt đúng lúc", "Nói thẳng ra"] },
  { id: "ask-me", set: "quan-tam", tag: "đến lượt cậu", text: "Có điều gì cậu muốn tớ hiểu về cậu sớm hơn không?", type: "text", hint: "viết ngắn thôi" },
  { id: "dream-place", set: "nhe-nhang", tag: "đi đâu", text: "Có chỗ nào cậu muốn đi cùng một người hợp chuyện không?", type: "text", hint: "viết ngắn thôi" },
  { id: "comfort-food", set: "so-thich", tag: "món ruột", text: "Lúc cần được dỗ dành, cậu hay muốn ăn gì?", type: "multiple", hint: "chọn một hoặc nhiều" },
  { id: "music-now", set: "so-thich", tag: "âm thanh", text: "Dạo này bài hát nào cứ tự chạy trong đầu cậu?", type: "text", hint: "viết tên bài hoặc ca sĩ" },
  { id: "plan-style", set: "nhip-rieng", tag: "hẹn trước", text: "Rủ đi chơi, cậu thích bất ngờ hay hẹn trước?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Rảnh thì rủ luôn", "Báo trước một hôm", "Hẹn trước vài ngày", "Tùy cuộc hẹn", "Để người kia chọn"] },
  { id: "conversation", set: "nhip-rieng", tag: "tâm tình", text: "Nếu có nửa tiếng nói chuyện, cậu muốn nói về gì?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Chuyện vui hôm nay", "Món ăn / chỗ đi", "Phim / nhạc", "Một chuyện có ý nghĩa", "Cứ nói linh tinh"] },
  { id: "good-day", set: "quan-tam", tag: "một ngày tốt", text: "Một ngày như thế nào thì cậu thấy mình được quan tâm đúng cách?", type: "text", hint: "viết theo cách của cậu" },
  { id: "boundary", set: "quan-tam", tag: "nhẹ thôi", text: "Khi mệt, cậu muốn người kia ở gần hay cho mình khoảng riêng?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Cho tớ yên", "Nhắn một câu thôi", "Ở cạnh nhưng không cần nói", "Rủ làm việc nhẹ", "Tùy mức mệt"] },
  { id: "curious", set: "nhe-nhang", tag: "tò mò", text: "Điều gì ở một người khiến cậu muốn biết thêm?", type: "multiple", hint: "chọn một hoặc nhiều", options: ["Cách họ đối xử", "Cách họ kể chuyện", "Gu ăn uống", "Một sở thích lạ", "Sự tử tế"] },
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
  grid.innerHTML = visible.map((q) => `<button class="question-card ${state.selected.has(q.id) ? "selected" : ""}" data-id="${q.id}" type="button"><div class="card-top"><span class="tag">${q.tag}</span><span class="choose">✓</span></div><h3>${q.text}</h3><small>${q.type === "text" ? "gõ câu trả lời" : "nhiều lựa chọn"} · ${q.hint}</small></button>`).join("");
  grid.querySelectorAll(".question-card").forEach((card) => card.addEventListener("click", () => { const id = card.dataset.id; if (state.selected.has(id)) state.selected.delete(id); else if (state.selected.size < 12) state.selected.add(id); persist(); render(); }));
  persist();
}

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem("giua-hai-mua-builder") || "null");
    if (!saved) return;
    state.selected = new Set(saved.selected || []);
    state.custom = saved.custom || [];
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
