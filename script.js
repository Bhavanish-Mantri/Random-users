const usersContainer = document.querySelector("#users");
const refreshBtn = document.querySelector("#refresh");
const themeToggle = document.querySelector("#themeToggle");

/* Skeleton loader */
function showSkeletons() {
  usersContainer.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const skeletonCard = document.createElement("div");
    skeletonCard.className = "card";

    skeletonCard.innerHTML = `
      <div class="skeleton skeleton-img"></div>
      <div class="skeleton skeleton-line"></div>
      <div class="skeleton skeleton-line"></div>
    `;

    usersContainer.appendChild(skeletonCard);
  }
}

/* Fetch users */
function getUsers() {
  showSkeletons();

  fetch("https://randomuser.me/api/?results=3")
    .then(res => res.json())
    .then(data => {
      usersContainer.innerHTML = "";

      data.results.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = user.picture.large;

        const name = document.createElement("h2");
        name.textContent = `${user.name.first} ${user.name.last}`;

        const email = document.createElement("p");
        email.textContent = user.email;

        card.append(img, name, email);
        usersContainer.appendChild(card);
      });
    })
    .catch(err => console.error("Error:", err));
}

getUsers();

refreshBtn.addEventListener("click", getUsers);

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "Light Mode";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Dark Mode";
  }
});
