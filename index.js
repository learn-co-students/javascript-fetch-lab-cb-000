function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'c524a217567fa51f0338bfb1440dd3a7aa838e77'
}

function forkRepo(event) {
  event.preventDefault();
  var repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      'Authorization': `token ${getToken()}`
  }
}).then(res => res.json()).then(json => {showResults(json); console.log(json)});
}

function showResults(json) {
  $('#results').html(`<p><strong>${json.name}</strong> successfully forked!</p>`);
  showForkedRepo(json);
}

function showForkedRepo(json) {
  var link = `<p><a href="${json.html_url}">View on github</a></p>`;
  $('#results').append(link);
}

function createIssue() {
  var title = $('#title').val();
  var body = $('#body').val();
  var issue = 'https://api.github.com/repos/segersalex/javascript-fetch-lab/issues'
   fetch(issue, {
    methods: 'post',
    body: "This is a bug",
    title: "Found a bug",
    assignee: "segersalex",
    headers: {
    	Authorization: 'token c524a217567fa51f0338bfb1440dd3a7aa838e77'
    }
   }).then(res => console.log(res));
}

function getIssues() {
  const url = 'https://api.github.com/repos/segersalex/javascript-fetch-lab/issues'
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json()).then(json => showIssues(json));
}

function showIssues(json) {
  var issues = json.map((issue) => `<p>${issue}<p>`).join('')
  $('#issues').html(issues)
}
