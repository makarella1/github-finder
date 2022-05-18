const github = new GitHub();
const ui = new UI();

const searchInput = document.querySelector('.search-user');

let typingTimeout;
const TYPING_INTERVAL = 1000;

searchInput.addEventListener('keyup', setTypingTimeout);

function setTypingTimeout() {
  clearTimeout(typingTimeout);

  ui.showLoader();

  typingTimeout = setTimeout(fetchUser, TYPING_INTERVAL);
}

function fetchUser() {
  const inputText = searchInput.value;

  if (inputText.trim() !== '') {
    github.getUser(inputText).then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.hideLoader();
        ui.showAlert('User not found 😐', 'alert alert-warning');
      } else {
        ui.hideLoader();
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.hideLoader();
    ui.clearProfile();
  }
}
