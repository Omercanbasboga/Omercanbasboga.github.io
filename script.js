const projects = [
  {
    name: "monitoring-hub",
    desc: "Spring Boot service that pulls sensor data in from four different shapes (REST polling, bulk CSV, delimited FTP, a custom binary format) and normalizes it into one API, with gap-filling and min-max downsampling for charts.",
    repo: "https://github.com/Omercanbasboga/monitoring-hub",
    tags: ["Java", "Spring Boot", "PostgreSQL"]
  },
  {
    name: "monitoring-hub-dashboard",
    desc: "The React frontend for monitoring-hub. Renders long time-series charts without choking, with LTTB downsampling and a cross-source failover view.",
    repo: "https://github.com/Omercanbasboga/monitoring-hub-dashboard",
    tags: ["React", "Redux Toolkit"]
  },
  {
    name: "sso-gateway-bff",
    desc: "A reactive OAuth2/OIDC backend-for-frontend gateway. Keeps the actual tokens server-side and relays them to downstream services, so the SPA never sees anything worth stealing.",
    repo: "https://github.com/Omercanbasboga/sso-gateway-bff",
    tags: ["Java", "Spring Cloud Gateway"]
  },
  {
    name: "iam-admin-console",
    desc: "Admin console for the gateway above. Client/user/role/scope management, one reusable assignment-checklist component instead of five near-identical ones.",
    repo: "https://github.com/Omercanbasboga/iam-admin-console",
    tags: ["React", "MUI"]
  },
  {
    name: "org-management-console",
    desc: "Console for managing organizations, members, meetings, and a pending-approvals queue that handles three different entity types through one table and one dialog.",
    repo: "https://github.com/Omercanbasboga/org-management-console",
    tags: ["React", "MUI"]
  },
  {
    name: "minmax-lttb-downsampler",
    desc: "A small dependency-free Java library for reducing long time series down to a fixed point budget without losing spikes. The test that matters most checks a single spike buried in 30,000 points survives being reduced to 300.",
    repo: "https://github.com/Omercanbasboga/minmax-lttb-downsampler",
    tags: ["Java"]
  },
  {
    name: "hollowmere",
    desc: "A match-3 puzzle set in a small dark-fantasy world I put together for it, original characters and all. Matching a creature's tiles fills its ward meter, and once that's full it's sealed for the rest of the run.",
    repo: "https://github.com/Omercanbasboga/hollowmere",
    demo: "https://omercanbasboga.github.io/hollowmere/",
    tags: ["JavaScript", "Game"]
  },
  {
    name: "hollowmere-liveops",
    desc: "The config service behind Hollowmere. Lets me tune board size, move limit, and difficulty per level without redeploying the game, with a hardcoded fallback in the client so the game still plays fine if this is asleep.",
    repo: "https://github.com/Omercanbasboga/hollowmere-liveops",
    tags: ["Java", "Spring Boot"]
  },
  {
    name: "tallyup",
    desc: "Group expense splitter. The part I actually cared about is the settlement step — instead of everyone paying everyone back, it works out who owes who and settles it in as few transfers as possible.",
    repo: "https://github.com/Omercanbasboga/tallyup",
    tags: ["Java", "Spring Boot", "React"]
  },
  {
    name: "installment-scheduler",
    desc: "A BNPL-style installment engine. Splits a purchase into a payment plan without the usual cent-rounding drift, and tracks late fees with an idempotency flag so a retried sweep job can't double-charge someone.",
    repo: "https://github.com/Omercanbasboga/installment-scheduler",
    tags: ["Java", "Spring Boot"]
  }
];

const grid = document.getElementById("project-grid");

projects.forEach((p) => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  const link = document.createElement("a");
  link.href = p.repo;
  link.textContent = p.name;
  title.appendChild(link);
  card.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = p.desc;
  card.appendChild(desc);

  if (p.demo) {
    const links = document.createElement("div");
    links.className = "links";
    const demoLink = document.createElement("a");
    demoLink.href = p.demo;
    demoLink.textContent = "Live demo";
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

document.getElementById("updated").textContent = new Date().toLocaleDateString("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric"
});
