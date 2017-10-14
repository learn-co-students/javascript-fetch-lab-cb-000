function getIssues() {
  const token = '';
  const issues = "https://api.github.com/repos/tahbristol/javascript-fetch-lab/issues";
  fetch(issues, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showIssues(res));

}

function showIssues(json) {
  var issues = document.getElementById('issues');
  issues.innerHMTL = json.url;
}

function createIssue() {
  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;
  const token = '';
  const issue = 'https://api.github.com/repos/tahbristol/javascript-fetch-lab/issues'
   fetch(issue, {
    method: 'post',
    body: body,
    title: title,
    assignee: "tahbristol",
    headers: {
    	Authorization: `token ${token}`
    }

   }).then(res => console.log(res));
}


function showResults(json) {
  var result = document.getElementById('results');
  result.innerHMTL = json.url;
}

function forkRepo() {

  const postData = {
    body: "Here we go, Steelers, Here we go!"
  };
  const token = '';
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => showResults(res.url));


}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
