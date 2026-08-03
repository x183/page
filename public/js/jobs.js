jobs = [
  {
    role: "Application Software Developer",
    company: "Satcube AB",
    time: "Jun 2026 - Current",
    description: [
      "Develop & maintain services",
      "System maintenance, monitoring, and upkeep",
    ],
  },
  {
    role: "Instructor",
    company: "Frivilliga Radioorganisationen FRO",
    time: "May 2025 - May 2026",
    description: [
      "Designed and created a new web shop for the organisation.",
      "Planned and held several courses in programming and computer security for teenagers.",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Chalmers University of Technology",
    time: "Oct 2022 - Jan 2025",
    description: [
      "Graded students' assignments and exams.",
      "Held exercise and lab sessions teaching students concepts of software engineering and computer science. ",
    ],
  },
  {
    role: "Intern R&D",
    company: "Ericsson",
    time: "Jun 2024 - Nov 2024",
    description: [
      "Updated web based tools to use Oauth2 authentication.",
      "Helped redesign and build a website for tracking commits through a CI flow.",
    ],
  },
  {
    role: "Intern R&D",
    company: "Ericsson",
    time: "Jun 2023 - Sep 2023",
    description: [
      "Built a website using Django, collecting and displaying inventories of customers.",
    ],
  },
  {
    role: "Military service",
    company: "Swedish Defence Force",
    time: "Aug 2020 - Jun 2021",
    description: [
      "Basic military training",
      "Took courses in computer science at KTH",
      "Basic computer security and networking",
    ],
  },
];

function createJob(job) {
  let j = document.createElement("div");
  j.style.display = "flex";
  j.style.justifyContent = "space-between";
  j.style.width = "100vw-360px";
  // Right hand column
  let dateCol = document.createElement("div");
  let date = document.createElement("h2");
  date.innerHTML = job.time;
  dateCol.appendChild(date);

  // Left hand column
  let col = document.createElement("div");
  // Role
  let role = document.createElement("h2");
  role.innerHTML = job.role;
  col.appendChild(role);
  // Company
  let company = document.createElement("div");
  company.style.fontWeight = 800;
  company.style.marginTop = "-1em";
  company.style.marginBottom = "1em";
  company.innerHTML = job.company;
  col.appendChild(company);
  // Description
  let lst = document.createElement("ul");
  job.description.forEach((desk) => {
    let li = document.createElement("li");
    li.innerHTML = desk;
    lst.appendChild(li);
  });
  col.appendChild(lst);

  // Add columns to flexbox
  j.appendChild(col);
  j.appendChild(dateCol);
  return j;
}
