const token = ''
const githubUrl = "https://api.github.com/repos/"


function getIssues() {
  fetch(`${githubUrl}efl7a/javascript-fetch-lab/issues`, {
    method: 'get',
    headers: {
      Authorization:`token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var issueList = `<ul>${json.map(item => '<li>' + item.title + '</li>').join('')}</ul>`
  var issues = document.getElementById("issues")
  issues.innerHTML = issueList
}

function createIssue() {
  var postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  fetch(`${githubUrl}efl7a/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization:`token ${token}`
    }
  }).then(getIssues())
}

function showResults(json) {
  var url = json.full_name
  var results = document.getElementById("results")
  results.innerHTML = `<a href="https://github.com/${url}" target="_blank">New Repo</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`${githubUrl}${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization:`token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
