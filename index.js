const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `${userName}/javascript-fetch-lab`

function Issue(attributes) {
  this.title = attributes.title;
  this.body = attributes.body;
  this.url = attributes.url;
}

function Repo(attributes) {
  this.url = attributes.url;
}

Issues.prototype.template = function() {
  var template = `<li>Title: <a href="${this.url}">${this.title} </a><span> | Body: ${this.body}</span></li>`
  return template;
}

Repo.prototype.template = function() {
  var template = `<h3>Forked Successfully!</h3><a href="${this.url}"> ${this.url}</a>`
}

function getIssues() {
  fetch(`${baseApi}repos/${fork}/issues`).
    then(resp => {
      resp.json().then( data => {
        for (let i = 0; i < data.length; i++) {
          displayIssue(new Issue(data[i]))
        }
      })
    })
}

function showIssues(json) {
  $('#issues').append(issue.template())
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = {
    title: issueTitle,
    body: issueBody
  }
  fetch(`${baseApi}repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => {
    let repo = new Repo(resp);
    showForkedRepo(repo);
  })
}

function getToken() {
  return ''
}
