var comments = {
	search: "https://api.github.com/repos/{0}/{1}/issues",
	url: "https://api.github.com/repos/{0}/{1}/issues/{2}/comments",
	author: "Antecer",
	project: "IssusCommentBoard",
	issuesNumber: "1",
	articleTitle: ""
}

String.prototype.format = function() {
	var args = arguments;
	return this.replace(/\{(\d+)\}/g,
		function(m, i) {
			return args[i];
		});
}

function loadComments(data) {
	for(var i = 0; i < data.length; i++) {
		var cuser = data[i].user.login;
		$("#comment").append("<div class='media'>{0}</div>".format(cuser));
	}
}

$.get(comments.search.format(comments.author, comments.project), function(data) {
	loadComments(data);
});