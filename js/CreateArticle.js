var issues = {
	url: "https://api.github.com/repos/Antecer/IssusCommentBoard/issues",
	title: "",
	body: "",
	assignee: null,
	milestone: null,
	labels: "",
	assignees: "",
	author: "Antecer",
	project: "IssusCommentBoard"
}

String.prototype.format = function() {
	var args = arguments;
	return this.replace(/\{(\d+)\}/g,
		function(m, i) {
			return args[i];
		});
}


$(document).ready(function() {
	$("#postIssues").click(function() {
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("POST", issues.url, true);
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlhttp.send(
			'{ "title": "TestCreateIssues", "body": "测试一下post创建issues", "assignee": "Antecer", "assignees": [{ "login": "Antecer", "id": 8684916, "avatar_url": "https://avatars2.githubusercontent.com/u/8684916?v=3", "gravatar_id": "", "url": "https://api.github.com/users/Antecer", "html_url": "https://github.com/Antecer", "followers_url": "https://api.github.com/users/Antecer/followers", "following_url": "https://api.github.com/users/Antecer/following{/other_user}", "gists_url": "https://api.github.com/users/Antecer/gists{/gist_id}", "starred_url": "https://api.github.com/users/Antecer/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/Antecer/subscriptions", "organizations_url": "https://api.github.com/users/Antecer/orgs", "repos_url": "https://api.github.com/users/Antecer/repos", "events_url": "https://api.github.com/users/Antecer/events{/privacy}", "received_events_url": "https://api.github.com/users/Antecer/received_events", "type": "User", "site_admin": false }], "milestone": 1, "labels": ["bug"] }'
			);
//		$.post(issues.url.format(issues.author, issues.project), 
//		{ "title": "TestCreateIssues", "body": "测试一下post创建issues", "assignee": "Antecer", "assignees": [{ "login": "Antecer", "id": 8684916, "avatar_url": "https://avatars2.githubusercontent.com/u/8684916?v=3", "gravatar_id": "", "url": "https://api.github.com/users/Antecer", "html_url": "https://github.com/Antecer", "followers_url": "https://api.github.com/users/Antecer/followers", "following_url": "https://api.github.com/users/Antecer/following{/other_user}", "gists_url": "https://api.github.com/users/Antecer/gists{/gist_id}", "starred_url": "https://api.github.com/users/Antecer/starred{/owner}{/repo}", "subscriptions_url": "https://api.github.com/users/Antecer/subscriptions", "organizations_url": "https://api.github.com/users/Antecer/orgs", "repos_url": "https://api.github.com/users/Antecer/repos", "events_url": "https://api.github.com/users/Antecer/events{/privacy}", "received_events_url": "https://api.github.com/users/Antecer/received_events", "type": "User", "site_admin": false }], "milestone": 1, "labels": ["bug"] },
//			function(data) {
//				$("#comment").empty();
//				$("#comment").append(data);
//			});
	});
});