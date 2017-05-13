function getIssues() {
	fetch(`https://api.github.com/repos/johnsont426/javascript-fetch-lab/issues`).then(res => res.jsono()).then(json => showIssues(json))
}

function showIssues(json) {
	const template = Handlebars.compile(document.getElementById('issues-template').innerHTML)
  document.getElementById('issues').innerHTML = template(json)
}

function createIssue() {
	const issueTitle = document.getElementById("title").value
	const issueBody = document.getElementById("body").value
	const repo = 'learn-co-curriculum/javascript-fetch-lab'
	fetch(`https://api.github.com/repos/johnsont426/javascript-fetch-lab/issues`, {
		method: 'post',
		headers: {
    	Authorization: `token ${getToken()}`
  	},
  	body: JSON.stringify({ title: issueTitle, body: issueBody})
	})
	getIssues()
}

function showResults(json) {
	var template = Handlebars.compile(document.getElementById('repo-template').innerHTML)
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
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
