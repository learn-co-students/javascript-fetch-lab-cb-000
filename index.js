function getIssues() {

  return fetch(`api.github.com/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function showIssues(json) {
  const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json);
}

function createIssue() {
  return fetch(`api.github.com/javascript-fetch-lab/issues`, {
    method: 'post',
    body: 'test body',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
}

function showResults(json) {
  const template = Handlebars.compile(document.getElementById('repo-template').innerHTML);
  document.getElementById('results').innerHTML = template(json)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
