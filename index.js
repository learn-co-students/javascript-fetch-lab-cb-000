function getIssues() {
  fetch('https://api.github.com/repos/mjhough/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
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
      Authorization: `token ${getToken()}`
    }
  }).then(res => showIssues(res));
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
  return ''
}
