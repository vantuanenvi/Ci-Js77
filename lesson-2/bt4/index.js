let addBtn = document.querySelector("#addButton");
let users = [];
let userList = document.querySelector("#user-list");
let findBtn = document.querySelector("#findButton");
let listUser = document.getElementById("user-list");
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
    displayUsers();
    document.querySelector("#inputName").value = "";
    document.querySelector("#inputNumber").value = "";
  }
});

function displayUsers() {
  document.getElementsByTagName("ul")[0].innerHTML = "";
  users.forEach((user, index) => {
    let liName = document.createElement("li");
    liName.setAttribute("id", "liName");
    liName.innerHTML = `${user.name}` + `<p id= "space"> ${user.number}</p>`;
    listUser.appendChild(liName);

    function sortUser() {
        Object.keys(user).sort();
        console.log(Object.keys(user))

    }
    sortUser();
  });
}

findBtn.onclick = function findUser() {
  let name = document.querySelector("#find").value;
  let filter = name.toUpperCase();
  for (let i = 0; i < users.length; i++) {
    a = users[i].name;
    console.log(a.toUpperCase());
    console.log(filter);
    console.log(document.querySelectorAll("#liName")[i]);
    if (a.toUpperCase().indexOf(filter) > -1) {
      document.querySelectorAll("#liName")[i].style.display = "";
    } else {
      document.querySelectorAll("#liName")[i].style.display = "none";
    }
  }
};
