var globe ;
var globe2 ;
function getIssues() {
  var link = 'https://api.github.com/repos/Carpe-Omnia/javascript-fetch-lab/issues' ;
  const token = getToken() ;
  fetch(link, {
    method: 'get',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
  globe = json ;
  var issueText = "<ul> " ;
  json.forEach(function(element) {
    issueText += "<li>Title: <a href="  ;
    issueText +=  `"${element.html_url}" > ${element.title} </a>` ;
    issueText += `<span> | Body: ${element.body} </span> </li>` ;
  })
    issueText += "</ul>" ;
    console.log(issueText) ;
    globe2 = issueText ;
    var ish = document.querySelector('#issues') ;
    setTimeout(function(){ish.innerHTML = globe2 ; console.log("set")}, 3000) ;
}

function createIssue() {
  var link = 'https://api.github.com/repos/Carpe-Omnia/javascript-fetch-lab/issues' ;
  var title = document.querySelector('#title').value ;
  var body = document.querySelector('#body').value ;
  const token = getToken() ;
  const postData = {
    title: title,
    body: body
  };

  fetch(link, {
    method: 'post',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  }).then(getIssues()) ;
}

function showResults(json) {
  globe = json ;
  var link = json.html_url ;
  var owner_login = json.owner.login ;
  var responseText = "<h3>Forked Successfully!</h3><a href=" + `"${link}" ` + ">Go To Form</a>"
  document.querySelector('#results').innerHTML = responseText ;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab' ;
  const token = getToken() ;
  fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
    .then(json => showResults(json) );

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
