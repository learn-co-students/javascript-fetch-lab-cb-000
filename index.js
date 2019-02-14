function getIssues() {

  //GET /repos/:owner/:repo/issues
  var apiQuery = "https://api.github.com/repos/marysue/javascript-fetch-lab/issues"
  var token = getToken();
  fetch(apiQuery,
    {
      method: 'GET',
      //body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
    }
  }).then(res => showStatus(res))
    .then(res => res.json())
    .then (res => showIssues(res))
}

function showIssues(json) {
    console.log("json.length = " + json.length);

    document.getElementById('issues').innerHTML = "";
    for (let i=0; i< json.length; i++){
      let title = json[i].title;
      let body = json[i].body;
      let number = json[i].number;
      console.log(number + ": " + title + "\n" + body);
      document.getElementById('issues').innerHTML +="<p>" + number + ": " + title + "<br>" + body + "</p>";
    }
}


function createIssue() {
  //get the values for the issue
  const issueTitle = document.getElementById("title").value;
  const issueBody = document.getElementById("body").value;
  
  //clear out the issue boxes
  document.getElementById("title").value = "";
  document.getElementById("body").value = "";

  //prepare our query
  var repoOwner = "marysue";
  var repoName = "javascript-fetch-lab";
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/issues";
 
 //This ajax call works. It was instrumental in 
 //teaching me how to use fetch -- particularly
 //how it dealt with JSON.stringify on the params
  /*$.ajax({
    url: url,
    type: "POST",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "token " + getToken());
    },
    data: JSON.stringify({
      title: issueTitle, 
      body: issueBody
    })
  }).done(showIssue)
    .fail(handleError);
    */
   
  fetch(url, {
    method: "post",
    body: JSON.stringify({
      "title": `${issueTitle}`, 
      "body": `${issueBody}`}),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => showStatus(res))
    .then(res => res.json())
    .then(res => getIssues(res));
  
}

//for the ajax call
function handleError(res){
  console.log("Error received:  " + res);
}

function showStatus(json){

  document.getElementById('status').innerHTML = "Status:  " + json.status + " - " + json.statusText + "<br>Invocation:<br><a href='" + json.url + "'target='_blank'>" + json.url + "</a><br><br>";
  return json;
}

function showResults(json) {
      const resultsDiv = document.getElementById("results");
      const link = document.createElement("p");
      link.innerHTML = "Forked lab:<br><a href='" + json.html_url +"'target='_blank'>" + json.html_url + "</a>";
      link.href = json.html_url;
      resultsDiv.appendChild(link);
      console.log("Url:  " +  json.html_url);  
}

function showForkedRepo(html_url){
  //showForkedRepo, display the repo information 
  //in the browser by appending html with a link 
  //to the repository url to the DOM.
  document.getElementById('results').innerHTML += "<p><a id='linkToForkedRepo' data-url='" + html_url + "' href=" + html_url + " target=''blank''>Forked Repo</a></p>";
}

function forkRepo() {
  //use fetch to fork it!
  //POST /repos/:owner/:repo/forks   : To create a repo
  //GET /repos/:owner/:repo/forks    :  To list repos

  //GET /search/repositories
  //https://api.github.com/search/repositories?q=' + query

/*
    const repo = 'learn-co-curriculum/javascript-fetch-lab'
    const token = getToken();
    const postData = {
    body: 'Great stuff'
    };
  
    fetch('https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks',
    {
      method: 'POST',
      //body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
    }
  }).then(res => showResults(res)); //res => console.log(res));
  */

 const repo =
 "https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks";
fetch(repo, {
 method: "post",
 headers: {
   Authorization: `token ${getToken()}`
 }
})
  .then(res => showStatus(res))
  .then(res => res.json())
  .then(res => showResults(res));


//use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
