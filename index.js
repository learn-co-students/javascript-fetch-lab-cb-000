const baseURL = 'https://api.github.com/repos/'
const repo = 'jamgar/javascript-fetch-lab'

function getIssues() {
  const token = getToken()
  fetch(`${baseURL}${repo}/issues`, {
      method: 'get',
      headers: {
        Authorization: `token ${token}`
      }
  })
  .then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = document.getElementById('issues')
  const list = json.map(function(issue) {
    return `<li>${issue.title}</li>`
  }).join('')
  issues.innerHTML = `<ul>${list}</ul>`
}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const token = getToken()
  const postIssue = {
    title: issueTitle,
    body: issueBody
  }

  fetch(`${baseURL}${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(postIssue),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => getIssues())
}

function showResults(json) {
  const results = document.getElementById('results')
  results.innerText = json.full_name
}

function showForkedRepo(json) {
  const results = document.getElementById('results')
  results.innerHTML = `<p>Forked Repo - <a href="${json.html_url}">${json.name}</a></p>`
}

function forkRepo() {
  const results = document.getElementById('results')
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch(`${baseURL}${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  })
  .then(res => res.json())
  .then(json => showForkedRepo(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
