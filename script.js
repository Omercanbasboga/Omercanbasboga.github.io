const projects = [
  {
    name: "monitoring-hub",
    icon: "📡",
    desc: {
      en: "A Spring Boot service that ended up dealing with sensor data in four completely different shapes: REST polling, bulk CSV, FTP delimited files, and one custom binary format, then normalizing all of it into a single API. It also handles gap-filling and min-max downsampling so the charts on the other end don't choke.",
      tr: "Sensör verisini dört tamamen farklı formattan (REST polling, toplu CSV, FTP üzerinden delimited dosya, bir de özel binary format) çekip hepsini tek bir API'ye normalize eden Spring Boot servisi. Grafikler tıkanmasın diye boşluk doldurma ve min-max downsampling da var."
    },
    repo: "https://github.com/Omercanbasboga/monitoring-hub",
    tags: ["Java", "Spring Boot", "PostgreSQL"]
  },
  {
    name: "monitoring-hub-dashboard",
    icon: "📊",
    desc: {
      en: "React frontend for monitoring-hub. The main problem was rendering really long time-series charts without the browser choking, so it leans on LTTB downsampling, plus a view that fails over cleanly between data sources.",
      tr: "monitoring-hub'ın React frontend'i. Asıl dert uzun zaman serisi grafiklerini tarayıcı tıkanmadan çizebilmekti, o yüzden LTTB downsampling kullanıyor; ayrıca kaynaklar arasında sorunsuz geçiş yapan bir failover görünümü var."
    },
    repo: "https://github.com/Omercanbasboga/monitoring-hub-dashboard",
    tags: ["React", "Redux Toolkit"]
  },
  {
    name: "sso-gateway-bff",
    icon: "🔐",
    desc: {
      en: "A reactive OAuth2/OIDC backend-for-frontend gateway. The tokens stay server-side and get relayed to downstream services from there, so if someone pokes around in the browser there's nothing worth stealing.",
      tr: "Reactive bir OAuth2/OIDC backend-for-frontend gateway'i. Token'lar sunucu tarafında kalıyor ve oradan downstream servislere iletiliyor, yani biri tarayıcıda kurcalasa bile çalmaya değer bir şey bulamıyor."
    },
    repo: "https://github.com/Omercanbasboga/sso-gateway-bff",
    tags: ["Java", "Spring Cloud Gateway"]
  },
  {
    name: "iam-admin-console",
    icon: "🔑",
    desc: {
      en: "Admin console for the gateway above, client/user/role/scope management. The one thing I'm actually proud of here is collapsing five nearly-identical assignment screens into one reusable checklist component.",
      tr: "Yukarıdaki gateway'in admin konsolu, client/kullanıcı/rol/scope yönetimi. Asıl gurur duyduğum kısım, birbirine neredeyse aynı beş ayrı ekranı tek bir tekrar kullanılabilir checklist bileşenine indirmek oldu."
    },
    repo: "https://github.com/Omercanbasboga/iam-admin-console",
    tags: ["React", "MUI"]
  },
  {
    name: "org-management-console",
    icon: "🏢",
    desc: {
      en: "Console for managing organizations, members, and meetings, plus an approvals queue that somehow needed to handle three different entity types without turning into three separate screens, so it's one table and one dialog underneath.",
      tr: "Organizasyon, üye ve toplantı yönetimi konsolu; bir de üç farklı entity tipini tek bir tablo ve tek bir dialog altında toplayan bir onay kuyruğu var, üç ayrı ekrana bölünmesin diye."
    },
    repo: "https://github.com/Omercanbasboga/org-management-console",
    tags: ["React", "MUI"]
  },
  {
    name: "minmax-lttb-downsampler",
    icon: "📉",
    desc: {
      en: "Small dependency-free Java library for squeezing long time series down to a fixed point budget without losing the spikes that actually matter. The test I care about most: bury one spike in 30,000 points and check it's still there after reducing to 300.",
      tr: "Uzun zaman serilerini sabit bir nokta bütçesine indirirken önemli olan sıçramaları kaybetmeyen, bağımlılığı olmayan küçük bir Java kütüphanesi. En çok önemsediğim test: 30.000 nokta arasına bir sıçrama gömüp 300'e indirdikten sonra hâlâ orada mı diye bakıyor."
    },
    repo: "https://github.com/Omercanbasboga/minmax-lttb-downsampler",
    tags: ["Java"]
  },
  {
    name: "hollowmere",
    icon: "🗡️",
    desc: {
      en: "Match-3 puzzle game set in a small dark-fantasy world I made up for it, characters and all. Matching a creature's tiles fills its ward meter, and once that's full it's sealed for the rest of the run.",
      tr: "Kendi uydurduğum küçük bir dark-fantasy dünyasında geçen bir match-3 bulmaca oyunu, karakterler dahil hepsi kendi kafamdan. Bir yaratığın taşlarını eşleştirmek onun mühür barını dolduruyor, bar dolunca da o yaratık run boyunca mühürleniyor."
    },
    repo: "https://github.com/Omercanbasboga/hollowmere",
    demo: "https://omercanbasboga.github.io/hollowmere/",
    tags: ["JavaScript", "Game"]
  },
  {
    name: "hollowmere-liveops",
    icon: "⚙️",
    desc: {
      en: "Config service behind Hollowmere. Tuning board size, move limit, and difficulty per level without redeploying the game was the whole point, and there's a hardcoded fallback in the client so the game keeps playing fine even if this thing is taking a nap.",
      tr: "Hollowmere'in arkasındaki config servisi. Amaç, oyunu yeniden deploy etmeden level bazında tahta boyutu, hamle limiti ve zorluk ayarlayabilmekti; bu servis uyusa bile client'taki hardcoded fallback sayesinde oyun gayet normal oynanmaya devam ediyor."
    },
    repo: "https://github.com/Omercanbasboga/hollowmere-liveops",
    tags: ["Java", "Spring Boot"]
  },
  {
    name: "tallyup",
    icon: "💸",
    desc: {
      en: "Group expense splitter. The part I actually cared about was the settlement step, instead of everyone paying everyone back, it figures out who owes who and clears it in as few transfers as possible.",
      tr: "Grup harcama paylaşım uygulaması. Asıl uğraştığım kısım settlement adımıydı, herkes herkese geri ödemek yerine kimin kime borçlu olduğunu çözüp mümkün olan en az transferle kapatıyor."
    },
    repo: "https://github.com/Omercanbasboga/tallyup",
    tags: ["Java", "Spring Boot", "React"]
  },
  {
    name: "installment-scheduler",
    icon: "🧾",
    desc: {
      en: "BNPL-style installment engine. Splits a purchase into a payment plan without the usual cent-rounding drift piling up somewhere, and tracks late fees with an idempotency flag so a sweep job that gets retried can't double-charge anyone.",
      tr: "BNPL tarzı bir taksitlendirme motoru. Bir satın almayı, kuruş yuvarlamalarının bir yerlerde birikip kaymasına izin vermeden taksit planına bölüyor; gecikme faizlerini de bir idempotency flag ile takip ediyor, yani tekrar çalışan bir sweep job kimseyi iki kere ücretlendiremiyor."
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

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
}
