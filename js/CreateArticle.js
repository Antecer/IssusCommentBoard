var issues = {
	url: "https://api.github.com/repos/{0}/{1}/issues",
	title: "",
	body: "",
	assignee: null,
	milestone: null,
	labels: "",
	assignees: "",
	author: "Antecer",
	project: "IssusCommentBoard"
}

$(document).ready(function() {
	$("#postIssues").click(function() {
		$.post(issues.url.format(issues.author, issues.project), {
				title: "TestCreateIssues",
				body: "测试一下post创建issues",
				assignee: "Antecer",
				assignees: [{
					login: "Antecer",
					id: 8684916,
					avatar_url: "https://avatars2.githubusercontent.com/u/8684916?v=3",
					gravatar_id: "",
					url: "https://api.github.com/users/Antecer",
					html_url: "https://github.com/Antecer",
					followers_url: "https://api.github.com/users/Antecer/followers",
					following_url: "https://api.github.com/users/Antecer/following{/other_user}",
					gists_url: "https://api.github.com/users/Antecer/gists{/gist_id}",
					starred_url: "https://api.github.com/users/Antecer/starred{/owner}{/repo}",
					subscriptions_url: "https://api.github.com/users/Antecer/subscriptions",
					organizations_url: "https://api.github.com/users/Antecer/orgs",
					repos_url: "https://api.github.com/users/Antecer/repos",
					events_url: "https://api.github.com/users/Antecer/events{/privacy}",
					received_events_url: "https://api.github.com/users/Antecer/received_events",
					type: "User",
					site_admin: false
				}],
				milestone: null,
				labels: []
			},
			function(data) {
				$("#comment").empty();
				$("#comment").append(data);
			});
	});
});