function getIssues() {
  const repo = 'javascript-fetch-lab/issues'
  const token = getToken();

  fetch('https://api.github.com/repos/'+repo+'/issues',{
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));

}

function showIssues(json) {
  document.getElementById('issues').innerHTML = "<ul><li>"+json.title +
  " -- "+json.body+"</li><li>"+json.user.login+"</li><ul>";
}

function createIssue() {
  const repo = 'javascript-fetch-lab/issues'
  //use fetch to fork it!
  const token = getToken();

  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const postData = {title: title, body: body};

  fetch('https://api.github.com/repos/'+repo+'/issues',{
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showIssues(json));

}

function showResults(json) {
  document.getElementById('results').innerHTML = "<ul><li>"+json.name +
  " -- "+json.description+"</li><li>"+json.url+"</li><ul>";
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  const token = getToken();
  const postData = {body: 'Great Stuff'};

  fetch('https://api.github.com/repos/'+repo+'/forks',{
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
  //return 'f8036e58f3ddb304cf7a463a4fa3a1c92a5b7e87'
}
