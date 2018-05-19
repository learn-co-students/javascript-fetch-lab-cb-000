function getIssues() {
  const owner = `lumenfuzz`
  fetch(`https://api.github.com/repos/${owner}/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function showIssues(json) {
  document.getElementById('issues').innerHTML = JSON.stringify(json)
  const owner = `lumenfuzz`
  fetch(`https://api.github.com/repos/${owner}/javascript-fetch-lab/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => document.getElementById('issues').innerHTML += JSON.stringify(json));
}

function createIssue() {
  const owner = `lumenfuzz`
  fetch(`https://api.github.com/repos/${owner}/javascript-fetch-lab/issues`, {
    method: 'post',
    body: JSON.stringify({ title: document.getElementById('title').value,  body: document.getElementById('body').value }),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => showIssues(json));
}

function showResults(json) {
  document.getElementById('results').innerHTML = JSON.stringify(json)
}

function forkRepo() {
  const repo = 'javascript-fetch-lab'
  const owner = 'learn-co-curriculum'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${owner}/${repo}/forks`, {
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
