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
    const d = 0.01;
    const bbox = [lng - d, lat - d, lng + d, lat + d].join("%2C");
    $("#mapFrame").src =
      `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

    // Contact
    const c = PROPERTY.contact;
    const subject = encodeURIComponent(t.contact.mailSubject);
    const cards = [];
    if (c.agent) cards.push(`<div class="contact__card"><span class="contact__name">${c.agent}</span></div>`);
    if (c.phone)
      cards.push(
        `<a class="contact__card contact__card--link" href="tel:${c.phone.replace(/\s/g, "")}">
          <span class="contact__label">${t.contact.callLabel}</span>
          <span class="contact__value">${c.phone}</span>
        </a>`
      );
    if (c.email)
      cards.push(
        `<a class="contact__card contact__card--link" href="mailto:${c.email}?subject=${subject}">
          <span class="contact__label">${t.contact.emailLabel}</span>
          <span class="contact__value">${c.email}</span>
        </a>`
      );
    $("#contactCards").innerHTML = cards.join("");
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
