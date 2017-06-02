const rootURL = "https://api.github.com"
var userName = 'chayasherr'
var fork = `${userName}/javascript-fetch-lab`

function getIssues() {
	fetch(`${rootURL}/repos/${fork}/issues`,{
		method: 'GET',
		headers: {
			Authorization: `token ${getToken()}`
		}
	}).then(res => res.json()).then(json => showIssues(json))
}

function showIssues(json) {
    const issuesTemplate = Handlebars.compile(document.getElementById('issues-template').innerHTML)
    document.getElementById('issues').innerHTML = issuesTemplate(json)
}

function createIssue() { 
  var titleData = document.getElementById('title').value;
  var bodyData = document.getElementById('body').value;
  var postData	= {title: titleData, body: bodyData}
  fetch(`${rootURL}/repos/${fork}/issues`,{
  	method: 'post',
  	headers: {
  		Authorization: `token ${getToken()}`
  	},
    body: JSON.stringify(postData)
  }).then(getIssues());
	
}

function showResults(json) {
	var resultTemplate = Handlebars.compile(document.getElementById('repo-template').innerHTML);
	document.getElementById('results').innerHTML = resultTemplate(json);
}

function forkRepo() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab'
    //use fetch to fork it!
    fetch(`${rootURL}/repos/${repo}/forks`, {
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
