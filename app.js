//Inits got github.js and ui.js
const github = new Github();
const ui = new UI();

const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", e => {
  // Get input text
  const userText = e.target.value;
  if (userText !== "") {
    // Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message == "Not Found") {
        ui.showAlert("User not Found", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
