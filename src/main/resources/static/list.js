var listAll = 'https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json';
var btn = document.getElementById("load-more"); // create a pointer reference to the button in index.jsp
var apiContainer = document.getElementById("results");


btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();

	request.open("GET", listAll);

	request.onload = function() {
		console.log(request.responseText);
		var data = JSON.parse(request.responseText);
		renderHTML(data);
	}

	request.send();
	})

	function renderHTML(data){
		for (var i = 0; i < data.complete.length-1; i++){
			console.log(i);
			var htmlString = "<p>" + data.complete[i].firstName + " " +
				data.complete[i].lastName + ", "+ data.complete[i].innovation + 
				", "+ data.complete[i].year + "</p>";
			apiContainer.insertAdjacentHTML("beforeend", htmlString);
	}
}
