// 1. API url
const url = "https://jsonplaceholder.typicode.com/users";
// 2.1 fetch users from the API Url
function fetchUsers() {
  // make use of the browser fetch API
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      // 2.2 Passing the user data to the renderUser function
      renderUsers(data);
    });
}
// 3. Render the users in the DOM
function renderUsers(usersData) {
  console.log("from renderUser");
  console.log(usersData);
  const ul = document.getElementById("user-list-container");
  console.log(ul);
  //3.1 render an li tag for each of the users
  usersData.forEach((user, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${index + 1}.</span>
        <span>${user.name}</span>
        <span>-</span>
        <span class="username"> ${user.username}</span>
        `;
    // 3.2 Append the current user li tag to the UL tag
    ul.appendChild(li);
  });
}
// 4. Add a search function to the DOM
function searchUsersByUsername() {
  const input = document.getElementById("search");
  const ul = document.getElementById("user-list-container");
  const inputValue = input.value.toUpperCase();
  console.log({
    inputValue,
  });
  const usersList = ul.querySelectorAll("li"); // array of all the li tags ()
  // loop through all the users and render the ones that match the search
  for (let index = 0; index < usersList.length; index++) {
    const usernameSpanTag = usersList[index].querySelector(".username");
    const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
    const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

    if (isMatch) {
      usersList[index].style.display = "block";
    } else {
      usersList[index].style.display = "none";
    }
  }
}

// calling the fetch function
fetchUsers();
