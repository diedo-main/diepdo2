(() => {
  const projects = Array.isArray(window.MINI_PROJECTS) ? window.MINI_PROJECTS : [];

  const dom = {
    appShell: document.getElementById("app-shell"),
    searchForm: document.getElementById("search-form"),
    searchInput: document.getElementById("search-input"),
    resultsSection: document.getElementById("results-section"),
    cardsGrid: document.getElementById("cards-grid"),
    emptyState: document.getElementById("empty-state"),
    viewerDialog: document.getElementById("viewer-dialog"),
    viewerTitle: document.getElementById("viewer-title"),
    viewerOpenTab: document.getElementById("viewer-open-tab"),
    viewerIframe: document.getElementById("viewer-iframe"),
    btnCloseViewer: document.getElementById("btn-close-viewer")
  };

  // Tự động co giãn tỷ lệ khung iframe 1100x720 vừa khít chiều rộng Card lớn
  const previewResizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const width = entry.contentRect.width;
      if (width > 0) {
        const scale = (width / 1100).toFixed(4);
        entry.target.style.setProperty("--iframe-scale", scale);
      }
    }
  });

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function filterProjects(query) {
    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((proj) => {
      const haystack = [
        proj.title,
        proj.subtitle,
        proj.folder,
        proj.description,
        ...(proj.tags || [])
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderCards(query) {
    const matched = filterProjects(query);
    previewResizeObserver.disconnect();

    dom.appShell.classList.remove("is-initial");
    dom.appShell.classList.add("has-searched");
    dom.resultsSection.hidden = false;

    if (matched.length === 0) {
      dom.cardsGrid.innerHTML = "";
      dom.emptyState.hidden = false;
      return;
    }

    dom.emptyState.hidden = true;

    dom.cardsGrid.innerHTML = matched
      .map(
        (proj) => `
        <div class="card-container">
          <article class="project-card" data-project-id="${escapeHtml(proj.id)}">
            <div class="card-preview-shell">
              <div class="card-iframe-scaler">
                <iframe
                  class="card-iframe"
                  src="${escapeHtml(proj.entry)}"
                  title="${escapeHtml(proj.title)}"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            <footer class="card-footer">
              <h2 class="card-title" title="${escapeHtml(proj.title)}">${escapeHtml(proj.title)}</h2>
              <button
                type="button"
                class="expand-btn"
                data-action="expand"
                data-id="${escapeHtml(proj.id)}"
              >
                Phóng to ↗
              </button>
            </footer>
          </article>
        </div>
      `
      )
      .join("");

    dom.cardsGrid.querySelectorAll(".card-preview-shell").forEach((shell) => {
      previewResizeObserver.observe(shell);
    });
  }

  function openViewer(projectId) {
    const proj = projects.find((p) => p.id === projectId);
    if (!proj) return;

    dom.viewerTitle.textContent = proj.title;
    dom.viewerOpenTab.href = proj.entry;
    dom.viewerIframe.src = proj.entry;
    dom.viewerDialog.showModal();
  }

  function closeViewer() {
    dom.viewerDialog.close();
    dom.viewerIframe.src = "about:blank";
  }

  function bindEvents() {
    // Chỉ hiển thị dự án khi nhấn Enter trong ô tìm kiếm
    dom.searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      renderCards(dom.searchInput.value);
    });

    dom.cardsGrid.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action='expand']");
      if (!btn) return;
      openViewer(btn.getAttribute("data-id"));
    });

    dom.btnCloseViewer.addEventListener("click", closeViewer);

    dom.viewerDialog.addEventListener("click", (e) => {
      if (e.target === dom.viewerDialog) {
        closeViewer();
      }
    });
  }

  bindEvents();
})();
