projects = [
  {
    name: "Python Tutorial Package",
    description:
      "School project. Created a website where people learning programming can do exercises and have a playground to try out different techniques and functions.",
    date: "2024",
    link: "https://github.com/Dunkaburk/DATX11-VT24-13",
  },
  {
    name: "GAMES",
    description:
      "School project. Created a web service where people can manage their physical game libraries, functionality for multiple users and borrowing games..",
    date: "2023",
    link: "https://github.com/cthit/GAMES",
  },
  {
    name: "findIT",
    description: "A project that lists services, similar to this page.",
    date: "2023",
    link: "https://github.com/cthit/findit",
  },
];

function createProject(proj) {
  let ject = document.createElement("div");
  ject.style.display = "flex";
  ject.style.justifyContent = "space-between";
  ject.style.width = "100vw-360px";
  // Right hand column
  let dateCol = document.createElement("div");
  let date = document.createElement("h2");
  date.innerHTML = proj.date;
  dateCol.appendChild(date);

  // Left hand column
  let col = document.createElement("div");
  // Name
  let name = document.createElement("h2");
  name.innerHTML = proj.name;
  col.appendChild(name);
  // Link
  let link = document.createElement("a");
  link.style.fontWeight = 800;
  link.style.marginTop = "-1em";
  link.style.marginBottom = "1em";
  link.href = proj.link;
  link.innerHTML = proj.link;
  col.appendChild(link);
  // Description
  let desc = document.createElement("p");
  desc.innerHTML = proj.description;
  col.appendChild(desc);

  // Add columns to flexbox
  ject.appendChild(col);
  ject.appendChild(dateCol);
  return ject;
}
