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

var jsonData = {
	"title": "再次测试下",
	"body": "测试一下post创建issues",
	"assignee": null,
	"milestone": null,
	"labels": []
}

$(document).ready(function() {
	$("#submit").click(function() {
		jsonData.title = $("#title").val();
		jsonData.body = $("#content").val();		
		$.ajax({
			url: issues.url.format(issues.author, issues.project),
			type: "POST",
			beforeSend: function(xhr) {
//				xhr.setRequestHeader("Authorization", "token "+ PersonalAccessToken);
				xhr.setRequestHeader("Authorization", "Basic " + btoa($("#username").val()+":"+$("#password").val()));
			},
			contentType: "application/json",
			dataType: "json",
			data: JSON.stringify(jsonData),
			success: function(data,status) {
				alert(status);
			}
		});
	});
});