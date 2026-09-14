const projects = [
  {
    name: "monitoring-hub",
    icon: "📡",
    desc: {
      en: "Spring Boot service that pulls sensor data in from four different shapes (REST polling, bulk CSV, delimited FTP, a custom binary format) and normalizes it into one API, with gap-filling and min-max downsampling for charts.",
      tr: "Sensör verisini dört farklı formattan (REST polling, toplu CSV, FTP üzerinden delimited dosya, özel bir binary format) çekip tek bir API'ye normalize eden Spring Boot servisi. Grafikler için boşluk doldurma ve min-max downsampling da var."
    },
    repo: "https://github.com/Omercanbasboga/monitoring-hub",
    tags: ["Java", "Spring Boot", "PostgreSQL"]
  },
  {
    name: "monitoring-hub-dashboard",
    icon: "📊",
    desc: {
      en: "The React frontend for monitoring-hub. Renders long time-series charts without choking, with LTTB downsampling and a cross-source failover view.",
      tr: "monitoring-hub'ın React frontend'i. Uzun zaman serisi grafiklerini tıkanmadan çiziyor, LTTB downsampling ve kaynaklar arası failover görünümü var."
    },
    repo: "https://github.com/Omercanbasboga/monitoring-hub-dashboard",
    tags: ["React", "Redux Toolkit"]
  },
  {
    name: "sso-gateway-bff",
    icon: "🔐",
    desc: {
      en: "A reactive OAuth2/OIDC backend-for-frontend gateway. Keeps the actual tokens server-side and relays them to downstream services, so the SPA never sees anything worth stealing.",
      tr: "Reactive bir OAuth2/OIDC backend-for-frontend gateway'i. Gerçek token'ları sunucu tarafında tutup downstream servislere iletiyor, yani SPA'nın eline çalınmaya değer hiçbir şey geçmiyor."
    },
    repo: "https://github.com/Omercanbasboga/sso-gateway-bff",
    tags: ["Java", "Spring Cloud Gateway"]
  },
  {
    name: "iam-admin-console",
    icon: "🔑",
    desc: {
      en: "Admin console for the gateway above. Client/user/role/scope management, one reusable assignment-checklist component instead of five near-identical ones.",
      tr: "Yukarıdaki gateway'in admin konsolu. Client/kullanıcı/rol/scope yönetimi, birbirine çok benzeyen beş ayrı bileşen yerine tek bir tekrar kullanılabilir assignment-checklist bileşeni."
    },
    repo: "https://github.com/Omercanbasboga/iam-admin-console",
    tags: ["React", "MUI"]
  },
  {
    name: "org-management-console",
    icon: "🏢",
    desc: {
      en: "Console for managing organizations, members, meetings, and a pending-approvals queue that handles three different entity types through one table and one dialog.",
      tr: "Organizasyon, üye ve toplantı yönetimi; ayrıca üç farklı entity tipini tek bir tablo ve tek bir dialog üzerinden yöneten bir onay kuyruğu içeren konsol."
    },
    repo: "https://github.com/Omercanbasboga/org-management-console",
    tags: ["React", "MUI"]
  },
  {
    name: "minmax-lttb-downsampler",
    icon: "📉",
    desc: {
      en: "A small dependency-free Java library for reducing long time series down to a fixed point budget without losing spikes. The test that matters most checks a single spike buried in 30,000 points survives being reduced to 300.",
      tr: "Uzun zaman serilerini sabit bir nokta bütçesine indirirken ani sıçramaları kaybetmeyen, bağımlılığı olmayan küçük bir Java kütüphanesi. En önemli test, 30.000 nokta arasına gömülü tek bir sıçramanın 300'e indirilince hâlâ görünür kalıp kalmadığını kontrol ediyor."
    },
    repo: "https://github.com/Omercanbasboga/minmax-lttb-downsampler",
    tags: ["Java"]
  },
  {
    name: "hollowmere",
    icon: "🗡️",
    desc: {
      en: "A match-3 puzzle set in a small dark-fantasy world I put together for it, original characters and all. Matching a creature's tiles fills its ward meter, and once that's full it's sealed for the rest of the run.",
      tr: "Kendi kurduğum küçük bir dark-fantasy dünyasında geçen bir match-3 bulmaca oyunu, karakterler dahil hepsi orijinal. Bir yaratığın taşlarını eşleştirmek onun mühür barını dolduruyor, bar dolunca da o yaratık o run boyunca mühürleniyor."
    },
    repo: "https://github.com/Omercanbasboga/hollowmere",
    demo: "https://omercanbasboga.github.io/hollowmere/",
    tags: ["JavaScript", "Game"]
  },
  {
    name: "hollowmere-liveops",
    icon: "⚙️",
    desc: {
      en: "The config service behind Hollowmere. Lets me tune board size, move limit, and difficulty per level without redeploying the game, with a hardcoded fallback in the client so the game still plays fine if this is asleep.",
      tr: "Hollowmere'in arkasındaki config servisi. Oyunu yeniden deploy etmeden level bazında tahta boyutu, hamle limiti ve zorluk ayarlayabiliyorum; bu servis uykuya geçse bile oyun client'taki hardcoded fallback sayesinde sorunsuz çalışmaya devam ediyor."
    },
    repo: "https://github.com/Omercanbasboga/hollowmere-liveops",
    tags: ["Java", "Spring Boot"]
  },
  {
    name: "tallyup",
    icon: "💸",
    desc: {
      en: "Group expense splitter. The part I actually cared about is the settlement step, instead of everyone paying everyone back, it works out who owes who and settles it in as few transfers as possible.",
      tr: "Grup harcama paylaşım uygulaması. Asıl uğraştığım kısım settlement adımı, herkes herkese geri ödemek yerine kimin kime borçlu olduğunu çözüp mümkün olan en az transferle kapatıyor."
    },
    repo: "https://github.com/Omercanbasboga/tallyup",
    tags: ["Java", "Spring Boot", "React"]
  },
  {
    name: "installment-scheduler",
    icon: "🧾",
    desc: {
      en: "A BNPL-style installment engine. Splits a purchase into a payment plan without the usual cent-rounding drift, and tracks late fees with an idempotency flag so a retried sweep job can't double-charge someone.",
      tr: "BNPL tarzı bir taksitlendirme motoru. Bir satın almayı kuruş yuvarlamalarının birikip kaymasına yol açmadan taksit planına bölüyor; gecikme faizlerini de bir idempotency flag ile takip ediyor, yani tekrar çalışan bir sweep job kimseyi iki kere ücretlendiremiyor."
    },
    repo: "https://github.com/Omercanbasboga/installment-scheduler",
    tags: ["Java", "Spring Boot"]
  }
];

const grid = document.getElementById("project-grid");
const toggleBtn = document.getElementById("lang-toggle");

function getLang() {
  try {
    return localStorage.getItem("lang") || "en";
  } catch (e) {
    return "en";
  }
}

function setLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

function renderProjects(lang) {
  grid.innerHTML = "";

  projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    const link = document.createElement("a");
    link.href = p.repo;
    link.textContent = (p.icon ? p.icon + " " : "") + p.name;
    title.appendChild(link);
    card.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = p.desc[lang];
    card.appendChild(desc);

    if (p.demo) {
      const links = document.createElement("div");
      links.className = "links";
      const demoLink = document.createElement("a");
      demoLink.href = p.demo;
      demoLink.textContent = lang === "tr" ? "Canlı demo" : "Live demo";
      links.appendChild(demoLink);
      card.appendChild(links);
    }

    const tagWrap = document.createElement("div");
    p.tags.forEach((t) => {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = t;
      tagWrap.appendChild(tag);
    });
    card.appendChild(tagWrap);

    grid.appendChild(card);
  });
}

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });
  toggleBtn.textContent = lang === "en" ? "TR" : "EN";
  renderProjects(lang);

  const locale = lang === "tr" ? "tr-TR" : "en-GB";
  document.getElementById("updated").textContent = new Date().toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

toggleBtn.addEventListener("click", () => {
  const next = getLang() === "en" ? "tr" : "en";
  setLang(next);
  applyLang(next);
});

applyLang(getLang());
