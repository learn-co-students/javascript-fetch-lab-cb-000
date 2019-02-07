class Repo {
  constructor(attributes) {
    this.url = attributes.url;
  }
  template() {
    return `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
  }
}

class Issue {
  constructor(attributes) {
    this.title = attributes.title;
    this.body = attributes.body;
    this.url = attributes.url;
  }
  template() {
    return `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
  }
}


function getIssues(data) {
  fetch('api.github.com/repos/dapawn/javascript-fetch-lab/issues').then( response => { 
    response.json().then(data.map(dat => { 
      $('#issues').append(new Issue(dat).template());
    }))
  })
}

function showIssues(json) {
}

function createIssue() {
  const issueTitle = document.getElementById('title').value;
  const issueBody = document.getElementById('body').value;
  const postData = {title: issueTitle, body: issueBody}
  fetch('api.github.com/repos/dapawn/javascript-fetch-lab/issues', { 
    method: 'post', 
    headers: {Authorization: `token ${getToken()}` },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`api.github.com/repos/${repo}/forks`, {method: 'post', headers: {Authorization: `token ${getToken()}` } })
    .then(resp => {
      let repo = new Repo(resp);
      $('#results').append(repo.template())
    })
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
