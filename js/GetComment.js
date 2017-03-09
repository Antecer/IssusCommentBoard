$.ajax("https://api.github.com/repos/Antecer/issues/1/comments", {
	headers: { Accept: "application/vnd.github.squirrel-girl-preview.full+json" },
	dataType: "json",
	success: function(msg) {
		$("#comment").append(msg);
	}
});