/* =============================================================================
 *  Villa Joanna — behaviour
 *  Renders content from content.js, handles language switching, the photo
 *  lightbox, the mobile menu and the map. No build step, no dependencies.
 * ===========================================================================*/
(function () {
  "use strict";

  /* ---------- helpers ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Photo file names in content.js resolve to these folders.
  const fullSrc = (name) => "images/photos/" + name;
  const thumbSrc = (name) => "images/photos/thumb/" + name;

  // Inline icons (inherit the button's text colour via currentColor).
  const ICON_PHONE =
    '<svg class="contact__icon" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>';
  const ICON_WA =
    '<svg class="contact__icon" viewBox="0 0 32 32" width="17" height="17" fill="currentColor" aria-hidden="true"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.1 1.6 5.9L4 29l8.3-1.6c1.7.9 3.6 1.4 5.7 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7.7.7-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.3C5.2 9.9 10 5.2 16 5.2S26.8 9.9 26.8 16 22 24.8 16 24.8zm5.5-7.9c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></svg>';

  // Resolve a dotted key path ("about.body") against an object.
  function resolve(obj, path) {
    return path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);
  }

  /* ---------- language ---------- */
  function pickInitialLang() {
    const saved = localStorage.getItem("vj-lang");
    if (saved && LANGS.includes(saved)) return saved;
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.includes(browser) ? browser : "en";
  }

  let currentLang = pickInitialLang();

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("vj-lang", lang);
    document.documentElement.lang = lang;
    const t = I18N[lang];

    // Simple text/attribute nodes flagged with data-i18n.
    $$("[data-i18n]").forEach((el) => {
      const val = resolve(t, el.getAttribute("data-i18n"));
      if (val == null) return;
      if (el.tagName === "META") el.setAttribute("content", val);
      else el.textContent = val;
    });

    // Highlight the active language button.
    $$(".lang-btn").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.lang === lang)
    );

    renderDynamic(t);
  }

  /* ---------- dynamic sections ---------- */
  function renderDynamic(t) {
    // Hero
    $("#heroLocation").textContent = t.hero.location;
    $("#heroPrice").textContent = PROPERTY.price;
    $("#heroImage").src = fullSrc(PROPERTY.heroImage);

    // Stats
    $("#statsGrid").innerHTML = PROPERTY.stats
      .map(
        (s) => `<div class="stat">
          <span class="stat__value">${s.value}</span>
          <span class="stat__label">${t.stats[s.key] || s.key}</span>
        </div>`
      )
      .join("");

    // About
    $("#aboutImage").src = fullSrc(PROPERTY.aboutImage);
    $("#aboutBody").innerHTML = t.about.body.map((p) => `<p>${p}</p>`).join("");

    // Features
    $("#featuresList").innerHTML = t.features.items
      .map((f) => `<li>${f}</li>`)
      .join("");

    // Location
    $("#locationBody").textContent = t.location.body;
    $("#locationAddress").textContent = t.location.address;
    const { lat, lng } = PROPERTY.coords;
    const d = PROPERTY.mapRadius || 0.01;
    const bbox = [lng - d, lat - d, lng + d, lat + d].join("%2C");
    $("#mapFrame").src =
      `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

    // Contact — one card per person, each with a Call link and a WhatsApp link.
    const msg = encodeURIComponent(t.contact.message || "");
    $("#contactCards").innerHTML = (PROPERTY.contacts || [])
      .map((p) => {
        const tel = p.phone.replace(/[^\d+]/g, ""); // keep digits and leading +
        const wa = p.phone.replace(/[^\d]/g, ""); // digits only for wa.me
        return `<div class="contact__card">
          <span class="contact__name">${p.name}</span>
          <span class="contact__value">${p.phone}</span>
          <span class="contact__actions">
            <a class="contact__btn" href="tel:${tel}">${ICON_PHONE}<span>${t.contact.callLabel}</span></a>
            <a class="contact__btn contact__btn--wa" href="https://wa.me/${wa}?text=${msg}" target="_blank" rel="noopener">${ICON_WA}<span>${t.contact.whatsappLabel}</span></a>
          </span>
        </div>`;
      })
      .join("");

    // Documents
    renderDocuments(t);
  }

  /* ---------- documents ---------- */
  function renderDocuments(t) {
    const docs = PROPERTY.documents || [];
    const section = $("#documents");
    const navLink = $("#navDocuments");
    if (!docs.length) {
      if (section) section.style.display = "none";
      if (navLink) navLink.style.display = "none";
      return;
    }
    if (section) section.style.display = "";
    if (navLink) navLink.style.display = "";
    $("#documentsGrid").innerHTML = docs
      .map((d) => {
        const title = (t.documents.items && t.documents.items[d.key]) || d.key;
        return `<a class="document__card" href="documents/${encodeURI(d.file)}" target="_blank" rel="noopener">
          <span class="document__preview"><img src="documents/previews/${encodeURI(d.preview)}" alt="${title}" loading="lazy" /></span>
          <span class="document__meta">
            <span class="document__title">${title}</span>
            <span class="document__view">${t.documents.view} &rarr;</span>
          </span>
        </a>`;
      })
      .join("");
  }

  /* ---------- gallery + lightbox ---------- */
  let lightboxIndex = 0;

  function renderGallery() {
    $("#galleryGrid").innerHTML = PROPERTY.gallery
      .map(
        (name, i) =>
          `<button class="gallery__item" data-index="${i}" aria-label="Photo ${i + 1}">
            <img src="${thumbSrc(name)}" alt="Villa Joanna — photo ${i + 1}" loading="lazy" />
          </button>`
      )
      .join("");
  }

  function openLightbox(i) {
    lightboxIndex = (i + PROPERTY.gallery.length) % PROPERTY.gallery.length;
    $("#lightboxImg").src = fullSrc(PROPERTY.gallery[lightboxIndex]);
    const lb = $("#lightbox");
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeLightbox() {
    const lb = $("#lightbox");
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  /* ---------- nav: scroll + mobile menu ---------- */
  function initNav() {
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $("#navToggle");
    const links = $(".nav__links");
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-menu-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-menu-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- events ---------- */
  function initEvents() {
    $$(".lang-btn").forEach((b) =>
      b.addEventListener("click", () => applyLang(b.dataset.lang))
    );

    $("#galleryGrid").addEventListener("click", (e) => {
      const item = e.target.closest(".gallery__item");
      if (item) openLightbox(Number(item.dataset.index));
    });

    $("#lightboxClose").addEventListener("click", closeLightbox);
    $("#lightboxNext").addEventListener("click", () => openLightbox(lightboxIndex + 1));
    $("#lightboxPrev").addEventListener("click", () => openLightbox(lightboxIndex - 1));
    $("#lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (!$("#lightbox").classList.contains("is-open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") openLightbox(lightboxIndex + 1);
      if (e.key === "ArrowLeft") openLightbox(lightboxIndex - 1);
    });
  }

  /* ---------- init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#footerYear").textContent = new Date().getFullYear();
    renderGallery();
    initNav();
    initEvents();
    applyLang(currentLang);
  });
})();
