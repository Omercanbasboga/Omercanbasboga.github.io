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
