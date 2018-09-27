function getIssues() {
  fetch('https://api.github.com/repos/andrewryanhyde/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token, ${getToken()}`
    }
  }).then(res => showIssues(res));
}

function showIssues(json) {
  response =
  `<ul>
    <li>${json.name}</li>
    <li>${json.body}</li>
  </ul>`
  $("#issues").append(response)
}

function createIssue() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  fetch(`https://api.github.com/repos/michanders/javascript-fetch-lab/issues`, {
    method: 'post',
    title: title,
    body: body,
    headers: {
      Authorization: `token, ${getToken()}`
    }
  }).then(res => showIssues(res));
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => $('#results').html(`<a href = "${res.url}">${res.url}</a>`));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
