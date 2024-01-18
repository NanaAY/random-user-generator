function fetchUserData() {
  fetch("https://randomuser.me/api")
    .then((response) => response.json)
    .then((data) => showUser(data.results[0]));
}

function showUser(user) {
  const userDisplay = document.getElementById("user");
  if (user.gender === "female") {
    document.body.style.backgroundColor = "pink";
  } else {
    document.body.style.backgroundColor = "green";
  }

  userDisplay.innerHTML = `
  <div class="flex justify-between">
          <div class="flex">
            <img
              class="w-48 h-48 rounded-full mr-8"
              src="https://randomuser.me/api/portraits/women/45.jpg"
            />
            <div class="space-y-3">
              <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
              </p>
              <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
              </p>
              <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
              </p>
              <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.country}
              </p>
              <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
          </div>
        </div>`;
}
fetchUserData();
document.getElementById("generate").addEventListener("click", fetchUserData);
