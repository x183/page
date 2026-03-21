const education = [
  {
    title: "Software Engineering and Technology, Msc",
    school: "Chalmers University of Technology",
    time: "Sep 2024 - Jun 2026",
    description:
      "Mainly focused on skills required aside from pure development; Software architecture, testing, requirement elicitation, project management, etc.",
    courses: [
      "Advanced Functional Programming",
      "Quality Assurance and Testing",
      "Project Management",
      "Compiler Construction",
      "Architectures for Scale-out Systems",
      "Parallel Functional Programming",
    ],
  },
  {
    title: "Software Engineering, Bsc",
    school: "Chalmers University of Technology",
    time: "Sep 2021 - Jun 2024",
    description:
      "Bachelor in software engineering, focus on learning fundamentals of software development and engineering.",
    courses: [
      "Functional Programming",
      "Software quality and Testing",
      "Agile Software Project Management",
      "Object Oriented Programming and Design",
      "Software Engineering Principles for Complex Systems",
    ],
  },
  {
    title: "Free standing courses",
    school: "Linnaeus University",
    time: "Jun 2023 - Jul 2023",
    description:
      "Took a summer course as an opportunity to learn about creating smart devices, created a device measuring statistics about my apartment.",
    courses: ["Applied IoT, introductory course"],
  },
  {
    title: "Free standing courses",
    school: "KTH",
    time: "Oct 2020 - Feb 2021",
    description:
      "Took 30hec courses in computer networking and security during autumn 2020.",
    courses: [
      "Computer Networking",
      "Computer Systems",
      "Computer Security",
      "Ethical Hacking",
    ],
  },
];

function createEducation(edu) {
  let cation = document.createElement("div");
  cation.style.display = "flex";
  cation.style.justifyContent = "space-between";
  cation.style.width = "100vw-360px";
  // Right hand column
  let dateCol = document.createElement("div");
  let date = document.createElement("h2");
  date.innerHTML = edu.time;
  dateCol.appendChild(date);

  // Left hand column
  let col = document.createElement("div");
  // title
  let title = document.createElement("h2");
  title.innerHTML = edu.title;
  col.appendChild(title);
  // Education Centre
  let school = document.createElement("div");
  school.style.fontWeight = 800;
  school.style.marginTop = "-1em";
  school.style.marginBottom = "1em";
  school.innerHTML = edu.school;
  col.appendChild(school);
  // Description
  let desc = document.createElement("p");
  desc.innerHTML = edu.description;
  col.appendChild(desc);
  // Courses
  let lst = document.createElement("ul");
  edu.courses.forEach((course) => {
    let li = document.createElement("li");
    li.innerHTML = course;
    lst.appendChild(li);
  });
  col.appendChild(lst);

  // Add columns to flexbox
  cation.appendChild(col);
  cation.appendChild(dateCol);
  return cation;
}
