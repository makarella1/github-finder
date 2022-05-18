class UI {
  constructor() {
    this.profile = document.querySelector('.profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid rounded mb-3" src=${user.avatar_url}/>
            <div class="row">
              <a class="btn btn-primary btn-block mb-3 col-10 offset-1" href="${
                user.html_url
              }" target="_blank">View Profile</a>
            </div>
          </div>
          <div class="col-md-9">
            <span class="text-secondary badge bg-primary"><strong>Public Repos: ${
              user.public_repos
            }</strong></span>
            <span class="text-secondary badge bg-dark"><strong>Public Gists: ${
              user.public_gists
            }</strong></span>
            <span class="text-secondary badge bg-warning"><strong>Followers: ${
              user.followers
            }</strong></span>
            <span class="text-secondary badge bg-success"><strong>Following: ${
              user.following
            }</strong></span>
            <hr>
            <ul class="list-group">
              <li class="list-group-item"><span class="text-secondary"><strong>Company</strong>:</span> ${
                !user.company
                  ? '<span class="badge bg-primary rounded-pill">Not stated</span>'
                  : `<span class="badge bg-primary rounded-pill">${user.company}</span>`
              }</li>
              <li class="list-group-item"><span class="text-secondary"><strong>Website/Blog</strong>:</span> ${
                !user.blog
                  ? '<span class="badge bg-primary rounded-pill">Not stated</span>'
                  : `<span class="badge bg-primary rounded-pill">${user.blog}</span>`
              }</li>
              <li class="list-group-item"><span class="text-secondary"><strong>Location</strong>:</span> ${
                !user.location
                  ? '<span class="badge bg-primary rounded-pill">Not stated</span>'
                  : `<span class="badge bg-primary rounded-pill">${user.location}</span>`
              }</li>
              <li class="list-group-item"><span class="text-secondary"><strong>Member Since</strong>:</span> <span class="badge bg-primary rounded-pill">${
                user.created_at
              }</span></li>
            </ul>
          </div>
        </div>
      </div>
      <h3>Latest Repos</h3>
      <div class="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = '';

    repos.forEach((repo) => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href=${repo.html_url} target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="text-secondary badge bg-warning"><strong>Stars: ${repo.stargazers_count}</strong></span>
              <span class="text-secondary badge bg-info"><strong>Watchers: ${repo.watchers}</strong></span>
              <span class="text-secondary badge bg-dark"><strong>Forks: ${repo.forks_count}</strong></span>
            </div>
          </div>
        </div>
      `;
    });

    document.querySelector('.repos').innerHTML = output;
  }

  clearProfile() {
    while (this.profile.firstChild) {
      this.profile.firstChild.remove();
    }
  }

  showAlert(text, className) {
    this.clearAlert();

    const searchCard = document.querySelector('.search');
    const alert = document.createElement('div');
    alert.className = className;
    alert.innerHTML = `<h4 class="alert-heading">${text}</h4>`;

    document.querySelector('.search-container').insertBefore(alert, searchCard);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showLoader() {
    document.querySelector('.loader').classList.remove('d-none');
  }

  hideLoader() {
    document.querySelector('.loader').classList.add('d-none');
  }
}
