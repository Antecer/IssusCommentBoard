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

var json = {
	"title": "TestCreateIssues",
	"body": "测试一下post创建issues",
	"assignee": "Antecer",
	"milestone": null,
	"labels": ""
}

$(document).ready(function() {
	$("#postIssues").click(function() {
		$.ajax({
			headers: { Accept: "application/vnd.github.squirrel-girl-preview.full+json" },
			dataType: "json",
			type: "post",
			url: issues.url.format(issues.author, issues.project),
			async: true,
			data: json,
			success: function() {
				$("#comment").append(data);
			}
		});
	});
});