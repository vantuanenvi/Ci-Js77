let addBtn = document.querySelector("#addButton");
let deleteBtn = document.querySelector("#deleteButton");
let listUser = document.getElementById("user-list");
let users = [];
if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
  displayUsers();
}
let userList = document.querySelector("#user-list");
let findBtn = document.querySelector("#findButton");

deleteBtn.addEventListener("click", () => {
  users = users.reduce((uniqueList, current) => {
    let index = uniqueList.findIndex((item) => {
      if (item.number === current.number) {
        return true;
      } else {
        return false;
      }
    });

    if (index > -1) {
      return uniqueList;
    }
    return [...uniqueList, current];
  }, []);

  displayUsers();
  // save to localstorage
  localStorage.setItem("users", JSON.stringify(users));
});

addBtn.addEventListener("click", function addUser() {
  if (
    document.querySelector("#inputName").value === "" ||
    document.querySelector("#inputNumber").value === ""
  ) {
    alert("Please Write Name and Number Phone");
  } else {
    let user = {
      name: document.querySelector("#inputName").value,
      number: document.querySelector("#inputNumber").value,
    };
    users = [...users, user];

    // Sort user
    users = users.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    displayUsers();

    // save to localstorage
    localStorage.setItem("users", JSON.stringify(users));

    document.querySelector("#inputName").value = "";
    document.querySelector("#inputNumber").value = "";
  }
});

function displayUsers() {
  document.getElementsByTagName("ul")[0].innerHTML = "";
  users.forEach((user) => {
    let liName = document.createElement("li");
    liName.setAttribute("id", "liName");
    liName.innerHTML = `${user.name}` + `<p id= "space"> ${user.number}</p>`;
    listUser.appendChild(liName);
  });
}

findBtn.onclick = function findUser() {
  let name = document.querySelector("#find").value;
  let filter = name.toUpperCase();
  for (let i = 0; i < users.length; i++) {
    a = users[i].name;
    if (
      users[i].name.toUpperCase().indexOf(filter) > -1 ||
      users[i].number.toUpperCase().indexOf(filter) > -1
    ) {
      document.querySelectorAll("#liName")[i].style.display = "";
    } else {
      document.querySelectorAll("#liName")[i].style.display = "none";
    }
  }
};
