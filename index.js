
var username = "pensteeler";
//var fork = `${username}/javascript-fetch-lab-cb-000`;
var fork = `${username}/javascript-fetch-lab`;

function getIssues() {
  //console.log("In getIssues");
  //console.log( json );
  //console.log( "getIssues Complete");
  fetch( `https://api.github.com/repos/${fork}/issues`, {
    method: 'get',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json()).then(json => showIssues(json));

}

function showIssues(json) {
  //console.log("In showIssues");
  //console.log( json );
  //console.log( "showIssues Complete");
  var issueList = '<div>' + json.map( i => {
    return (`
            <div>
              <p>Title: ${i.title}</p>
            </div>`
           )
  }).join('') + "</div>"
  $('#issues').append( "<br><br><h2>Current Issues:</h2><br>" );
  $('#issues').append( issueList );

}

function createIssue() {
  const issueTitle = document.getElementById('title').value
  const issueBody = document.getElementById('body').value
  const postData = { title: issueTitle, body: issueBody }

  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(resp => getIssues())
}

function showResults(json_data) {
  //console.log(json_data)
  var fork_url = `<div><a href="${json_data.url}">${json_data.url}</a></div>`
  $('#results').append( fork_url );
  //getIssues(json_data);
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const my_repo = 'pensteeler/javascript-fetch-lab-cb-000'
  //use fetch to fork it!
  fetch( `https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(response => response.json()).then(json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
