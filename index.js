function getIssues() {
  fetch('https://api.github.com/repos/youssefmys/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    },
    method: "GET",
  }).then(response => response.json()).then(json => showIssues(json))
}

function showIssues(json) {
  var issuesDiv = document.getElementById('issues') ;
  issuesDiv.innerHTML = JSON.stringify(json)
}

function createIssue() {

var data = {
  title: document.getElementById('title').value,
  body : document.getElementById('body').value
};

  fetch('https://api.github.com/repos/youssefmys/javascript-fetch-lab/issues', {
    headers: {
      Authorization: `token ${getToken()}`
    },
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json()).then(json => showIssues(json))

}

function showResults(json) {
  document.getElementById('results').innerHTML = `<a href = "${json.html_url}">${json.name}</a> `
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
  }).then(response => response.json()).then(json => showResults(json))
}

function getToken() {
  return ''
}
